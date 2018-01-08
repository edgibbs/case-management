# frozen_string_literal: true

require 'dry-struct'
require 'dry-types'

module Types
  include Dry::Types.module
end

module Cases
  class Case < Dry::Struct
    constructor_type :schema

    attribute :identifier, Types::String
    attribute :case_name, Types::String.optional
    attribute :client_identifier, Types::String.optional
    attribute :client_first_name, Types::String.optional
    attribute :client_last_name, Types::String.optional
    attribute :active_service_component, Types::String.optional
    attribute :assignment_type, Types::String.optional
  end
end
