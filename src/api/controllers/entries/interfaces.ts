export interface IEntriesRequest {
  attributes?: string[];
  baseDn?: string;
  filter?: string;
  ldapEntityTypes?: TEntity[];
  page?: number;
  pageSize?: number;
  searchAttributes?: string[];
  searchScope?: string;
  searchStr?: string;
}

export type TEntity = 'user' | 'group' | 'ou' | 'pso' | 'computer' | 'container';

export type TAttributeName =
  | 'name'
  | 'objectClass'
  | 'objectGUID'
  | 'isCriticalSystemObject'
  | 'accountExpires'
  | 'sAMAccountName'
  | 'dNSHostName'
  | 'userPrincipalName'
  | 'country'
  | 'city'
  | 'surname'
  | 'type';

export interface IEntryResponse {
  attributes: IAttribute[] | null;
  children: IEntryResponse[] | null;
  dn: string;
  type: TEntity | null;
}

export interface ITreeResponse {
  directory_tree: IEntryResponse;
  domain: {
    name: string;
  };
}

export interface IEntry extends Omit<IEntryResponse, 'dn' | 'children'> {
  children: IEntry[] | null;
  distinguishedName: string;
}

export interface IAttribute {
  name: TAttributeName;
  value: string[];
}
