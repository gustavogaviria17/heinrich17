import AuthAPI from './controllers/auth';

class API {
  auth: AuthAPI;

  constructor() {
    this.auth = new AuthAPI();
  }
}

export default new API();
