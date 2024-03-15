export const DEFAULT_REQUEST_CONFIG = {
  attributes: [],
  baseDn: 'DC=inno,DC=tech',
  page: 1,
  pageSize: 30,
  searchAttributes: [],
  searchScope: 'one',
};

export const DEFAULT_ATTRIBUTES = ['objectClass', 'name', 'accountExpires', 'objectGUID', 'isCriticalSystemObject'];
