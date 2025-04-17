import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/layout/Layout'
import HomePage from '@/pages/HomePage/HomePage'
import MyLibraryPage from '@/pages/MyLibraryPage/MyLibraryPage'
import LogInPage from '@/pages/LogInPage/LogInPage'
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage'
import { Navigate } from 'react-router-dom'
import { useIsLogInStore } from '@/stores/useIsLogInStore'

const App = () => {
  const { isLogIn } = useIsLogInStore()
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/my-library' element={isLogIn ? <MyLibraryPage /> : <Navigate to='/login' />} />
        <Route path='/login' element={<LogInPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App