from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    emperor = User(username='Emperor Palpatine', email='d.sidous@ga.empire.boss.gov',
                password='123456')
    lando = User(username='Lando Calrissian', email='landocalrissian@protonmail.com',
                password="password")
    jabba = User(username='Jabba The Hut', email='jthutt@gmail.com',
                password="banthaPoodoo")
    yoda = User(username='Yoda', email='yoda@doordonot.com',
                password="YouWillB3")
    chewy = User(username='Chewbacca', email='c.bacca@grrrrrr.net',
                password="DontGoHan")
    luke = User(username='Luke Skywalker', email='l.skywalker@doordonot.com',
                password="Gimm3AHand")
    han = User(username='Han Solo', email='theboss@nerfherder.io',
                password="WhosScruffyLookin")
    mara = User(username="Mara Jade", email='m.jade@ga.empire.hand.gov',
                password="Emp3r0r2H4nd")
    grogu = User(username='Grogu', email='grogu@yahoo.com',
                password="B3oneBr0th")
    padme = User(username='Padme Amidala', email='padme.amidala@palace.naboo.gov',
                password="1uk3&13i4")

    db.session.add(demo)
    db.session.add(emperor)
    db.session.add(lando)
    db.session.add(jabba)
    db.session.add(yoda)
    db.session.add(chewy)
    db.session.add(luke)
    db.session.add(han)
    db.session.add(mara)
    db.session.add(grogu)
    db.session.add(padme)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
