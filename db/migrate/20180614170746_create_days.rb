class CreateDays < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.references :round, foreign_key: true
      t.date :day

      t.timestamps
    end
  end
end
