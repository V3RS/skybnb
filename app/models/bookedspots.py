from .db import db
from sqlalchemy.orm import relationship

class BookedSpot(db.Model):
    __tablename__ = 'bookedspots'

    id= db.Column(db.Integer, primary_key=True)
    start_date = db.Column(db.String, nullable=False)
    end_date = db.Column(db.String, nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    spot = relationship("Spot", back_populates='bookedspots')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = relationship("User", back_populates='bookedspots')


    def to_dict(self):
        return {
            "id": self.id,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "spot_id": self.spot_id,
            "user_id": self.user_id
        }