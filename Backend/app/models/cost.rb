class Cost < ApplicationRecord
  belongs_to :user

  validates :descricao, :valor, :data, :user_id, presence: true 
end
