class AddDefaultCoverPhotoToCollections < ActiveRecord::Migration
  def up
    change_column :collections, :cover_photo, :string, default: "http://res.cloudinary.com/dpxg23zze/image/upload/v1457042908/oqncymdkaixuulcbjpg3.png"
  end

  def down
    change_column :collections, :cover_photo, :string, default: nil
  end
end
