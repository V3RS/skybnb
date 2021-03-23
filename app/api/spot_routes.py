from flask import Blueprint, jsonify
from app.models import Spot, User


spot_routes = Blueprint('spots', __name__)
