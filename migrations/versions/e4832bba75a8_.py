"""empty message

Revision ID: e4832bba75a8
Revises: 2526e4526792
Create Date: 2022-08-18 01:29:42.503744

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e4832bba75a8'
down_revision = '2526e4526792'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('animals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('animal_name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('animal_name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('animals')
    # ### end Alembic commands ###
