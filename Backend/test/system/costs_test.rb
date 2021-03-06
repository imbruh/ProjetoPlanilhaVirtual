require "application_system_test_case"

class CostsTest < ApplicationSystemTestCase
  setup do
    @cost = costs(:one)
  end

  test "visiting the index" do
    visit costs_url
    assert_selector "h1", text: "Costs"
  end

  test "creating a Cost" do
    visit costs_url
    click_on "New Cost"

    fill_in "Data", with: @cost.data
    fill_in "Descricao", with: @cost.descricao
    fill_in "User", with: @cost.user_id
    fill_in "Valor", with: @cost.valor
    click_on "Create Cost"

    assert_text "Cost was successfully created"
    click_on "Back"
  end

  test "updating a Cost" do
    visit costs_url
    click_on "Edit", match: :first

    fill_in "Data", with: @cost.data
    fill_in "Descricao", with: @cost.descricao
    fill_in "User", with: @cost.user_id
    fill_in "Valor", with: @cost.valor
    click_on "Update Cost"

    assert_text "Cost was successfully updated"
    click_on "Back"
  end

  test "destroying a Cost" do
    visit costs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Cost was successfully destroyed"
  end
end
