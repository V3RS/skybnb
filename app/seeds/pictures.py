from app.models import db, Picture


def seed_pictures():
  theed1 = Picture(img_url='https://skybnb.s3.amazonaws.com/theed5.jpg', spot_id=3)
  theed2 = Picture(img_url='https://skybnb.s3.amazonaws.com/theed4.jpg', spot_id=3)
  theed3 = Picture(img_url='https://skybnb.s3.amazonaws.com/theed3.jpg', spot_id=3)
  theed4 = Picture(img_url='https://skybnb.s3.amazonaws.com/theed2.jpg', spot_id=3)
  theed5 = Picture(img_url='https://skybnb.s3.amazonaws.com/theed1.jpg', spot_id=3)

  db.session.add(theed1)
  db.session.add(theed2)
  db.session.add(theed3)
  db.session.add(theed4)
  db.session.add(theed5)

  yavin1 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple1', spot_id=1)
  yavin2 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple2', spot_id=1)
  yavin3 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple3', spot_id=1)
  yavin4 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple4', spot_id=1)
  yavin5 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple5', spot_id=1)

  db.session.add(yavin1)
  db.session.add(yavin2)
  db.session.add(yavin3)
  db.session.add(yavin4)
  db.session.add(yavin5)

  corouscant1 = Picture(img_url='https://skybnb.s3.amazonaws.com/corouscant1.jpg', spot_id=2)
  corouscant2 = Picture(img_url='https://skybnb.s3.amazonaws.com/corouscant2.jpg', spot_id=2)
  corouscant3 = Picture(img_url='https://skybnb.s3.amazonaws.com/corouscant3.jpg', spot_id=2)
  corouscant4 = Picture(img_url='https://skybnb.s3.amazonaws.com/corouscant4.jpg', spot_id=2)
  corouscant5 = Picture(img_url='https://skybnb.s3.amazonaws.com/corouscant5.jpg', spot_id=2)

  db.session.add(corouscant1)
  db.session.add(corouscant2)
  db.session.add(corouscant3)
  db.session.add(corouscant4)
  db.session.add(corouscant5)

  db.session.commit()


def undo_pictures():
    db.session.execute('TRUNCATE pictures;')
    db.session.commit()
