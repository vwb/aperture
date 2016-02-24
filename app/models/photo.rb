# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  title      :string
#  price      :integer          default(0), not null
#

class Photo < ActiveRecord::Base
  validates :url, :user_id, presence: true

  belongs_to :user
end
