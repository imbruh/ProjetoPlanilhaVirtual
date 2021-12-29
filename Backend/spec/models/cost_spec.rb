require 'rails_helper'

RSpec.describe Cost, type: :model do
  context "criar custo" do
  
    it "quando invalido" do
      cost = Cost.new 
      expect(cost.valid?).to eq(false)
    end

    it "quando valor é válido" do
      cost = Cost.new 

      cost.valor = 40

      expect(cost.valor).to be > 1
    end
  end
end
