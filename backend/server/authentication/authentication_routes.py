from flask import Blueprint, request, make_response, Response

from backend.server.authentication.login_required_decorator import logged_in
from backend.server.exceptions import AlreadyExistsError, InputLengthError
from backend.server.authentication.jwt_coder import encode_jwt_token, get_user_uuid
from backend.server.authentication.usermanagement import create_user, add_login_ip
from backend.server.database_models.user import User
from backend.server.responses import AuthenticationResponses as auth

authentication_bp = Blueprint(
    'authentication_bp', __name__,
    url_prefix='/auth'
)


@authentication_bp.route('/login', methods=["POST"])
def login():
    body = request.json

    username = body.get('username')
    password = body.get('password')

    if username and password:
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            password_correct = existing_user.check_password(password)
            if password_correct:
                if not any(ip.ip == request.remote_addr for ip in existing_user.ips):
                    # TODO: mail to approve new IP
                    add_login_ip(existing_user.uuid)

                jwt_token = encode_jwt_token(data=str(existing_user.uuid))

                response_data = {
                    'success': True,
                    'message': auth.LOGIN_SUCCESS(username),
                    'username': username
                }

                response = make_response(response_data)
                response.set_cookie('auth_token', jwt_token, httponly=True, samesite='Lax')
                return response
            else:
                return {'success': False, 'message': auth.PASSWORD_INCORRECT}
        else:
            return {'success': False, 'message': auth.USER_NOT_EXIST}
    else:
        return {'success': False, 'message': auth.PASSWORD_OR_USERNAME_MISSING}


@authentication_bp.route('/signup', methods=['POST'])
def signup():
    body = request.json

    username = body.get('username')
    password = body.get('password')

    if username and password:
        try:
            user = create_user(username, password)
            return {'success': True, 'message': auth.USER_CREATED(user)}
        except AlreadyExistsError as e:
            return {'success': False, 'message': e.message}
        except InputLengthError as e:
            return {'success': False, 'message': e.message}
    else:
        return {'success': False, 'message': auth.PASSWORD_OR_USERNAME_MISSING}


@authentication_bp.route('/logout')
@logged_in
def logout():
    response = Response(auth.LOGOUT_SUCCESS)
    response.delete_cookie('auth_token')
    return response


@authentication_bp.route('/logged_in')
def am_i_logged_in():
    authentication_token = request.cookies.get('auth_token')

    is_logged_in = False

    if authentication_token:
        try:
            user_uuid = get_user_uuid(authentication_token)
            user = User.query.filter_by(uuid=user_uuid).first()
            if user:
                if any(ip.ip == request.remote_addr for ip in user.ips):
                    is_logged_in = True
        except Exception:
            # Invalid or expired jwt token -> not logged in
            pass

    return {'logged_in': is_logged_in}


@authentication_bp.route('/userdata')
@logged_in
def user_data():
    jwt_token = request.headers.get('auth_token')
    if jwt_token == 'null':
        return {}
    user_uuid = get_user_uuid(jwt_token)
    user = User.query.get(user_uuid)
    return user.to_dict()
