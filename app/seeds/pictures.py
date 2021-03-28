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

  yavin1 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple1.jpg', spot_id=1)
  yavin2 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple2.jpg', spot_id=1)
  yavin3 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple3.jpg', spot_id=1)
  yavin4 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple4.jpg', spot_id=1)
  yavin5 = Picture(img_url='https://skybnb.s3.amazonaws.com/temple5.jpg', spot_id=1)

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

  deathstar1 = Picture(img_url='https://skybnb.s3.amazonaws.com/deathstar1.jfif', spot_id=4)
  deathstar2 = Picture(img_url='https://skybnb.s3.amazonaws.com/deathstar2.jfif', spot_id=4)
  deathstar3 = Picture(img_url='https://skybnb.s3.amazonaws.com/deathstar3.jfif', spot_id=4)
  deathstar4 = Picture(img_url='https://skybnb.s3.amazonaws.com/deathstar4.jfif', spot_id=4)
  deathstar5 = Picture(img_url='https://skybnb.s3.amazonaws.com/deathstar5.jfif', spot_id=4)

  db.session.add(deathstar1)
  db.session.add(deathstar2)
  db.session.add(deathstar3)
  db.session.add(deathstar4)
  db.session.add(deathstar5)

  cloudcity1 = Picture(img_url='https://skybnb.s3.amazonaws.com/cloudcity1.jfif', spot_id=5)
  cloudcity2 = Picture(img_url='https://skybnb.s3.amazonaws.com/cloudcity2.jfif', spot_id=5)
  cloudcity3 = Picture(img_url='https://skybnb.s3.amazonaws.com/cloudcity3.jfif', spot_id=5)
  cloudcity4 = Picture(img_url='https://skybnb.s3.amazonaws.com/cloudcity4.jfif', spot_id=5)
  cloudcity5 = Picture(img_url='https://skybnb.s3.amazonaws.com/cloudcity5.jfif', spot_id=5)

  db.session.add(cloudcity1)
  db.session.add(cloudcity2)
  db.session.add(cloudcity3)
  db.session.add(cloudcity4)
  db.session.add(cloudcity5)

  yoda1 = Picture(img_url='https://skybnb.s3.amazonaws.com/yoda1.jfif', spot_id=6)
  yoda2 = Picture(img_url='https://skybnb.s3.amazonaws.com/yoda2.jfif', spot_id=6)
  yoda3 = Picture(img_url='https://skybnb.s3.amazonaws.com/yoda3.jfif', spot_id=6)
  yoda4 = Picture(img_url='https://skybnb.s3.amazonaws.com/yoda4.jfif', spot_id=6)
  yoda5 = Picture(img_url='https://skybnb.s3.amazonaws.com/yoda5.jfif', spot_id=6)

  db.session.add(yoda1)
  db.session.add(yoda2)
  db.session.add(yoda3)
  db.session.add(yoda4)
  db.session.add(yoda5)

  chewy1 = Picture(img_url='https://skybnb.s3.amazonaws.com/chewy1.jfif', spot_id=7)
  chewy2 = Picture(img_url='https://skybnb.s3.amazonaws.com/chewy2.jfif', spot_id=7)
  chewy3 = Picture(img_url='https://skybnb.s3.amazonaws.com/chewy3.jfif', spot_id=7)
  chewy4 = Picture(img_url='https://skybnb.s3.amazonaws.com/chewy4.jfif', spot_id=7)
  chewy5 = Picture(img_url='https://skybnb.s3.amazonaws.com/chewy5.jfif', spot_id=7)

  db.session.add(chewy1)
  db.session.add(chewy2)
  db.session.add(chewy3)
  db.session.add(chewy4)
  db.session.add(chewy5)

  luke1 = Picture(img_url='https://skybnb.s3.amazonaws.com/luke1.jfif', spot_id=8)
  luke2 = Picture(img_url='https://skybnb.s3.amazonaws.com/luke2.jfif', spot_id=8)
  luke3 = Picture(img_url='https://skybnb.s3.amazonaws.com/luke3.jfif', spot_id=8)
  luke4 = Picture(img_url='https://skybnb.s3.amazonaws.com/luke4.jfif', spot_id=8)
  luke5 = Picture(img_url='https://skybnb.s3.amazonaws.com/luke5.jfif', spot_id=8)

  db.session.add(luke1)
  db.session.add(luke2)
  db.session.add(luke3)
  db.session.add(luke4)
  db.session.add(luke5)

  falcon1 = Picture(img_url='https://skybnb.s3.amazonaws.com/falcon1.jfif', spot_id=9)
  falcon2 = Picture(img_url='https://skybnb.s3.amazonaws.com/falcon2.jfif', spot_id=9)
  falcon3 = Picture(img_url='https://skybnb.s3.amazonaws.com/falcon3.jfif', spot_id=9)
  falcon4 = Picture(img_url='https://skybnb.s3.amazonaws.com/falcon4.jfif', spot_id=9)
  falcon5 = Picture(img_url='https://skybnb.s3.amazonaws.com/falcon5.jfif', spot_id=9)

  db.session.add(falcon1)
  db.session.add(falcon2)
  db.session.add(falcon3)
  db.session.add(falcon4)
  db.session.add(falcon5)

  jabba1 = Picture(img_url='https://skybnb.s3.amazonaws.com/jabba1.jfif', spot_id=10)
  jabba2 = Picture(img_url='https://skybnb.s3.amazonaws.com/jabba2.jfif', spot_id=10)
  jabba3 = Picture(img_url='https://skybnb.s3.amazonaws.com/jabba3.jfif', spot_id=10)
  jabba4 = Picture(img_url='https://skybnb.s3.amazonaws.com/jabba4.jfif', spot_id=10)
  jabba5 = Picture(img_url='https://skybnb.s3.amazonaws.com/jabba5.jfif', spot_id=10)

  db.session.add(jabba1)
  db.session.add(jabba2)
  db.session.add(jabba3)
  db.session.add(jabba4)
  db.session.add(jabba5)

  db.session.commit()


def undo_pictures():
    db.session.execute('TRUNCATE pictures;')
    db.session.commit()
