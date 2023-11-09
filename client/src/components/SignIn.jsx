import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })

    const handleSignIn = async () => {
        if (userInfo.username && userInfo.password) {
            try {
                const response = await fetch('http://localhost:8000/user/signin', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                });

                const data = await response.json();
                console.log(data);

                if (!response.ok) {
                    alert(data.message);
                } else {
                    alert(`Welcome ${data.data.userDetails.username} to Wysa`);
                }
            } catch (error) {
                console.log(error.message);
            }
        } else {
            alert("Please enter both username and password");
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="md:w-1/2 md:h-4/5 p-3 md:p-5 bg-white rounded-lg flex flex-col shadow-md">
                <div className="h-4/5 w-full flex flex-col justify-center items-center">
                    <div className="w-full p-5 md:px-10 md:py-8">
                        <h1 className="font-bold text-[32px] text-[#6469ff]">Hey! I'm <span className="text-red-500">Wysa</span></h1>
                        <h2 className="font-bold text-[#222328] text-2xl mt-3">Sign In</h2>

                        <div className="mt-5 w-full">
                            <input type="text" name="username" placeholder="Username..."
                                value={userInfo.username}
                                onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#4649ff] outline-none block w-full p-3 my-3"
                            />

                            <input type="password" name="password" placeholder="Password..."
                                value={userInfo.password}
                                onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#4649ff] outline-none block w-full p-3 my-3"
                            />

                            No account? <Link to="/signup" className="text-blue-500 font-bold">Create One</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <button
                        className="m-5 py-2 px-4 bg-blue-500 text-white"
                        onClick={handleSignIn}
                    >
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SignIn