import React from 'react'

function ScreenOne({ formData, setFormData }) {
    const onOptionChange = (e) => {
        setFormData({ ...formData, sleepGoal: e.target.value });
    }

    return (
        <div>
            <h2>Let's say in a few weeks, you're sleeping well. What would change?</h2><br />

            <input type="radio" name="sleep_goal" value="One" onChange={onOptionChange} checked={formData.sleepGoal === "One"} />
            <label htmlFor="one">I would go to sleep easily</label><br />

            <input type="radio" name="sleep_goal" value="Two" onChange={onOptionChange} checked={formData.sleepGoal === "Two"} />
            <label htmlFor="two">I would sleep through the night</label><br />

            <input type="radio" name="sleep_goal" value="Three" onChange={onOptionChange} checked={formData.sleepGoal === "Three"} />
            <label htmlFor="three">I'd wake up on time, refreshed</label>

            <p>
                You selected option: <strong>{formData.sleepGoal}</strong>
            </p>
        </div>
    )
}

export default ScreenOne