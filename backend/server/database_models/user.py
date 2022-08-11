from sqlalchemy.dialects.postgresql import UUID
from werkzeug.security import generate_password_hash, check_password_hash
from backend.server import db
import uuid


class User(db.Model):
    __tablename__ = 'User'

    uuid = db.Column(
        UUID(as_uuid=True),
        default=uuid.uuid4,
        primary_key=True
    )

    username = db.Column(
        db.String,
        unique=True
    )

    password = db.Column(
        db.String
    )

    ips = db.relationship('LoginIP', backref='user', lazy=True)

    forum_posts = db.relationship('ForumPost', backref='user', lazy=True)

    def set_password(self, password):
        self.password = generate_password_hash(password=password)
        return self

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'uuid': self.uuid,
            'username': self.username,
            # 'password': self.password,
            'ip_list': [ip.ip for ip in self.ips],
            'forum_posts': [post.to_dict() for post in self.forum_posts]
        }

    def __str__(self):
        return f'User {self.username}'
