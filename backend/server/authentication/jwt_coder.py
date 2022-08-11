import jwt
from flask import current_app
from datetime import datetime as dt, timedelta as td


def encode_jwt_token(data):
    # print(f'data: {data}, {type(data)}')
    payload = {
        'exp': dt.utcnow() + td(days=7, seconds=0),
        'iat': dt.utcnow(),
        'sub': data
    }
    # print(f'payload: {payload}')
    return jwt.encode(
        payload,
        current_app.config.get('SECRET_KEY')
    )


def decode_jwt_token(token):
    decoded_payload = jwt.decode(
        token,
        current_app.config.get('SECRET_KEY'),
        algorithms='HS256'
    )
    return decoded_payload


def get_user_uuid(token):
    return decode_jwt_token(token).get('sub')
