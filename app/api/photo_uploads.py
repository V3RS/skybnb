import os
import logging
import boto3
from botocore.exceptions import ClientError
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Picture

photo_routes = Blueprint('photo_upload', __name__)

@photo_routes.route('/', methods=['POST'])
@login_required
def photo():
