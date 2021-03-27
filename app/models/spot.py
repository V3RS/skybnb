from .db import db
from .spotsamenitiesjoins import spotsamenitiesjoins
from sqlalchemy.orm import relationship


class Spot(db.Model):
    __tablename__ = 'spots'
    # need to add rating to this model
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
    reviews = relationship("Review", back_populates='spot')
    bookedspots = relationship("BookedSpot", back_populates='spot')
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

    def to_dict_with_bookings(self):
        return {
            "id": self.id,
            "title": self.title,
            "address": self.address,
            "host_id": self.host_id,
            "description": self.description,
            "pictures": [picture.img_url for picture in self.pictures],
            "bookings": [booking.to_dict() for booking in self.bookedspots],
        }

    def to_dict_with_picture(self):
        total = 0
        for review in self.reviews:
            total += review.rating
        rating = total / len(self.reviews)

        return {
            "id": self.id,
            "title": self.title,
            "lng": float(self.lng),
            "lat": float(self.lat),
            "address": self.address,
            "description": self.description,
            "price": float(self.price),
            "host_id": self.host_id,
            "pictures": [picture.img_url for picture in self.pictures],
            "rating": "{:.1f}".format(rating),
            "reviews_count": len(self.reviews)
        }