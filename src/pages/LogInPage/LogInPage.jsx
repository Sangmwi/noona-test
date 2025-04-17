import React from 'react'
import { useIsLogInStore } from '@/stores/useIsLogInStore'
import { useNavigate } from 'react-router-dom'
import './LogInPage.style.css'

const LogInPage = () => {
  const navigate = useNavigate()
  const { isLogIn, setIsLogIn } = useIsLogInStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLogIn(true)
    navigate('/home')
  }


  return (
    <div className='login-page'>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='아이디' />
            <input type="password" placeholder='비밀번호' />
            <button type='submit'>로그인</button>
        </form>
    </div>
  )
}

export default LogInPage