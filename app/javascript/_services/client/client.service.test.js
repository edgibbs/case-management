import ClientService from './client.service';

jest.mock('../api');
const ApiService = require('../api').default;

describe('ClientService', () => {
  it('exists', () => {
    expect(!!ClientService).toBeTruthy();
  });

  describe('#fetch', () => {
    let getSpy;

    beforeEach(() => {
      getSpy = jest.spyOn(ApiService, 'get');
    });

    it('calls ApiService', () => {
      getSpy.mockReturnValue(Promise.resolve(42));
      expect(getSpy).not.toHaveBeenCalled();
      ClientService.fetch();
      expect(getSpy).toHaveBeenCalledWith(jasmine.any(String));
    });
  });
});
