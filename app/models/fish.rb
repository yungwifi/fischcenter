class Fish < ApplicationRecord
  has_many :days
  belongs_to :user
end
