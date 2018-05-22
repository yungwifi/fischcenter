# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Fish.destroy_all

max = User.create!({first_name: "Maxime", last_name: "Simonet"})
matt = User.create!({first_name: "Matt", last_name: "Harrigan"})
choe = User.create!({first_name: "Andrew", last_name: "Choe"})
dave = User.create!({first_name: "David", last_name: "Bonowits"})

Fish.create!({name: "Tx Cupper", user_id: max.id})
Fish.create!({name: "Th'lump", user_id: max.id})
Fish.create!({name: "Bijou", user_id: max.id})
Fish.create!({name: "Mom", user_id: matt.id})
Fish.create!({name: "Mimosa", user_id: matt.id})
Fish.create!({name: "Ale", user_id: matt.id})
Fish.create!({name: "Jeremy Legg", user_id: choe.id})
Fish.create!({name: "Style Toy", user_id: choe.id})
Fish.create!({name: "Hamburger", user_id: choe.id})
Fish.create!({name: "greenbird", user_id: dave.id})
Fish.create!({name: "slider", user_id: dave.id})
Fish.create!({name: "Hot Steve", user_id: dave.id})

puts "Seed Success"