from .db import db
from .spotsamenitiesjoins import spotsamenitiesjoins
from sqlalchemy.orm import relationship


class Amenity(db.Model):
    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True)
    amenity = db.Column(db.String, nullable=False, unique=True)
    spot = relationship("Spot", secondary=spotsamenitiesjoins, backref=db.backref('spotamenity', lazy = 'dynamic'))


    def to_dict(self):
        return {
            "id": self.id,
            "amenity": self.amenity,
        }
