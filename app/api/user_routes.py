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
    user_image = UserImage.query.filter_by(user_id=id).first()
    return user_image.to_dict()

@user_routes.route('/reviews/<int:id>')
def reviews(id):
    user_reviews = Review.query.filter_by(user_id=id).all()
    return {"user_reviews": [review.to_dict() for review in user_reviews]}


@user_routes.route('/bookings/', methods=["POST"])
def user_bookings():
    req_id = request.data.decode("UTF-8")
    user_bookings = BookedSpot.query.filter_by(user_id=req_id).all()
    return {"bookings": [booking.to_dict() for booking in user_bookings]}

@user_routes.route('/bookings/delete', methods=["POST"])
def user_delete_one_booking():
    booking_id = request.data.decode("UTF-8")
    canceled_booking = BookedSpot.query.get(booking_id)
    db.session.delete(canceled_booking)
    db.session.commit()
    return canceled_booking
