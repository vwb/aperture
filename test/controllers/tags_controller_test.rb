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

require 'test_helper'

class TagsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
