import EntriesAPI from './controllers/entries';

class API {
  entries: EntriesAPI;

  constructor() {
    this.entries = new EntriesAPI();
  }
}

export default new API();
