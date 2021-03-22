import os
import logging
import boto3
from botocore.exceptions import ClientError
from flask import Blueprint, jsonify
from app.models import User, Picture


s3 = boto3.client('s3')
photo_routes = Blueprint('/photo_upload', __name__)


@photo_routes.route('/upload', methods=['POST'])
def photo():
  uploaded_photo = s3.upload_file(Filename='app/test_upload/best-zoom-backgrounds-disney-1586899397.jpg', Bucket="skybnb", Key='test1')
  print(uploaded_photo)
