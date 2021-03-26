from app.models import db, Spot


def seed_spots():
    spot1 = Spot(title="The Great Temple on Yavin 4", lat=37.550201, lng=-121.980827,
                 address="34793 Ardentech Ct, Fremont, CA 94555", description="A barebones slave bunking facility",
                 price=42, host_id=3)
    spot2 = Spot(title="The Jedi Temple on Tatooine", lat=37.550409, lng=-122.059313,
                 address="6600 Dumbarton Cir, Fremont, CA 94555", description="The truth temple where youngings study the ways of the force",
                 price=0, host_id=3)
    spot3 = Spot(title="The Royal Palace of Theed, Planet Naboo", lat=38.8977, lng=-77.0365,
                 address="1600 Pennsylvania Avenue NW, Washington, DC 20500", description="A magnificent edifice located on the edge of a cliff in the planet's capital city, Theed. Serving as the residence of the planetary monarch and the nerve center of the government, the ancient palace stood through the Galactic Republic's collapse and the birth of the New Republic several decades later.",
                 price=888, host_id=3)

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.commit()


def undo_spots():
    db.session.execute('TRUNCATE spots;')
    db.session.commit()
