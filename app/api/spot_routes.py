from flask import Blueprint, jsonify, request
from app.models import Spot, User, Picture, Review
from sqlalchemy import func


spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/<int:id>')
def get_one_spot(id):
    spot = Spot.query.get(id)
    pictures = Picture.query.filter_by(spot_id=id).all()
    host = User.query.get(spot.host_id)
    reviews = Review.query.filter_by(spot_id=id).all()
    total = 0
    for review in reviews:
        total += review.rating
    rating = total / len(reviews)
    spotData = {**spot.to_dict()}
    spotData["pictures"] = [picture.to_dict() for picture in pictures]
    spotData["host"] = host.to_dict()
    spotData["rating"] = "{:.1f}".format(rating)
    spotData["reviews_count"] = len(reviews)
    return spotData


@spot_routes.route('/<int:id>/pictures')
def get_spot_pictures(id):
    pictures = Picture.query.filter_by(spot_id=id).all()
    return {"pictures": [picture.to_dict() for picture in pictures]}

@spot_routes.route('/search', methods=["POST"])
def get_spots_query():
    searchString = request.data.decode("UTF-8")
    # Spots = Spot.query.filter(func.lower(Spot.address).contains(func.lower(searchString))).all()
    Spots = Spot.query.filter(Spot.address.ilike(f"%{searchString}%"))
    return_obj = {"spots": [spot.to_dict_with_picture() for spot in Spots]}
    print(Spots[0].pictures)
    return return_obj

# @spot_routes.route('/<int:id>/pictures')
# def get_spot_pictures(id):
#     pictures = Picture.query.filter_by(spot_id=id).all()
#     return {"pictures": [picture.to_dict() for picture in pictures]}


# @spot_routes.route('/<int:id>/host')
# def get_host(id):
#     spot = Spot.query.get(id)
#     host = User.query.get(spot.host_id)
#     return host.to_dict()
