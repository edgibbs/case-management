# frozen_string_literal: true

require 'spec_helper'
require 'rspec/dry/struct'
require 'referrals/referral'

module Referrals
  describe Referral do
    describe 'attributes' do
      subject { Referral }
      # rubocop:disable Metrics/LineLength
      it { is_expected.to have_attribute(:identifier, Types::String) }
      it { is_expected.to have_attribute(:additional_info_included_code, Types::Bool) }
      it { is_expected.to have_attribute(:anonymous_reporter_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:application_for_petition_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:approval_number, Types::String.optional) }
      it { is_expected.to have_attribute(:approval_status_type, Types::Int) }
      it { is_expected.to have_attribute(:caretakers_perpetrator_code, Types::Bool) }
      it { is_expected.to have_attribute(:closure_date, Types::String) }
      it { is_expected.to have_attribute(:communication_method_type, Types::Int) }
      it { is_expected.to have_attribute(:county_specific_code, Types::String) }
      it { is_expected.to have_attribute(:current_location_of_children, Types::String.optional) }
      it { is_expected.to have_attribute(:drms_allegation_description_doc, Types::String.optional) }
      it { is_expected.to have_attribute(:drms_er_referral_doc, Types::String.optional) }
      it { is_expected.to have_attribute(:drms_investigation_doc, Types::String.optional) }
      it { is_expected.to have_attribute(:family_awareness_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:family_refused_services_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:filed_suspected_child_abuse_reportto_law_enforcement_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:first_evaluated_out_approval_date, Types::String.optional) }
      it { is_expected.to have_attribute(:alleges_abuse_occurred_at_address_id, Types::String.optional) }
      it { is_expected.to have_attribute(:link_to_primary_referral_id, Types::String.optional) }
      it { is_expected.to have_attribute(:first_response_determined_by_staff_person_id, Types::String.optional) }
      it { is_expected.to have_attribute(:primary_contact_staff_person_id, Types::String) }
      it { is_expected.to have_attribute(:govt_entity_type, Types::Int) }
      it { is_expected.to have_attribute(:homeless_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:legal_definition_code, Types::String) }
      it { is_expected.to have_attribute(:legal_rights_notice_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:limited_access_code, Types::String.optional) }
      it { is_expected.to have_attribute(:limited_access_date, Types::String.optional) }
      it { is_expected.to have_attribute(:limited_access_desc, Types::String.optional) }
      it { is_expected.to have_attribute(:limited_access_govt_agency_type, Types::Int.optional) }
      it { is_expected.to have_attribute(:mandated_cross_report_received_date, Types::String.optional) }
      it { is_expected.to have_attribute(:referral_name, Types::String) }
      it { is_expected.to have_attribute(:open_adequate_case_code, Types::Bool) }
      it { is_expected.to have_attribute(:original_closure_date, Types::String.optional) }
      it { is_expected.to have_attribute(:received_date, Types::String) }
      it { is_expected.to have_attribute(:referral_response_type, Types::Int) }
      it { is_expected.to have_attribute(:referred_to_resource_type, Types::Int) }
      it { is_expected.to have_attribute(:response_determination_date, Types::String.optional) }
      it { is_expected.to have_attribute(:response_rationale_text, Types::String.optional) }
      it { is_expected.to have_attribute(:responsible_agency_code, Types::String) }
      it { is_expected.to have_attribute(:screener_note_text, Types::String.optional) }
      it { is_expected.to have_attribute(:special_project_referral_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:specifics_included_code, Types::Bool) }
      it { is_expected.to have_attribute(:sufficient_information_code, Types::Bool) }
      it { is_expected.to have_attribute(:unfounded_series_code, Types::Bool) }
      it { is_expected.to have_attribute(:zippy_created_indicator, Types::Bool) }
      it { is_expected.to have_attribute(:assignment_type, Types::String.optional) }
      # rubocop:enable Metrics/LineLength
    end
  end
end
