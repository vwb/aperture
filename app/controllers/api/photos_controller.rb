class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user = current_user
    @photo.save!
    render :show
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.update!(photo_params)
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :title, :price, :description)
  end

end
