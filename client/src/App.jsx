import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Form from './components/Form'
import Home from './components/Home'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <h2 className="font-bold text-2xl text-[#40909F] font-inter">wysa</h2>
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-screen bg-[#f9fafe] h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App