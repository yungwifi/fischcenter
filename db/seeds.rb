# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative './fish_data.rb'
require_relative './user_data.rb'

Fish.destroy_all
User.destroy_all

fish_data = get_fish_data
user_data = get_user_data

fish_data.each_pair do |user, fish|
  info = user_data[user]
  current_user = User.create!({
    first_name:         info[:first_name],
    last_name:          info[:last_name],
    photo_url:    info[:photo_url],
  })

  fish.each do |fish|
    Fish.create!({
      name:        fish[:name],
      user:       current_user
    })
  end
end

puts "Seed Success"