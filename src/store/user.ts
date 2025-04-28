import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

interface IUserData {
  access_token: string;
}

interface IUserStore {
  sidebarOpen: boolean;
  userData: IUserData;
  changeSidebarOpen: (data: boolean) => void;
  updateUser: (data: any) => void;
  removeUser: () => void;
  updateUserName: (username: string) => void;
}

const defaultUserData: () => IUserData = () => {
  return {
    access_token: '',
  };
};

export const useUserStore = create<IUserStore>()(
  persist(
    immer((set) => ({
      sidebarOpen: false,
      userData: defaultUserData(),
      changeSidebarOpen: (data: boolean) => set((state) => {
        state.sidebarOpen = data;
      }),
      updateUser: (data) => set((state) => {
        const temp = {
          ...state.userData,
          ...data,
        };
        state.userData = temp;
      }),
      removeUser: () => set((state) => {
        state.userData = defaultUserData();
      }),
      updateUserName: (username: string) => set((state) => {
        // state.user.username = username;
      }),
    })),
    {
      name: 'user_data',
    }
  )
);
