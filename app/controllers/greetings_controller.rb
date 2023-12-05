class GreetingsController < ApplicationController
  def api_random
    render json: { greeting: Greeting.order('RANDOM()').first.message }
  end
end
