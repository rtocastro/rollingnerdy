import { useState } from 'react'
import { Link } from 'react-router-dom'
import careLogo from './assets/journalentryimage.png'
import './App.css'
import { Outlet } from 'react-router-dom'

import MainPage from './pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Outlet />
    </>
  )
}

export default App
