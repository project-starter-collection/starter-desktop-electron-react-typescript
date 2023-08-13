import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type UserState = {
  username: string;
  authToken: string;
  setUsername: (name: string) => void;
  setAuthToken: (name: string) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist( // Remark: Persistence does not work in electron after closing app
      (set) => ({
        username: '',
        authToken: '',
        setUsername: (username) => set({ username }),
        setAuthToken: (authToken) => set({ authToken }),
      }),
      {
        name: 'user-store',
      }
    )
  )
)
