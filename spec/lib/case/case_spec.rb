# frozen_string_literal: true

require 'spec_helper'
require 'rspec/dry/struct'
require 'case/case'

module Case
  describe Case do
    describe 'attributes' do
      subject { Case }
      it { is_expected.to have_attribute(:id, Types::String.optional) }
    end
  end
end
