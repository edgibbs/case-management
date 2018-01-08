# frozen_string_literal: true

require 'spec_helper'
require 'rspec/dry/struct'
require 'cases/case'

module Cases
  describe Case do
    describe 'attributes' do
      subject { Case }
      it { is_expected.to have_attribute(:identifier, Types::String) }
      it { is_expected.to have_attribute(:case_name, Types::String.optional) }
      it { is_expected.to have_attribute(:client_identifier, Types::String.optional) }
      it { is_expected.to have_attribute(:client_first_name, Types::String.optional) }
      it { is_expected.to have_attribute(:client_last_name, Types::String.optional) }
      it { is_expected.to have_attribute(:active_service_component, Types::String.optional) }
      it { is_expected.to have_attribute(:assignment_type, Types::String.optional) }
    end
  end
end
