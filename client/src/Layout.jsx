import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="w-full bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <h2 className="font-bold text-2xl text-[#40909F] font-inter">wysa</h2>
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-screen bg-[#f9fafe] h-[calc(100vh-73px)]">
        <Outlet />
      </main>
    </>
  )
}

export default Layout