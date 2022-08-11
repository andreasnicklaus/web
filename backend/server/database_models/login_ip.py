from backend.server import db


class LoginIP(db.Model):
    __tablename__ = 'LoginIP'

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    ip = db.Column(
        db.String
    )

    user_id = db.Column(
        db.ForeignKey('User.uuid')
    )

    def to_dict(self):
        return {
            'ip': self.ip,
            'user_id': self.user_id
        }
