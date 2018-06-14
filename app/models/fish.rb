class Fish < ApplicationRecord
  has_many :round, dependent: :destroy 
  belongs_to :user
end
