import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Global/App.css'
import { MainIndex } from '../Pages/MainPage/MainIndex'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainIndex/>
  </StrictMode>,
)
