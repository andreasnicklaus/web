from flask import current_app
from backend.server.exceptions import InputLengthError

username_min_length, username_max_length = current_app.config.get('USERNAME_LENGTH')
password_min_length, password_max_length = current_app.config.get('PASSWORD_LENGTH')


def check_login_inputs(username, password):

    if len(username) < username_min_length:
        raise InputLengthError(
            field_name='username',
            field_input=username,
            length_limit=username_min_length
        )
    elif len(username) > username_max_length:
        raise InputLengthError(
            field_name='username',
            field_input=username,
            length_limit=username_max_length,
            too_short=False
        )

    elif len(password) < password_min_length:
        raise InputLengthError(
            field_name='password',
            field_input=password,
            length_limit=password_min_length
        )
    elif len(password) > password_max_length:
        raise InputLengthError(
            field_name='password',
            field_input=password,
            length_limit=password_max_length,
            too_short=False
        )
