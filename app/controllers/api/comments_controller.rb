# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::CommentsController < ApplicationController

  def show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    @comment.save!

    @photo = Photo.includes(:tags, comments: :user).find(comment_params[:photo_id])

    render :show
  end

  def destroy
    @comment = Comment.find(comment_params)
    @comment.destroy!
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :photo_id)
  end
  
end
