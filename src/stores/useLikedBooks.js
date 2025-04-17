import { create } from 'zustand'

export const useLikedBooks = create((set) => ({
    likedBooks: [],
    addLikedBook: (book) => set((state) => ({ likedBooks: [...state.likedBooks, book] })),
    removeLikedBook: (book) => set((state) => ({ likedBooks: state.likedBooks.filter((b) => b.id !== book.id) })),
}))



