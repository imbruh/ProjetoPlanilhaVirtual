class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :nome
      t.string :usuario
      t.string :senha
      t.float :salario

      t.timestamps
    end
  end
end
