# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

max = User.create!({first_name: "Maxime", last_name: "Simonet"})

cupper = Fish.create!({name: "Tx Cupper", user_id: max.id})
thlump = Fish.create!({name: "Th'lump", user_id: max.id})
bijou = Fish.create!({name: "Bijou", user_id: max.id})
mom = Fish.create!({name: "Mom", user_id: max.id})
mimosa = Fish.create!({name: "Mimosa", user_id: max.id})
ale = Fish.create!({name: "Ale", user_id: max.id})
jlegg =Fish.create!({name: "Jeremy Legg", user_id: max.id})
styletoy =Fish.create!({name: "Style Toy", user_id: max.id})
hamburger = Fish.create!({name: "Hamburger", user_id: max.id})
greenbird = Fish.create!({name: "greenbird", user_id: max.id})
slider = Fish.create!({name: "slider", user_id: max.id})
steve = Fish.create!({name: "Hot Steve", user_id: max.id})

Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: cupper.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: thlump.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: bijou.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: mom.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: mimosa.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: ale.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: jlegg.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: styletoy.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: hamburger.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: greenbird.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: slider.id})
Round.create!({round_one: 1, round_two: 2, round_three: 3, bonus_round: 4, fish_id: steve.id})


puts "Seed Success"