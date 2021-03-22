# from app.models import db, spotsamenitiesjoins


# def seed_spotsamenitiesjoins():
#     for num in range(1, 10):
#         spot1_amenity_item = spotsamenitiesjoins(spot_id=1, amenity_id=num)
#         db.session.add(spot1_amenity_item)

#     for num in range(8, 16):
#         spot2_amenity_item = spotsamenitiesjoins(spot_id=2, amenity_id=num)
#         db.session.add(spot2_amenity_item)

#     for num in range(0, 15):
#         spot3_amenity_item = spotsamenitiesjoins(spot_id=3, amenity_id=num)
#         db.session.add(spot3_amenity_item)

#     db.session.commit()


# def undo_spotsamenitiesjoins():
#     db.session.execute('TRUNCATE spotsamenitiesjoins;')
#     db.session.commit()
