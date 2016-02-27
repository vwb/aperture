class AddCollectionIdToPhotos < ActiveRecord::Migration

  def change
    add_column :photos, :collection_id, :integer, index: true
  end
  
end
