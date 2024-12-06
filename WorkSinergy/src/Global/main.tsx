import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Global/App.css'
import { MainIndex, store } from '../Pages/MainPage/MainIndex'
import AuthProvider from 'react-auth-kit/AuthProvider'
import createStore from 'react-auth-kit/createStore'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider store={store}>
      <MainIndex/>
    </AuthProvider>
  </StrictMode>,
)
