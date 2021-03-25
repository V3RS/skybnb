from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, UserImage
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
