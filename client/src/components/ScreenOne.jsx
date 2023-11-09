import React from 'react'

function ScreenOne({ formData, setFormData }) {
    const onOptionChange = (e) => {
        setFormData({ ...formData, sleepGoal: e.target.value });
    }

    return (
        <div className="p-3">
            <h2 className="block text-xl font-medium">Let's say in a few weeks, you're sleeping well. What would change?</h2>

            <div className="mt-5">
                <input type="radio" name="sleep_goal" value="One" onChange={onOptionChange} checked={formData.sleepGoal === "One"} className="w-4 h-4 mr-3 my-3" />
                <label htmlFor="one" className="w-full text-xl">I would go to sleep easily</label><br />

                <input type="radio" name="sleep_goal" value="Two" onChange={onOptionChange} checked={formData.sleepGoal === "Two"} className="w-4 h-4 mr-3 my-3" />
                <label htmlFor="two" className="w-full text-xl">I would sleep through the night</label><br />

                <input type="radio" name="sleep_goal" value="Three" onChange={onOptionChange} checked={formData.sleepGoal === "Three"} className="w-4 h-4 mr-3 my-3" />
                <label htmlFor="three" className="w-full text-xl">I'd wake up on time, refreshed</label>
            </div>
        </div>
    )
}

export default ScreenOne