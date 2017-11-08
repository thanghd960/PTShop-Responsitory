class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :adress, :shopkeeper, :status, :created_at , :updated_at
end
