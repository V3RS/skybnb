from .db import db

class SpotsAmenitiesJoins(db.Model):
    __tablename__ = "spotsamentiesjoins"

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    amenity_id = db.Column(db.Integer, db.ForeignKey('amenities.id'), nullable=False)
