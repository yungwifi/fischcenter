class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.references :fish, foreign_key: true
      t.integer :round_one
      t.integer :round_two
      t.integer :round_three
      t.integer :bonus_round

      t.timestamps
    end
  end
end
