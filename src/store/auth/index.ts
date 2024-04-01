import API from '@app/api';
import { IAuthRequest, IUserResponse } from '@app/api/controllers/auth/interfaces';
import { checkIsError, createStore, ISetterConfig, statuses } from '@store/config';

import { IAuthStore } from './interfaces';

const handleSignin =
  ({ set, effect }: ISetterConfig<IAuthStore>, actionName: string) =>
  async (email: string, password: string): Promise<IUserResponse | void> => {
    effect({ isLoading: true });

    const response = await API.auth.signin(email, password);
    const isError = checkIsError(response);

    if (isError) {
      effect({ isError: true, isLoading: false, isSuccess: false, message: response?.error });

      return;
    }

    effect({ isError: false, isLoading: false, isSuccess: true });
    set({ token: response?.accessToken }, actionName);

    return { ...response?.user };
  };

const handleSignup =
  ({ set, effect }: ISetterConfig<IAuthStore>, actionName: string) =>
  async (data: IAuthRequest): Promise<IUserResponse | void> => {
    effect({ isLoading: true });

    const response = await API.auth.signup(data);
    const isError = checkIsError(response);

    if (isError) {
      effect({ isError: true, isLoading: false, isSuccess: false, message: response?.error });

      return;
    }

    effect({ isError: false, isLoading: false, isSuccess: true });
    set({ token: response?.accessToken }, actionName);

    return { ...response?.user };
  };

const setDataToStore = (config: ISetterConfig<IAuthStore>): IAuthStore => ({
  signin: handleSignin(config, 'signin'),
  signup: handleSignup(config, 'signup'),
  statuses,
  token: null,
});

const useAuthStore = createStore<IAuthStore>(setDataToStore, 'authStore');

export default useAuthStore;
