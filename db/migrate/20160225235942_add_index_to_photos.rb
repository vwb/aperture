class AddIndexToPhotos < ActiveRecord::Migration
  def change
    add_index :photos, :collection_id
  end
end
