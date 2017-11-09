class Portal::ShopsController < Portal::ApplicationController
    before_action :get_shop, only: [:show, :update, :destroy]
    def index
        @shops = Shop.all
        render json: @shops
    end
    def show
        render json: @shop
    end
   
    def create        
        @shop = Shop.new(shop_params)
        if @shop.save
            render json: @shop, status: :created, location: @shop
        else
            render json: @shop.erros, status: :unprocessable_entity
        end
    end
    private
        def get_shop
            @shop = Shop.find(params[:id])
        end
        def shop_params
            params.require(:shop).permit!
        end
end 
