from app.models import db, SpotsReviewsJoins

def seed_spotsreviewsjoins():
    item1 = SpotsReviewsJoins(spot_id=1, review_id=1)
    item2 = SpotsReviewsJoins(spot_id=2, review_id=2)
    item3 = SpotsReviewsJoins(spot_id=3, review_id=3)
    item4 = SpotsReviewsJoins(spot_id=1, review_id=4)
    item5 = SpotsReviewsJoins(spot_id=2, review_id=5)
    item6 = SpotsReviewsJoins(spot_id=3, review_id=6)

def undo_spotsamenitiesjoins():
    db.session.execute('TRUNCATE spotsamenitiesjoins;')
    db.session.commit()