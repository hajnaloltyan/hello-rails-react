require "test_helper"

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get api_random" do
    get greetings_api_random_url
    assert_response :success
  end
end
