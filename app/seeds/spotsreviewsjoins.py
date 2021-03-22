from app.models import db, spotsreviewsjoins


def seed_spotsreviewsjoins():
    test = spotsreviewsjoins.insert().values(spot_id=1, review_id=1)
    test2 = spotsreviewsjoins.insert().values(spot_id=2, review_id=2)
    test3 = spotsreviewsjoins.insert().values(spot_id=3, review_id=3)
    test4 = spotsreviewsjoins.insert().values(spot_id=1, review_id=4)
    test5 = spotsreviewsjoins.insert().values(spot_id=2, review_id=5)
    test6 = spotsreviewsjoins.insert().values(spot_id=3, review_id=6)
    # item1 = spotsreviewsjoins(spot_id=1, review_id=1)
    # item2 = spotsreviewsjoins(spot_id=2, review_id=2)
    # item3 = spotsreviewsjoins(spot_id=3, review_id=3)
    # item4 = spotsreviewsjoins(spot_id=1, review_id=4)
    # item5 = spotsreviewsjoins(spot_id=2, review_id=5)
    # item6 = spotsreviewsjoins(spot_id=3, review_id=6)
    db.session.execute(test)
    db.session.execute(test2)
    db.session.execute(test3)
    db.session.execute(test4)
    db.session.execute(test5)
    db.session.execute(test6)
    db.session.commit()


def undo_spotsreviewsjoins():
    db.session.execute('TRUNCATE spotsreviewsjoins;')
    db.session.commit()
