from flask import Blueprint, request
from app.models import db, Picture
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


s3 = boto3.client('s3', aws_access_key_id=os.environ.get("S3_KEY"), aws_secret_access_key=os.environ.get('S3_SECRET'))
photo_routes = Blueprint('/photo_upload', __name__)
bucket = os.environ.get('S3_BUCKET')

@photo_routes.route('', methods=['POST'])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = Picture(user=current_user, url=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}
