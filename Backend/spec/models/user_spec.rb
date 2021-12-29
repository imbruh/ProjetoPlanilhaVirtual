require 'rails_helper'

RSpec.describe User, type: :model do
  context "criar usuario" do
  
    it "quando invalido" do
      user = User.new 
      expect(user.valid?).to eq(false)
    end

    it "quando valido" do
      user = User.new 

      user.nome = 'user teste'
      user.usuario = 'teste'
      user.senha = '123'
      user.salario = 3000

      expect(user.valid?).to eq(true)
    end
  end
end
