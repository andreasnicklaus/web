from backend.server import db
from datetime import datetime as dt

from backend.server.database_models import User


class ForumPost(db.Model):
    __tablename__ = 'ForumPosts'

    post_id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    title = db.Column(
        db.String(),
    )

    text = db.Column(
        db.String()
    )

    creation_time = db.Column(
        db.DateTime(),
        default=dt.now
    )

    creator_id = db.Column(
        db.ForeignKey('User.uuid')
    )

    def to_dict(self):
        return {
            'post_id': self.post_id,
            'title': self.title,
            'text': self.text,
            'creation_time': self.creation_time,
            'creator_id': self.creator_id,
            'creator_name': User.query.get(self.creator_id).username
        }
