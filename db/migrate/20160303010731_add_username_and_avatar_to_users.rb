class AddUsernameAndAvatarToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar, :string, default: "http://res.cloudinary.com/dpxg23zze/image/upload/c_thumb,w_400/v1456967384/b5jumwpwh3y1tqtbxjjc.jpg"
    add_column :users, :username, :string, unique: true, null: false
  end
end
