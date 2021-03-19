from app.models import db, Review

def seed_reviews():
    review1 = Review(comment="Definitely a minimalist approach to slave rebellion bunking, did not have adequate heating or running water but the view was great", user_id=1, rating=3)
    review2 = Review(comment="A great place to study the way of the force, clean facility and great vibes but in a metropolitan slum", user_id=1, rating=4)
    review3 = Review(comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5 )]

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)

    review4 = Review(comment="This place stinks! Not a place fit for a royal star princess", user_id=2, review=1)
    review5 = Review(comment="Love the neighborhood but very blend accomodations in the jedi temple, apparently they dont believe in hot water for showers", user_id=2, review=2)
    review3 = Review(comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=2, rating=5)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews')
    db.session.commit()