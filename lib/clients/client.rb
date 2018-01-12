# frozen_string_literal: true

require 'dry-struct'
require 'dry-types'

module Types
  include Dry::Types.module
end

module Clients
  class Client < Dry::Struct
    constructor_type :schema
    attribute :name_prefix_description, Types::String.optional
    attribute :common_first_name, Types::String.optional
    attribute :common_middle_name, Types::String.optional
    attribute :common_last_name, Types::String.optional
    attribute :suffix_title_description, Types::String.optional
    attribute :social_security_number, Types::String.optional
    attribute :birth_dt, Types::String.optional
    attribute :adopted_age, Types::String.optional
    attribute :identifier, Types::String.optional
    attribute :alien_registration_number, Types::String.optional
    attribute :driver_licens_number, Types::String.optional
    attribute :gender_code, Types::String.optional
    attribute :material_status_type, Types::String.optional
    attribute :ageUnit, Types::String.optional
    attribute :name_type, Types::String.optional
    attribute :driver_license_state_code_type, Types::String.optional
  end
end
