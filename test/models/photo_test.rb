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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
