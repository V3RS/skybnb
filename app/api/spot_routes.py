from flask import Blueprint, jsonify
from app.models import Spot, User, Picture


spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/<int:id>')
def get_one_spot(id):
    spot = Spot.query.get(id)
    return spot.to_dict()


@spot_routes.route('/<int:id>/pictures')
def get_spot_pictures(id):
    pictures = Picture.query.filter_by(spot_id=id).all()
    return {"pictures": [picture.to_dict() for picture in pictures]}
