from flask.cli import AppGroup
from .users import seed_users, undo_users
from .amenites import seed_amenities, undo_amenities

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_amenities()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_amenities()
    # Add other undo functions here
