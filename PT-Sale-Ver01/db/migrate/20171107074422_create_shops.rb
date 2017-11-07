class CreateShops < ActiveRecord::Migration[5.1]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :adress
      t.string :shopkeeper
      t.boolean :status       
      
      t.timestamps
    end
  end
end
