import { create } from 'zustand'

const useIsLogInStore = create((set) => ({
    isLogIn: false,
    setIsLogIn: (isLogIn) => set({ isLogIn }),
}))

export default useIsLogInStore

