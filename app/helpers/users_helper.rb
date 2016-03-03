# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  avatar          :string           default("http://res.cloudinary.com/dpxg23zze/image/upload/c_thumb,w_400/v1456967384/b5jumwpwh3y1tqtbxjjc.jpg")
#  username        :string           not null
#

module UsersHelper
end
