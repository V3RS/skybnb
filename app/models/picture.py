from .db import db
from sqlalchemy.orm import relationship


class Picture(db.Model):
    __tablename__ = 'pictures'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String, nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    spot = relationship("Spot", back_populates='pictures')

    def to_dict(self):
        return {
            "id": self.id,
            "img_url": self.img_url,
            "spot_id": self.spot_id
        }
