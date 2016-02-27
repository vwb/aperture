class CreatePhotoConnections < ActiveRecord::Migration
  def change
    create_table :photo_connections do |t|

      t.integer :collection_id, index: true
      t.integer :photo_id, index: true

      t.timestamps null: false
    end
  end
end
