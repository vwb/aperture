class AddDefaultToPhotoPrice < ActiveRecord::Migration
  def change
    change_column :photos, :price, :integer, default: 0
  end
end
