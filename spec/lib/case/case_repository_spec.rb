# frozen_string_literal: true

require 'spec_helper'
require 'case/case'
require 'json'

module Case
  describe CaseRepository do
    let(:http_service) { instance_double('Infrastructure::Service') }
    let(:case_repository) { CaseRepository.new(http_service) }

    describe '#cases_by_user' do
      context 'with no cases' do
        let(:empty_json) do
          JSON.generate(results: [])
        end

        it 'returns an empty collection' do
          allow(http_service).to receive(:get).with('/cases/_search=user=12').and_return(empty_json)
          expect(case_repository.cases_by_user_id('12')).to eq []
        end
      end

      context 'with cases' do
        let(:cases_json) do
          cases = {
            results:  [
              {
                id: '12'
              }
            ]
          }
          JSON.generate(cases)
        end

        it 'returns cases' do
          allow(http_service).to receive(:get).with('/cases/_search=user=44').and_return(cases_json)
          expect(case_repository.cases_by_user_id('44')).to eq [Case.new(id: '12')]
        end
      end
    end
  end
end
