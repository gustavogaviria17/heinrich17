import axiosInstance from '@app/api/axios';
import { IError } from '@app/api/axios/interfaces';

import { DEFAULT_ATTRIBUTES, DEFAULT_REQUEST_CONFIG } from './constants';
import { toQuery, withoutUndefined } from './controller';
import { IEntriesRequest, IEntry, IEntryResponse, ITreeResponse } from './interfaces';

class EntriesAPI {
  private readonly entriesURL: string;
  private readonly treeURL: string;

  constructor() {
    this.entriesURL = '/entries';
    this.treeURL = '/';
  }

  async getEntries(request?: IEntriesRequest): Promise<IEntry[] | IError> {
    const requestData = {
      ...DEFAULT_REQUEST_CONFIG,
      ...request,
      attributes: [...DEFAULT_ATTRIBUTES, ...(request?.attributes || [])].join(','),
    };
    const queryParams = Object.entries(requestData).filter(withoutUndefined).map(toQuery).join('&');
    const url = `${this.entriesURL}${queryParams ? `?${queryParams}` : ''}`;

    return axiosInstance.get(url);
  }

  async getRootFolders(baseDn: string): Promise<IEntryResponse[] | IError> {
    const requestData = {
      attributes: ['name', 'objectClass', 'objectGuid'].join(','),
      baseDn,
      filter: '(|(showInAdvancedViewOnly=FALSE)(objectClass=organizationalUnit))',
      pageSize: -1,
      searchScope: 'one',
    };
    const queryParams = Object.entries(requestData).filter(withoutUndefined).map(toQuery).join('&');
    const url = `${this.entriesURL}${queryParams ? `?${queryParams}` : ''}`;

    return axiosInstance.get(url);
  }

  async getBaseDN(): Promise<ITreeResponse | IError> {
    return axiosInstance.get(this.treeURL);
  }
}

export default EntriesAPI;
