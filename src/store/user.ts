import { create } from 'zustand';
import { subscribeWithSelector, persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { immer } from 'zustand/middleware/immer'

interface IUserData {
  access_token: string;
}

interface IUserStore {
  userData: IUserData,
  updateUser: (data: any) => void,
  removeUser: () => void,
  updateUserName: (username: string) => void,
}

const defaultUserData: () => IUserData = () => ({
  access_token: '',
});

export const useUserStore = create<IUserStore>()(
  immer(
    (set) => ({
      userData: defaultUserData(),
      updateUser: (data) => set((state) => {
        state.userData = {
          ...state.userData,
          ...data
        };
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

