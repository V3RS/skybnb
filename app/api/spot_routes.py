from flask import Blueprint, jsonify
from app.models import Spot, User, Picture, Review


spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/<int:id>')
def get_one_spot(id):
    spot = Spot.query.get(id)
    pictures = Picture.query.filter_by(spot_id=id).all()
    host = User.query.get(spot.host_id)
    # reviews = Review.query.filter_by(spot_id=id).all()
    spotData = {**spot.to_dict()}
    spotData["pictures"] = [picture.to_dict() for picture in pictures]
    spotData["host"] = host.to_dict()
    return spotData


# @spot_routes.route('/<int:id>/pictures')
# def get_spot_pictures(id):
#     pictures = Picture.query.filter_by(spot_id=id).all()
#     return {"pictures": [picture.to_dict() for picture in pictures]}


# @spot_routes.route('/<int:id>/host')
# def get_host(id):
#     spot = Spot.query.get(id)
#     host = User.query.get(spot.host_id)
#     return host.to_dict()
