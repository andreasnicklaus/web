from flask import Blueprint, make_response
from backend.server.functional.currencies import get_currencies

functional_bp = Blueprint(
    'functional_bp', __name__,
    url_prefix='/functional'
)


@functional_bp.route('/currency_options', methods=['GET', 'OPTIONS'])
def currency_converter():
    return make_response(get_currencies())
