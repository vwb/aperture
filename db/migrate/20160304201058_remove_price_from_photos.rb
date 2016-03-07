class RemovePriceFromPhotos < ActiveRecord::Migration
  def change
    remove_column :photos, :price, :integer
  end
end
