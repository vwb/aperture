# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  validates :photo_id, :tag_id, presence: true

  belongs_to :photo
  belongs_to :tag
end
