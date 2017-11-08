class Portal::ShopsController < ApplicationController
    before_action :get_shop, only: [:show, :update, :destroy]
    def index
        @shops = Shop.all
        render json: @shops
    end
    def show
        render json: @shop
    end
    private
        def get_shop
            @shop = Shop.find(params[:id])
        end
end 
