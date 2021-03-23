from .db import db
from sqlalchemy.orm import relationship


class UserImage(db.Model):
    __tablename__ = 'user_image'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = relationship("User", back_populates='image')
