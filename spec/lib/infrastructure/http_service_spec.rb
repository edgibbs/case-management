# frozen_string_literal: true

require 'rails_helper'

module Infrastructure
  describe HttpService do
    let(:connection) { instance_double('Faraday::Connection') }

    describe '#get' do
      it 'makes a get request' do
        allow(Faraday).to receive(:new)
          .with(url: 'https://casemgmapi.test.cwds.io')
          .and_return(connection)
        expect(connection).to receive(:get).with('/resource')
        Infrastructure::HttpService.new.get('/resource')
      end
    end
  end
end
