from .db import db
from .spotsreviewsjoins import spotsreviewsjoins
from .spotsamenitiesjoins import spotsamenitiesjoins
from sqlalchemy.orm import relationship


class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(255), nullable=False, unique=True)
    lng = db.Column(db.Numeric, nullable=False)
    lat = db.Column(db.Numeric, nullable=False)
    address = db.Column(db.String(512), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Numeric, nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = relationship("User", back_populates='spots')
    pictures = relationship("Picture", back_populates='spot')
    # reviews = relationship("Review", secondary=spotsreviewsjoins, back_populates="spot")
    # amenities = relationship("Amenity", secondary=spotsamenitiesjoins, back_populates="spot")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "lng": float(self.lng),
            "lat": float(self.lat),
            "address": self.address,
            "description": self.description,
            "price": float(self.price),
            "host_id": self.host_id,
        }
