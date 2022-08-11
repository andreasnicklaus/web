from os import environ


class Config:
    FLASK_APP = 'My_Website'
    FLASK_ENV = 'production'
    FLASK_DEBUG = 0

    HOST = '0.0.0.0'
    PORT = 5000

    POSTGRES_HOST = environ.get('POSTGRES_HOST', 'localhost')
    POSTGRES_PORT = environ.get('POSTGRES_PORT', '5432')
    POSTGRES_PASSWORD = environ.get('POSTGRES_PASSWORD', 'password')
    POSTGRES_USERNAME = environ.get('POSTGRES_USERNAME', 'postgres')

    SQLALCHEMY_DATABASE_URI = f'postgresql://{POSTGRES_USERNAME}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}'
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    PASSWORD_LENGTH = (4, 64)
    USERNAME_LENGTH = (4, 64)

    SECRET_KEY = 'wertzuiopsdfghjkcvbnm'
