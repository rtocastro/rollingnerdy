import { useState } from 'react'
import { Link } from 'react-router-dom'
import careLogo from './assets/journalentryimage.png'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'

import MainPage from './pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
}

export default App
