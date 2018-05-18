class Day < ApplicationRecord
  has_many :rounds
  belongs_to :fish
end
