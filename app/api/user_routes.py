from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, UserImage, Review, BookedSpot, Spot, db
from sqlalchemy import select

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/picture/<int:id>')
def picture(id):
    print("THIS IS THE ID", id)
    user_image = UserImage.query.filter_by(user_id=id).first()
    print("THIS IS THE USER IMAGE", user_image)
    return user_image.to_dict()

# @user_routes.route('/reviews/<int:id>')
# def reviews(id):
#     user_reviews =

@user_routes.route('/bookings/', methods=["POST"])
def user_bookings():
    req_id = request.data.decode("UTF-8")
    user_bookings = BookedSpot.query.filter_by(user_id=req_id).all()
    # ret_list = []
    # for booking in user_bookings:
    #     spot = Spot.query.get(booking.spot_id)
    #     ret_list.append(spot.to_dict_with_bookings())

    return {"bookings": [booking.to_dict() for booking in user_bookings]}

@user_routes.route('/bookings/delete', methods=["POST"])
def user_delete_one_booking():
    booking_id = request.data.decode("UTF-8")
    print("-------------------------")
    print(booking_id)
    canceled_booking = BookedSpot.query.get(booking_id)
    db.session.delete(canceled_booking)
    db.session.commit()
    return canceled_booking
