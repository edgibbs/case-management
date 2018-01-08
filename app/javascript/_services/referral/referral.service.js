import ApiService from '../api';

class ReferralService {
  static fetch() {
    return ApiService.get('/referrals/0Ki').then(response => response.data);
  }
}

export default ReferralService;
