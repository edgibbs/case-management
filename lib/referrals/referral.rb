# frozen_string_literal: true

require 'dry-struct'
require 'dry-types'

module Types
  include Dry::Types.module
end

module Referrals
  class Referral < Dry::Struct
    constructor_type :schema

    attribute :identifier, Types::String
    attribute :additional_info_included_code, Types::Bool
    attribute :anonymous_reporter_indicator, Types::Bool
    attribute :application_for_petition_indicator, Types::Bool
    attribute :approval_number, Types::String.optional
    attribute :approval_status_type, Types::Int
    attribute :caretakers_perpetrator_code, Types::Bool
    attribute :closure_date, Types::String
    attribute :communication_method_type, Types::Int
    attribute :county_specific_code, Types::String
    attribute :current_location_of_children, Types::String.optional
    attribute :drms_allegation_description_doc, Types::String.optional
    attribute :drms_er_referral_doc, Types::String.optional
    attribute :drms_investigation_doc, Types::String.optional
    attribute :family_awareness_indicator, Types::Bool
    attribute :family_refused_services_indicator, Types::Bool
    attribute :filed_suspected_child_abuse_reportto_law_enforcement_indicator, Types::Bool
    attribute :first_evaluated_out_approval_date, Types::String.optional
    attribute :alleges_abuse_occurred_at_address_id, Types::String.optional
    attribute :link_to_primary_referral_id, Types::String.optional
    attribute :first_response_determined_by_staff_person_id, Types::String.optional
    attribute :primary_contact_staff_person_id, Types::String
    attribute :govt_entity_type, Types::Int
    attribute :homeless_indicator, Types::Bool
    attribute :legal_definition_code, Types::String
    attribute :legal_rights_notice_indicator, Types::Bool
    attribute :limited_access_code, Types::String.optional
    attribute :limited_access_date, Types::String.optional
    attribute :limited_access_desc, Types::String.optional
    attribute :limited_access_govt_agency_type, Types::Int.optional
    attribute :mandated_cross_report_received_date, Types::String.optional
    attribute :referral_name, Types::String
    attribute :open_adequate_case_code, Types::Bool
    attribute :original_closure_date, Types::String.optional
    attribute :received_date, Types::String
    # attribute :received_time: LocalTime;
    attribute :referral_response_type, Types::Int
    attribute :referred_to_resource_type, Types::Int
    attribute :response_determination_date, Types::String.optional
    # attribute :response_determination_time: LocalTime;
    attribute :response_rationale_text, Types::String.optional
    attribute :responsible_agency_code, Types::String
    attribute :screener_note_text, Types::String.optional
    attribute :special_project_referral_indicator, Types::Bool
    attribute :specifics_included_code, Types::Bool
    attribute :sufficient_information_code, Types::Bool
    attribute :unfounded_series_code, Types::Bool
    attribute :zippy_created_indicator, Types::Bool
    attribute :assignment_type, Types::String.optional
  end
end
