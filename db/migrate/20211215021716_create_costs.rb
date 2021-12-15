class CreateCosts < ActiveRecord::Migration[6.1]
  def change
    create_table :costs do |t|
      t.string :descricao
      t.float :valor
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
