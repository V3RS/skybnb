from .db import db
from sqlalchemy.orm import relationship


class Review(db.Model):

    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    user = relationship("User", back_populates='reviews')
    spot = relationship("Spot", back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "rating": self.rating,
            "user_id": self.user_id,
            "spot_id": self.spot_id
        }
