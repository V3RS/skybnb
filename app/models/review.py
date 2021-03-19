from .db import db
from .spotsreviewsjoins import SpotsReviewsJoins
from sqlalchemy.orm import relationship


class Review(db.Model):

    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = relationship("User", back_populates='reviews')
    spot = relationship("Spot", secondary=SpotsReviewsJoins, back_populates="reviews")
