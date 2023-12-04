import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Form from './components/Form'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Layout from './Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<Form />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App