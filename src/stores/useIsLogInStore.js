import { create } from 'zustand'

export const useIsLogInStore = create((set) => ({
    isLogIn: false,
    setIsLogIn: (isLogIn) => set({ isLogIn }),
}))



