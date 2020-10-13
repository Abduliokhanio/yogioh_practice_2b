class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :title
      t.string :pic_sm
      t.string :pic_lg

      t.timestamps
    end
  end
end
