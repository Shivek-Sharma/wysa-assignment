import React, { useState } from 'react'
import SignUp from './SignUp'
import ScreenOne from './ScreenOne'
import ScreenTwo from './ScreenTwo'
import ScreenFinal from './ScreenFinal'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        sleepGoal: "",
        sleepProblemDuration: ""
    });

    const formTitles = ["Sign Up", "Screen 1", "Screen 2"];

    const pageDisplay = () => {
        if (page === 0) {
            return <SignUp formData={formData} setFormData={setFormData} />
        }
        else if (page === 1) {
            return <ScreenOne formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <ScreenTwo formData={formData} setFormData={setFormData} />
        } else {
            return <ScreenFinal formData={formData} />
        }
    };

    const handleSignUp = async () => {
        if (formData.username && formData.password) {
            try {
                const response = await fetch('http://localhost:8000/user/signup', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ username: formData.username, password: formData.password })
                });

                const data = await response.json();
                // console.log(data);

                if (response.ok)
                    setPage((prev) => prev + 1);
                else
                    alert("Username already exists, please choose different username");
            } catch (error) {
                console.log(error.message);
            }
        } else {
            alert("Please enter both username and password");
        }
    }

    const handleNext = () => {
        if (page === 0 && (!formData.username || !formData.password)) {
            alert("Please enter both username and password");
        } else if (page === 1 && !formData.sleepGoal) {
            alert("Please choose an option");
        } else if (page === 2 && !formData.sleepProblemDuration) {
            alert("Please choose an option");
        } else {
            page === formTitles.length - 1 ? handleFormSubmit() : setPage((prev) => prev + 1);
        }
    };

    const handleFormSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/user/sleepdata', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify(formData)
            });

            const data = await response.json();
            // console.log(data);

            if (response.ok)
                setPage((prev) => prev + 1);
            else
                alert(data.message);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="md:w-1/2 md:h-4/5 p-3 md:p-5 bg-white rounded-lg flex flex-col shadow-md">
                <div className="h-4/5 w-full flex flex-col justify-center items-center">
                    {pageDisplay()}
                </div>

                {page < formTitles.length && (
                    <div className="w-full flex justify-center items-center">
                        {page > 1 && (
                            <button
                                className="m-5 py-2 px-4 bg-blue-500 text-white"
                                onClick={() => { setPage((prev) => prev - 1) }}
                            >
                                Prev
                            </button>
                        )}

                        <button
                            className="m-5 py-2 px-4 bg-blue-500 text-white"
                            onClick={page === 0 ? handleSignUp : handleNext}
                        >
                            {page === formTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form