from .db import db
from .spotsamenitiesjoins import SpotsAmenitiesJoins
from sqlalchemy.orm import relationship


class Amenity(db.Model):
    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True)
    amenity = db.Column(db.String, nullable=False, unique=True)
    spot = relationship("Spot", secondary=SpotsAmenitiesJoins, back_populates="amenities")