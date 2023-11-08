import React from 'react'

function Screentwo({ formData, setFormData }) {
    const onOptionChange = (e) => {
        setFormData({ ...formData, sleepProblemDuration: e.target.value });
    }

    return (
        <div>
            <h2>That's a great goal. How long have you been struggling with your sleep?</h2><br />

            <input type="radio" name="sleep_problem_duration" value="One" onChange={onOptionChange} checked={formData.sleepProblemDuration === "One"} />
            <label htmlFor="one">Less than 2 weeks</label><br />

            <input type="radio" name="sleep_problem_duration" value="Two" onChange={onOptionChange} checked={formData.sleepProblemDuration === "Two"} />
            <label htmlFor="two">2 to 8 weeks</label><br />

            <input type="radio" name="sleep_problem_duration" value="Three" onChange={onOptionChange} checked={formData.sleepProblemDuration === "Three"} />
            <label htmlFor="three">More than 8 weeks</label>

            <p>
                You selected option: <strong>{formData.sleepProblemDuration}</strong>
            </p>
        </div>
    )
}

export default Screentwo