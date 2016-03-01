class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    @tag.save!
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy!
  end

  def index
    @tags = Tag.all
    render :index
  end

  private

  def tag_params
    params.require(:tag).permit(:title)
  end
end
