class AddCoverPhotoToCollection < ActiveRecord::Migration
  def change
    add_column :collections, :cover_photo, :string
  end
end
