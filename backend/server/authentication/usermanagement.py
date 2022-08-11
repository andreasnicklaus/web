from flask import request
from backend.server import db
from backend.server.exceptions import AlreadyExistsError
from backend.server.input_checks.auth_inputs import check_login_inputs
from backend.server.database_models import LoginIP, User


def create_user(username, password):
    existing_user = User.query.filter_by(username=username).first()

    if existing_user:
        raise AlreadyExistsError(existing_user)
    else:
        check_login_inputs(username, password)
        new_user = User(username=username).set_password(password)
        db.session.add(new_user)
        db.session.commit()
        print(new_user)

        login_ip = add_login_ip(new_user.uuid)
        print(login_ip)
        return new_user


def add_login_ip(user_id):
    login_ip = LoginIP(ip=request.remote_addr, user_id=user_id)
    db.session.add(login_ip)
    db.session.commit()
    return login_ip
