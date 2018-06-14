# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_14_170746) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "days", force: :cascade do |t|
    t.bigint "round_id"
    t.date "day"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["round_id"], name: "index_days_on_round_id"
  end

  create_table "fish", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fish_on_user_id"
  end

  create_table "rounds", force: :cascade do |t|
    t.bigint "fish_id"
    t.integer "round_one"
    t.integer "round_two"
    t.integer "round_three"
    t.integer "bonus_round"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fish_id"], name: "index_rounds_on_fish_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "photo_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "days", "rounds"
  add_foreign_key "fish", "users"
  add_foreign_key "rounds", "fish"
end
