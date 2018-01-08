import ApiService from '../api';

class CaseService {
  static fetch() {
    return ApiService.get('/cases/0Ki').then(response => response.data);
  }
}

export default CaseService;
