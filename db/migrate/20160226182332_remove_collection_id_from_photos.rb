class RemoveCollectionIdFromPhotos < ActiveRecord::Migration
  def change
    remove_column :photos, :collection_id, :integer
  end
end
