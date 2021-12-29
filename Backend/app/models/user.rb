class User < ApplicationRecord
    validates :nome, :usuario, :senha, :salario, presence: true
end
