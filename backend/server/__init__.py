from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from backend.server_config import Config

from backend.email_service import send_mail_only_text

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # support for cross origin resource sharing by setting CORS headers
    CORS(app, supports_credentials=True)

    # initialize database with app
    print('Connecting to database...')
    db.init_app(app)

    with app.app_context():
        from backend.server.functional import functional_bp
        from backend.server.community import community_bp
        from backend.server.authentication import authentication_bp

        app.register_blueprint(functional_bp)
        app.register_blueprint(community_bp)
        app.register_blueprint(authentication_bp)

        db.create_all()

    @app.route('/')
    def home():
        return 'Backend home'

    return app
