from app.models import db, Spot

def seed_spots():
    spot1 = Spot(title="The Great Temple on Yavin 4", lng=37.550201, lat=-121.980827,
                address="34793 Ardentech Ct, Fremont, CA 94555", description="A barebones slave bunking facility",
                price=42, host_id=1)