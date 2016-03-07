# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  url         :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#  title       :string
#  description :text
#

class Photo < ActiveRecord::Base
  validates :url, :user_id, presence: true
  # paginates_per 10

  belongs_to :user

  has_many :comments

  has_many :taggings
  has_many :tags, through: :taggings

 # has_many :tags, as: :taggable, dependent: :destroy
  
  has_many :photo_connections
  has_many :collections, through: :photo_connections

end
