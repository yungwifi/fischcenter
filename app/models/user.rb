class User < ApplicationRecord
    has_many :fish, dependent: :destroy
end
