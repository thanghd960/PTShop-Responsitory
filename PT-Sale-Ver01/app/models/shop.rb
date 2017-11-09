class Shop < ApplicationRecord
    has_many :products
    validates :name, presence: true
    validates :adress, presence: true
    validates :shopkeeper, presence: true
    
end
