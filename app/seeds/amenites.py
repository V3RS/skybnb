from app.models import db, Amenity

def seed_amenities():
    kitchen = Amenity(amenity="Kitchen")
    free_parking = Amenity(amenity="Free parking")
    tv = Amenity(amenity="TV")
    dryer = Amenity(amenity="Dryer")
    hangers = Amenity(amenity="Hangers")
    wifi = Amenity(amenity="Wifi")
    dedicated_workspace = Amenity(amenity="Dedicated workspace")
    breakfast = Amenity(amenity="Breakfast")
    washer = Amenity(amenity="Washer")
    essentials = Amenity(amenity="Essentials")
    private_entrance = Amenity(amenity="Private entrance")
    air_conditioning = Amenity(amenity="Air conditioning")
    shampoo = Amenity(amenity="Shampoo")
    hair_dryer = Amenity(amenity="Hair dryer")
    heating = Amenity(amenity="Heating")
    smoke_alarm = Amenity(amenity="Smoke alarm")
    carbon_monoxide_alarm = Amenity(amenity="Carbon monoxide alarm")

    db.session.add(kitchen)
    db.session.add(free_parking)
    db.session.add(tv)
    db.session.add(dryer)
    db.session.add(hangers)
    db.session.add(wifi)
    db.session.add(dedicated_workspace)
    db.session.add(breakfast)
    db.session.add(washer)
    db.session.add(essentials)
    db.session.add(private_entrance)
    db.session.add(air_conditioning)
    db.session.add(shampoo)
    db.session.add(hair_dryer)
    db.session.add(heating)
    db.session.add(smoke_alarm)
    db.session.add(carbon_monoxide_alarm)

    db.session.commit()

    def undo_amenities():
        db.session.execute('TRUNCATE amenities;')
        db.session.commit()
