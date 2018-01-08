import ReferralService from './referral.service';

jest.mock('../api');
const ApiService = require('../api').default;

describe('ReferralService', () => {
  it('exists', () => {
    expect(!!ReferralService).toBeTruthy();
  });

  describe('#fetch', () => {
    let getSpy;

    beforeEach(() => {
      getSpy = jest.spyOn(ApiService, 'get');
    });

    it('calls ApiService', () => {
      getSpy.mockReturnValue(Promise.resolve(42));
      expect(getSpy).not.toHaveBeenCalled();
      ReferralService.fetch();
      expect(getSpy).toHaveBeenCalledWith(jasmine.any(String));
    });
  });
});
