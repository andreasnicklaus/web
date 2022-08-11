from backend.server import db
from backend.server.database_models import ForumPost
from backend.server.exceptions import NotExistError


def create_post(title, creator_id, text):
    new_post = ForumPost(title=title, creator_id=creator_id, text=text)

    db.session.add(new_post)
    db.session.commit()

    return new_post.to_dict()


def get_posts():
    return {'posts': [post.to_dict() for post in ForumPost.query.all()]}


def delete_post(post_id):
    post = ForumPost.query.get(post_id)
    if post is None:
        raise NotExistError('ForumPost', post_id)
    db.session.delete(post)
    db.session.commit()
