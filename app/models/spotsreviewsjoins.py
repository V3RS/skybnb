from .db import db

class SpotsReviewsJoins(db.Model):
    __tablename__ = "spotsreviewsjoins"

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    review_id = db.Column(db.Integer, db.ForeignKey('reviews.id'), nullable=False)
