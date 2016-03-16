class Api::TagsController < ApplicationController

  def create
    title = tag_params[:title].downcase
    @tag = Tag.new(title: title)
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
