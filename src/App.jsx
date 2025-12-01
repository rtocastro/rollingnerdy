import { useState } from 'react'
import { Link } from 'react-router-dom'
import careLogo from './assets/journalentryimage.png'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 4000 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

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
