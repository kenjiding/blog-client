import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { localStorageGetter, localStorageSetter } from '@/utils/helper';

interface IUserData {
  access_token: string;
}

interface IUserStore {
  userData: IUserData,
  updateUser: (data: any) => void,
  removeUser: () => void,
  updateUserName: (username: string) => void,
}

const defaultUserData: () => IUserData = () => {
  const userData = localStorageGetter('user_data');
  return {
    ...userData
  };
}

export const useUserStore = create<IUserStore>()(
  immer(
    (set) => ({
      userData: defaultUserData(),
      updateUser: (data) => set((state) => {
        const temp = {
          ...state.userData,
          ...data
        };
        localStorageSetter('user_data', JSON.stringify(temp));
        state.userData = temp;
      }),
      removeUser: () => set((state) => {
        state.userData = defaultUserData();
      }),
      updateUserName: (username: string) => set((state) => {
        // state.user.username = username;
      }),
    }),
  )
);

