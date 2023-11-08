import React from 'react'

function SignUp({ formData, setFormData }) {
    const usernameChange = (e) => {
        setFormData({ ...formData, username: e.target.value });
    };

    const passwordChange = (e) => {
        setFormData({ ...formData, password: e.target.value });
    };

    return (
        <div className="w-full px-16 py-10">
            <h1 className="font-bold text-[32px] text-[#6469ff]">Hey! I'm <span className="text-red-500">Wysa</span></h1>
            <h2 className="font-bold text-[#222328] text-2xl">Sign Up</h2>

            <div className="mt-5 w-full">
                <input type="text" name="username" placeholder="Username..."
                    value={formData.username}
                    onChange={usernameChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#4649ff] outline-none block w-full p-3 my-3"
                />

                <input type="password" name="password" placeholder="Password..."
                    value={formData.password}
                    onChange={passwordChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#4649ff] outline-none block w-full p-3 my-3"
                />
            </div>
        </div>
    )
}

export default SignUp