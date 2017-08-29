require 'test_helper'

class CaseManagementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @case_management = case_managements(:one)
  end

  test "should get index" do
    get case_managements_url
    assert_response :success
  end

  test "should get new" do
    get new_case_management_url
    assert_response :success
  end

  test "should create case_management" do
    assert_difference('CaseManagement.count') do
      post case_managements_url, params: { case_management: {  } }
    end

    assert_redirected_to case_management_url(CaseManagement.last)
  end

  test "should show case_management" do
    get case_management_url(@case_management)
    assert_response :success
  end

  test "should get edit" do
    get edit_case_management_url(@case_management)
    assert_response :success
  end

  test "should update case_management" do
    patch case_management_url(@case_management), params: { case_management: {  } }
    assert_redirected_to case_management_url(@case_management)
  end

  test "should destroy case_management" do
    assert_difference('CaseManagement.count', -1) do
      delete case_management_url(@case_management)
    end

    assert_redirected_to case_managements_url
  end
end
