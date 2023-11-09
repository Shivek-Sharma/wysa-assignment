import React from 'react'

function Screentwo({ formData, setFormData }) {
    const onOptionChange = (e) => {
        setFormData({ ...formData, sleepProblemDuration: e.target.value });
    }

    return (
        <div className="p-3">
            <h2 className="block text-xl font-medium">That's a great goal. How long have you been struggling with your sleep?</h2>

            <div className="mt-5">
                <input type="radio" name="sleep_problem_duration" value="One" onChange={onOptionChange} checked={formData.sleepProblemDuration === "One"} className="w-4 h-4 mr-3 my-3" />
                <label htmlFor="one" className="w-full text-xl">Less than 2 weeks</label><br />

                <input type="radio" name="sleep_problem_duration" value="Two" onChange={onOptionChange} checked={formData.sleepProblemDuration === "Two"} className="w-4 h-4 mr-3 my-3" />
                <label htmlFor="two" className="w-full text-xl">2 to 8 weeks</label><br />

                <input type="radio" name="sleep_problem_duration" value="Three" onChange={onOptionChange} checked={formData.sleepProblemDuration === "Three"} className="w-4 h-4 mr-3 my-3" />
                <label htmlFor="three" className="w-full text-xl">More than 8 weeks</label>
            </div>
        </div>
    )
}

export default Screentwo