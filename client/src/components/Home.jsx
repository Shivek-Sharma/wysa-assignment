import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="md:w-1/2 md:h-2/3 p-3 md:p-5 bg-white rounded-lg flex flex-col shadow-md">
                <div className="p-5 w-full h-full flex flex-col justify-center items-center">
                    <h1 className="font-bold text-[32px] text-[#6469ff]">Welcome to <span className="text-red-500">Wysa</span></h1>
                    <h2 className="block text-xl font-medium">Your AI Friend</h2>

                    <div className="mt-5 flex justify-center items-center">
                        <Link to="/signup" className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md m-3">Sign Up</Link>
                        <Link to="/signin" className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md m-3">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home