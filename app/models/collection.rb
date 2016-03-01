# == Schema Information
#
# Table name: collections
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Collection < ActiveRecord::Base
  validates :title, :user_id, presence: true

  has_many :tags, as: :taggable

  has_many :photo_connections
  has_many :photos, through: :photo_connections

  belongs_to :user
end
