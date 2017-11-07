class ShopSerializer < ActiveModel::Serializer
  attributes :id, :adress, :shopkeeper, :status, :created_at
end
