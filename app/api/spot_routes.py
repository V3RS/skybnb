from flask import Blueprint, jsonify
from app.models import Spot, User


spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/<int:id>')
def get_one_spot(id):
    spot = Spot.query.get(id)
    return spot.to_dict()
