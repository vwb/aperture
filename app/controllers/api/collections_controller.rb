class Api::CollectionsController < ApplicationController

  def show
    @collection = Collection.includes(:photos).find(params[:id])
    render :show
  end

  def destroy
    @collection = Collection.find(params[:id])
    @collection.destroy!
  end

  def create
    @collection = new Collection(collection_params)
    @collection.save!
    render :show
  end

  def add_photo
    @collection = Collection.find(params[:id])
    @collection.photo_ids = [params[:photo_id]]

    render :show
  end

  private

  def collection_params
    params.require(:collection).permit(:user_id, :title, :description)
  end
end
