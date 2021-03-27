from app.models import db, Review


def seed_reviews():
    review1 = Review(
        comment="Definitely a minimalist approach to slave rebellion bunking, did not have adequate heating or running water but the view was great", user_id=1, rating=3, spot_id=1)
    review2 = Review(
        comment="A great place to study the way of the force, clean facility and great vibes but in a metropolitan slum", user_id=1, rating=4, spot_id=2)
    review3 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=3)
    review4 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=4)
    review5 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=5)
    review6 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=6)
    review7 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=7)
    review8 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=8)
    review9 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=9)
    review10 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=10)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review8)
    db.session.add(review10)

    review11 = Review(
        comment="This place stinks! Not a place fit for a royal star princess", user_id=2, rating=1, spot_id=1)
    review12 = Review(
        comment="Love the neighborhood but very blend accomodations in the jedi temple, apparently they dont believe in hot water for showers", user_id=2, rating=2, spot_id=2)
    review13 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=3)
    review14 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=4)
    review15 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=5)
    review16 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=6)
    review17 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=7)
    review18 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=8)
    review19 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=9)
    review20 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5, spot_id=10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews')
    db.session.commit()
