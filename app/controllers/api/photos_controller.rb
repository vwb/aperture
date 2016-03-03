class Api::PhotosController < ApplicationController

  def index

    if params[:tag]
      @photos = Photo.includes(:comments, :tags).where("tags.id" => params[:tag][:id]).all
    else
      @photos = Photo.includes(:comments, :tags).all
    end

    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def create

    @photo = Photo.new()
    @photo.url = photo_params[:url]
    @photo.title = photo_params[:title]
    @photo.price = photo_params[:price]
    @photo.description = photo_params[:description]

    @photo.user = current_user
    @photo.save!

    # if params[:photo][:tags]
    #   tag_ids = Tag.find_ids(params[:photo][:tags])
    #   @photo.tag_ids = tag_ids
    # end

    #need to rewrite here!

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
    params.require(:photo).permit(:url, :title, :price, :description, :tags)
  end

end
