from flask import Blueprint, request

from backend.server.authentication import get_user_uuid
from backend.server.authentication.login_required_decorator import logged_in
from backend.server.community.forum import create_post, get_posts
from backend.server.community.forum.posts import delete_post
from backend.server.exceptions import NotExistError

community_bp = Blueprint(
    'community_bp', __name__,
    url_prefix='/community'
)


@community_bp.route('/forum', methods=['GET', 'POST', 'DELETE'])
@logged_in
def forum():
    if request.method == 'GET':
        return get_posts()
    elif request.method == 'POST':
        body = request.json

        title = body.get('title')
        text = body.get('text')

        auth_token = request.cookies.get('auth_token')
        creator_id = get_user_uuid(auth_token)

        # TODO: input check

        return create_post(title=title, creator_id=creator_id, text=text)


@community_bp.route('/forum/delete', methods=['POST'])
def post_delete():
    body = request.json
    post_id = body.get('post_id')
    try:
        delete_post(post_id)
        return get_posts()
    except NotExistError as e:
        return e.message
