class AddPriceToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :price, :integer, default: 0, null: false
  end
end
