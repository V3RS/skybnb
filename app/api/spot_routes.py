from flask import Blueprint, jsonify, request

from app.models import Spot, User, Picture, Review, UserImage, BookedSpot, db, spotsamenitiesjoins, Amenity

from sqlalchemy import func
from app.forms.booking_form import BookingForm
import datetime
spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/<int:id>')
def get_one_spot(id):
    spot = Spot.query.get(id)
    pictures = Picture.query.filter_by(spot_id=id).all()
    host = User.query.get(spot.host_id)
    host_image = UserImage.query.filter_by(user_id=spot.host_id).first()
    reviews = Review.query.filter_by(spot_id=id).all()
    amenities = Amenity.query.join(spotsamenitiesjoins).filter(
        (spotsamenitiesjoins.c.spot_id == id) & (spotsamenitiesjoins.c.amenity_id == Amenity.id)).all()
    total = 0
    for review in reviews:
        total += review.rating
    rating = total / len(reviews)
    spotData = {**spot.to_dict()}
    spotData["amenities"] = [amenity.to_dict() for amenity in amenities]
    spotData["pictures"] = [picture.to_dict() for picture in pictures]
    spotData["host"] = host.to_dict()
    spotData["host_image"] = host_image.to_dict()
    spotData["rating"] = "{:.1f}".format(rating)
    spotData["reviews_count"] = len(reviews)
    spotData["reviews"] = [review.to_dict() for review in reviews]
    for review in spotData["reviews"]:
        user = User.query.get(review["user_id"])
        img = UserImage.query.filter_by(user_id=user.id).first()
        review["user"] = user.to_dict()
        review["img"] = img.to_dict()
        # user_image = UserImage.query.filter_by(user_id=user.id)
        # if user_image.to_dict():
        #     review["user_image"] = user_image.to_dict()
        # else:
        #     review["user_image"] = {}
    return spotData


@spot_routes.route('/<int:id>/pictures')
def get_spot_pictures(id):
    pictures = Picture.query.filter_by(spot_id=id).all()
    return {"pictures": [picture.to_dict() for picture in pictures]}


@spot_routes.route('/search', methods=["POST"])
def get_spots_query():
    search_string = request.data.decode("UTF-8")
    spots = []

    # another to search and make the search case insensitive
    # Spots = Spot.query.filter(func.lower(Spot.address).contains(func.lower(search_string))).all()
    spots_search_adrress = Spot.query.filter(
        Spot.address.ilike(f"%{search_string}%"))
    spots_search_title = Spot.query.filter(
        Spot.title.ilike(f"%{search_string}%"))
    spots_search_adrress = [spot.to_dict_with_picture()
                            for spot in spots_search_adrress]
    spots_search_title = [spot.to_dict_with_picture()
                          for spot in spots_search_title]
    spots.extend(spots_search_adrress)
    spots.extend(spots_search_title)
    # The for loop below is to remove any duplicate spots for our search functionality
    return_spots = []
    for s in spots:
        if s not in return_spots:
            return_spots.append(s)
    return_obj = {"spots": return_spots}
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

@spot_routes.route('/book', methods=['POST'])
def get_booked_spot():
    form = BookingForm()
    # print(form.userId)
    # print(form.startDate)
    # print(form.data['userId'])
    # print(form.endDate)
    # print(form.data['endDate'])

    booked_spot = BookedSpot(
        spot_id=form.data['spotId'],
        start_date=form.data['startDate'],
        end_date=form.data['endDate'],
        user_id=form.data['userId']
    )
    db.session.add(booked_spot)
    db.session.commit()
    return 'test'
