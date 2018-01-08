import CaseService from './case.service';

jest.mock('../api');
const ApiService = require('../api').default;

describe('CaseService', () => {
  it('exists', () => {
    expect(!!CaseService).toBeTruthy();
  });

  describe('#fetch', () => {
    let getSpy;

    beforeEach(() => {
      getSpy = jest.spyOn(ApiService, 'get');
    });

    it('calls ApiService', () => {
      getSpy.mockReturnValue(Promise.resolve(42));
      expect(getSpy).not.toHaveBeenCalled();
      CaseService.fetch();
      expect(getSpy).toHaveBeenCalledWith(jasmine.any(String));
    });
  });
});
