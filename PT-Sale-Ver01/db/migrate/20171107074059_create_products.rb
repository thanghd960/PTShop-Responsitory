class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.decimal :cost
      t.text :decription
      t.boolean :status
      t.boolean :is_deleted
      t.float :sale_off      
      # t.belongs_to :shop, index: true, foreign_key: true
      t.references :shops, index:true, foreign_key: true
      # t.references :categories, index: true, foreign_key: true
      
      t.timestamps
    end
  end
end
