from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Review, db
from sqlalchemy import select
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/post', methods=['POST'])
def post_review():
    form = ReviewForm()

    new_review = Review(
        comment=form.data['comment'],
        rating=form.data['rating'],
        spot_id=form.data['spot_id'],
        user_id=form.data['user_id']
    )

    db.session.add(new_review)
    db.session.commit()
    return 'test'
