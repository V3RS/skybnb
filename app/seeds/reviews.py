from app.models import db, Review


def seed_reviews():
    review1 = Review(
        comment="Definitely a minimalist approach to slave rebellion bunking, did not have adequate heating or running water but the view was great", user_id=1, rating=3, spot_id=1)
    review2 = Review(
        comment="A great place to study the way of the force, clean facility and great vibes but in a metropolitan slum", user_id=1, rating=4, spot_id=2)
    review3 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=3)
    review4 = Review(
        comment="A little modernest paradise. Hope you love black.", user_id=9, rating=5, spot_id=4)
    review5 = Review(
        comment="This place sucks. They toss you in carbonite for no reason.", user_id=7, rating=1, spot_id=5)
    review6 = Review(
        comment="Dank and dreary, lots of frog eggs to eat", user_id=10, rating=4, spot_id=6)
    review7 = Review(
        comment="Ummm lively this place is. A house in the trees it is. Fall you shouldn't", user_id=5, rating=3, spot_id=7)
    review8 = Review(
        comment="This ship takes my husband away for long trips. I'm not a big fan of that", user_id=9, rating=1, spot_id=8)
    review9 = Review(
        comment="She used to be mind. Han took her from me in a sabbac game. She really is a beaut.", user_id=3, rating=4, spot_id=9)
    review10 = Review(
        comment="BEEP BOOP BEEP BEEP BOOP", user_id=1, rating=2, spot_id=10)

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

    review21 = Review(
        comment="Definitely a minimalist approach to slave rebellion bunking, did not have adequate heating or running water but the view was great", user_id=1, rating=3, spot_id=2)
    review22 = Review(
        comment="A great place to study the way of the force, clean facility and great vibes but in a metropolitan slum", user_id=1, rating=4, spot_id=3)
    review23 = Review(
        comment="My favorite place to stay listet on skybnb, royal amenities, full service, great defensive location, no sith lords visible", user_id=1, rating=5, spot_id=4)
    review24 = Review(
        comment="A little modernest paradise. Hope you love black.", user_id=9, rating=5, spot_id=5)
    review25 = Review(
        comment="This place sucks. They toss you in carbonite for no reason.", user_id=7, rating=1, spot_id=6)
    review26 = Review(
        comment="Dank and dreary, lots of frog eggs to eat", user_id=10, rating=4, spot_id=7)
    review27 = Review(
        comment="Ummm lively this place is. A house in the trees it is. Fall you shouldn't", user_id=5, rating=3, spot_id=8)
    review28 = Review(
        comment="This ship takes my husband away for long trips. I'm not a big fan of that", user_id=9, rating=1, spot_id=9)
    review29 = Review(
        comment="She used to be mind. Han took her from me in a sabbac game. She really is a beaut.", user_id=3, rating=4, spot_id=10)
    review30 = Review(
        comment="BEEP BOOP BEEP BEEP BOOP", user_id=1, rating=2, spot_id=1)

    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review28)
    db.session.add(review30)

    review11 = Review(
        comment="This place stinks! Not a place fit for a royal star princess", user_id=11, rating=1, spot_id=1)
    review12 = Review(
        comment="Love the neighborhood but very blend accomodations in the jedi temple, apparently they dont believe in hot water for showers", user_id=9, rating=2, spot_id=2)
    review13 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=11, rating=5, spot_id=3)
    review14 = Review(
        comment="Everything is fine here now... *BLAST* Boring conversation anyway.", user_id=8, rating=1, spot_id=4)
    review15 = Review(
        comment="They tried to hide my prize. I had the deal altered!!!!", user_id=2, rating=1, spot_id=5)
    review16 = Review(
        comment="Owner is a workaholic, He taught me everything I know.", user_id=7, rating=5, spot_id=6)
    review17 = Review(
        comment="This place is littered with walking carpets. Get them out of my way", user_id=9, rating=2, spot_id=7)
    review18 = Review(
        comment="This ship is the best ever", user_id=1, rating=5, spot_id=8)
    review19 = Review(
        comment="uuh uughguughhhghghghhhgh uggguh", user_id=6, rating=5, spot_id=9)
    review20 = Review(
        comment="Hooked me up with my friend that I hadn't seen in a while. Dropped me in an Rancor pit. Overall not too bad.", user_id=7, rating=4, spot_id=10)

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

    review31 = Review(
        comment="This place stinks! Not a place fit for a royal star princess", user_id=11, rating=1, spot_id=2)
    review32 = Review(
        comment="Love the neighborhood but very blend accomodations in the jedi temple, apparently they dont believe in hot water for showers", user_id=9, rating=2, spot_id=3)
    review33 = Review(
        comment="LOVE this place!!! Plush decors and the bedding is so soft and clean! Great Palace fit for a star princess", user_id=11, rating=5, spot_id=4)
    review34 = Review(
        comment="Everything is fine here now... *BLAST* Boring conversation anyway.", user_id=8, rating=1, spot_id=5)
    review35 = Review(
        comment="They tried to hide my prize. I had the deal altered!!!!", user_id=2, rating=1, spot_id=6)
    review36 = Review(
        comment="Owner is a workaholic, He taught me everything I know.", user_id=7, rating=5, spot_id=7)
    review37 = Review(
        comment="This place is littered with walking carpets. Get them out of my way", user_id=9, rating=2, spot_id=8)
    review38 = Review(
        comment="This ship is the best ever", user_id=1, rating=5, spot_id=9)
    review39 = Review(
        comment="uuh uughguughhhghghghhhgh uggguh", user_id=6, rating=5, spot_id=10)
    review40 = Review(
        comment="Hooked me up with my friend that I hadn't seen in a while. Dropped me in an Rancor pit. Overall not too bad.", user_id=7, rating=4, spot_id=1)

    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review40)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews')
    db.session.commit()
