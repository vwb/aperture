# == Schema Information
#
# Table name: photo_connections
#
#  id            :integer          not null, primary key
#  collection_id :integer
#  photo_id      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class PhotoConnection < ActiveRecord::Base
  validates :collection_id, :photo_id, presence: true
  
  belongs_to :collection
  belongs_to :photo
end
