import api from '@/utils/api'
import { useQuery } from '@tanstack/react-query'

export const fetchBooks = () => {
    return useQuery({
        queryKey: ['books'],
        queryFn: () => api.get('/subjects/love.json'),
    })
}

export const searchBooks = (query) => {
    return useQuery({
        queryKey: ['search', query],
        queryFn: () => api.get(`/search.json?q=${query}`),
    })
}

