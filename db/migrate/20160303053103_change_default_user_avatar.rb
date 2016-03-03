class ChangeDefaultUserAvatar < ActiveRecord::Migration
  def change
    change_column :users, :avatar, :string, default: 'http://res.cloudinary.com/dpxg23zze/image/upload/c_lfill,h_300,w_300/v1456967384/b5jumwpwh3y1tqtbxjjc.jpg'
  end
end
