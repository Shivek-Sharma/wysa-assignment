import React, { useState } from 'react'
import SignUp from './SignUp'
import ScreenOne from './ScreenOne'
import ScreenTwo from './ScreenTwo'
import ScreenFinal from './ScreenFinal'

function Form() {
    const [page, setPage] = useState(0);

    const formTitles = ["Sign Up", "Screen 1", "Screen 2", "Final Screen"];

    const pageDisplay = () => {
        if (page === 0) {
            return <SignUp />
        }
        else if (page === 1) {
            return <ScreenOne />
        } else if (page === 2) {
            return <ScreenTwo />
        } else {
            return <ScreenFinal />
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-full">
            <div className="progress-bar"></div>
            <div className="form-container">
                <div className="header">
                    <h1 className="text-2xl m-5">{formTitles[page]}</h1>
                </div>
                <div className="body">{pageDisplay()}</div>
                <div className="footer">
                    <button
                        className="m-5 p-4 border-2"
                        disabled={page == 0}
                        onClick={() => { setPage((prev) => prev - 1) }}
                    >
                        Prev
                    </button>

                    <button
                        className="m-5 p-4 border-2"
                        disabled={page == formTitles.length - 1}
                        onClick={() => { setPage((prev) => prev + 1) }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form