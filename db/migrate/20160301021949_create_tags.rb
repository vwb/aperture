class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|

      t.string  :title, null: false
      t.integer :taggable_id
      t.string  :taggable_type

      t.timestamps null: false
    end

    add_index :pictures, :taggable_id
  end
end
