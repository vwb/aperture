class Api::CollectionsController < ApplicationController

  def show
    @collections = Collection.includes(:photos, photos: :comments).find(params[:id])
    render :show
  end

  def destroy
    @collection = Collection.find(params[:id])
    @collection.destroy!
  end

  def create

    @collections = Collection.new(collection_params)
    @collections.user = current_user
    
    if @collections.save
      if params[:collection][:photos]
        @collections.photo_ids = params[:collection][:photos].map { |id| id.to_i }
      end
      render :show
    else
      @errors = @collections.errors.full_messages
      render :errors
    end
  end

  def index

    if params[:user_id]
      @collections = Collection.includes(:photos, photos: :comments).where(user_id: params[:user_id])

      if @collections.is_a?(Collection)
        render :show
      else
        render :index
      end

    else

      @collections = Collection.includes(:photos).all
      render :index

    end

  end

  def add_photo
    @collection = Collection.find(params[:id])
    @collection.photo_ids += [params[:photo_id].to_i]

    @collections = Collection.includes(:photos).where(user_id: current_user.id)

    render :index
  end

  def remove_photo
    @collection = Collection.find(params[:id])
    @collection.photo_ids -= [params[:photo_id].to_i]

    @collections = Collection.includes(:photos).where(user_id: current_user.id)

    render :index
  end

  private

  def collection_params
    params.require(:collection).permit(:photos, :user_id, :title, :description)
  end
end
