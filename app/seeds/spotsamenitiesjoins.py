from app.models import db, spotsamenitiesjoins
from app.seeds import amenities
from app.seeds import spots


def seed_spotsamenitiesjoins():
    for num in range(1, 10):
        test = spotsamenitiesjoins.insert().values(spot_id=1, amenity_id=num)
        db.session.execute(test)

    for num in range(8, 16):
        test1 = spotsamenitiesjoins.insert().values(spot_id=2, amenity_id=num)
        db.session.execute(test1)

    for num in range(7, 12):
        test3 = spotsamenitiesjoins.insert().values(spot_id=3, amenity_id=num)
        db.session.execute(test3)
    for num in range(8, 14):
        test4 = spotsamenitiesjoins.insert().values(spot_id=4, amenity_id=num)
        db.session.execute(test4)
    for num in range(6, 13):
        test5 = spotsamenitiesjoins.insert().values(spot_id=5, amenity_id=num)
        db.session.execute(test5)
    for num in range(1, 9):
        test6 = spotsamenitiesjoins.insert().values(spot_id=6, amenity_id=num)
        db.session.execute(test6)
    for num in range(1, 3):
        test7 = spotsamenitiesjoins.insert().values(spot_id=7, amenity_id=num)
        db.session.execute(test7)
    for num in range(2, 10):
        test8 = spotsamenitiesjoins.insert().values(spot_id=8, amenity_id=num)
        db.session.execute(test8)
    for num in range(4, 15):
        test9 = spotsamenitiesjoins.insert().values(spot_id=9, amenity_id=num)
        db.session.execute(test9)
    for num in range(3, 6):
        test10 = spotsamenitiesjoins.insert().values(spot_id=10, amenity_id=num)
        db.session.execute(test10)

    # test = spotsamenitiesjoins.insert().values(spot_id=1, amenity_id=2)
    # test1 = spotsamenitiesjoins.insert().values(spot_id=1, amenity_id=5)
    # test2 = spotsamenitiesjoins.insert().values(spot_id=1, amenity_id=7)
    # test3 = spotsamenitiesjoins.insert().values(spot_id=2, amenity_id=1)
    # test4 = spotsamenitiesjoins.insert().values(spot_id=2, amenity_id=3)
    # test5 = spotsamenitiesjoins.insert().values(spot_id=3, amenity_id=5)
    # test6 = spotsamenitiesjoins.insert().values(spot_id=3, amenity_id=1)
    # db.session.execute(test)
    # db.session.execute(test1)
    # db.session.execute(test2)
    # db.session.execute(test3)
    # db.session.execute(test4)
    # db.session.execute(test5)
    # db.session.execute(test6)
    db.session.commit()


def undo_spotsamenitiesjoins():
    db.session.execute('TRUNCATE spotsamenitiesjoins;')
    db.session.commit()
