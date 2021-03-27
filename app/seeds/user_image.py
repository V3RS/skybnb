from app.models import db, UserImage


def seed_user_image():

  user1 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/r2d2.jfif",
                    user_id=1)
  user2 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/emperor.jfif",
                    user_id=2)
  user3 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/jabba.jfif",
                    user_id=4)
  user4 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/lando.jfif",
                    user_id=3)
  user5 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/yoda.jfif",
                    user_id=5)
  user6 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/chewy.jfif",
                    user_id=6)
  user7 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/luke.jfif",
                    user_id=7)
  user8 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/han.jfif",
                    user_id=8)
  user9 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/mara.jfif",
                    user_id=9)
  user10 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/grogu.jfif",
                    user_id=10)
  user11 = UserImage(img_url = "https://skybnb.s3.amazonaws.com/padme.jfif",
                    user_id=11)

  db.session.add(user1)
  db.session.add(user2)
  db.session.add(user3)
  db.session.add(user4)
  db.session.add(user5)
  db.session.add(user6)
  db.session.add(user7)
  db.session.add(user8)
  db.session.add(user9)
  db.session.add(user10)
  db.session.add(user11)

  db.session.commit()


def undo_user_image():
    db.session.execute('TRUNCATE user_image;')
    db.session.commit()
