from flask import Blueprint, jsonify, request
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

@spot_routes.route('/search', methods=["POST"])
def get_spots_query():
    searchString = request.data.decode("UTF-8")
    Spots = Spot.query.filter(Spot.address.contains(searchString)).all()
    return_obj = {"spots": [spot.to_dict_with_picture() for spot in Spots]}
    print(Spots[0].pictures)
    return return_obj