from app.models import db, Spot


def seed_spots():
    spot1 = Spot(title="The Great Temple on Yavin 4", lat=37.550201, lng=-121.980827,
                 address="34793 Ardentech Ct, Fremont, CA 94555", description="A barebones slave bunking facility",
                 price=42, host_id=9)
    spot2 = Spot(title="The Jedi Temple on Corouscant", lng=37.550409, lat=-122.059313,
                 address="6600 Dumbarton Cir, Fremont, CA 94555", description="The truth temple where youngings study the ways of the force",
                 price=0, host_id=10)
    spot3 = Spot(title="The Royal Palace of Theed, Planet Naboo", lat=38.8977, lng=-77.0365,
                 address="1600 Pennsylvania Avenue NW, Washington, DC 20500", description="A magnificent edifice located on the edge of a cliff in the planet's capital city, Theed. Serving as the residence of the planetary monarch and the nerve center of the government, the ancient palace stood through the Galactic Republic's collapse and the birth of the New Republic several decades later.",
                 price=888, host_id=11)
    spot4 = Spot(title="The Death Star", lat=47.6224, lng=-122.3366,
                 address="410 Terry Ave N, Seattle, WA 98109", description="This is no moon. Books a space in our fully operational battle station. You will regret not staying here. You really will.",
                 price=10, host_id=2)
    spot5 = Spot(title="Cloud City", lat=47.6205, lng=-122.3492,
                 address="400 Broad St, Seattle, WA 98109", description="Mining has never been so luxurious. Hopefully they won't alter the deal further.",
                 price=945, host_id=4)
    spot6 = Spot(title="Yoda's Hut", lat=26.1381, lng=-80.6552,
                 address="3500 Everglades Pkwy, Florida 33327", description="Slimy?!?! Mudhole!?! My home this is. Afraid? No?... you will be... you will be.",
                 price=45, host_id=5)
    spot7 = Spot(title="Chewbacca's Treehouse", lat=29.7387, lng=-90.8765,
                 address="4484 LA-1, Raceland, LA 70394", description="aaaaahnr huurh wrrhw aarrragghuuhw",
                 price=223, host_id=6)
    spot8 = Spot(title="Luke's X-Wing Fighter", lat=37.2513, lng=,-115.8390,
                 address="Groom Lake, NV", description="Use the force or not... Just don't get shot down.",
                 price=100000, host_id=7)
    spot9 = Spot(title="The Millennium Falcon", lat=28.5232, lng=-80.6840,
                 address="Space Commerce Way, Merritt Island, FL 32953", description="Fastest hunk of junk in the galaxy. She made the Kessel Run in 12 parsecs.",
                 price=1243, host_id=8)
    spot10 = Spot(title="Jabba The Hutt's Palace", lat=39.2073, lng=-119.6637,
                 address="95 Kit Kat Dr, Carson City, NV 89706", description="I have no patience for smugglers who drop their loads at the first sign of imperial entanglements.",
                 price= 450, host_id=3)

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.add(spot4)
    db.session.add(spot5)
    db.session.add(spot6)
    db.session.add(spot7)
    db.session.add(spot8)
    db.session.add(spot9)
    db.session.add(spot10)

    db.session.commit()


def undo_spots():
    db.session.execute('TRUNCATE spots;')
    db.session.commit()
