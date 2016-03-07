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
#  cover_photo :string
#

require 'test_helper'

class CollectionsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
