# == Schema Information
#
# Table name: tags
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  taggable_id   :integer
#  taggable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true

  has_many :taggings
  has_many :photos, through: :taggings

  # def self.find_ids(titles)

  #   results = []

  #   relation = Tag.where(title: titles)

  #   relation.each do |found_tag|
  #     results << found_tag.id
  #     titles.delete(found_tag.title)
  #   end

  #   if titles.length > 0
  #     titles.each do |new_tag_title|
  #       tag = Tag.new(title: new_tag_title)
  #       tag.save!
  #       results << tag.id
  #     end
  #   end

  #   return results

  # end
end
