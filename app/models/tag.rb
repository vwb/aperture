class Tag < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true

  belongs_to :taggable, polymorphic: true


  def self.find_ids(titles)

    results = []

    relation = Tag.where(title: titles)

    relation.each do |found_tag|
      results << found_tag.id
      titles.delete(found_tag.title)
    end

    if titles.length > 0
      titles.each do |new_tag_title|
        tag = Tag.new(title: new_tag_title)
        tag.save!
        results << tag.id
      end
    end

    return results

  end
end
