class CreateProductRelateds < ActiveRecord::Migration[5.1]
  def change
    create_table :product_relateds do |t|

      t.timestamps
    end
  end
end
