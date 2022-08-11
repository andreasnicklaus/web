from functools import wraps
import jwt
from flask import request
from backend.server.authentication.jwt_coder import decode_jwt_token, get_user_uuid
from backend.server.database_models.user import User
from backend.server.responses import AuthenticationResponses as auth
from http import HTTPStatus


def logged_in(func):

    @wraps(func)
    def login_wrapper():
        jwt_token = request.cookies.get('auth_token')

        if not jwt_token:
            return auth.LOGIN_REQUIRED, HTTPStatus.UNAUTHORIZED

        try:
            user_uuid = get_user_uuid(jwt_token)
            user = User.query.filter_by(uuid=user_uuid).first()
            if user:
                if any(ip.ip == request.remote_addr for ip in user.ips):
                    return func()
                else:
                    return auth.UNKNOWN_IP, HTTPStatus.UNAUTHORIZED
            else:
                return auth.USER_NOT_EXIST, HTTPStatus.UNAUTHORIZED
        except jwt.ExpiredSignatureError:
            return auth.SIGNATURE_EXPIRED, HTTPStatus.UNAUTHORIZED
        except jwt.InvalidTokenError:
            return auth.INVALID_TOKEN, HTTPStatus.UNAUTHORIZED

    return login_wrapper
