# frozen_string_literal: true

module Api
  class ClientsController < ActionController::API
    def show
      clients = Clients::ClientRepository.new.show params[:id]
      render json: clients
    end
  end
end
