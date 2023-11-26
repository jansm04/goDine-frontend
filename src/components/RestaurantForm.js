import { useState } from "react"

import Navbar from './Navbar';

const RestaurantForm = ({ onSubmit }) => {

    const [type, setType] = useState("Italian") // type of restaurant
    const [mood, setMood] = useState("Casual") // restaurant mood (casual, fancy, etc.)

    // types of cuisine
    const types = [
        "Italian",
        "Greek",
        "Mexican",
        "Steakhouse"
    ]
    // restaurant moods
    const moods = [
        "Casual",
        "Fancy"
    ]

    // set cuisine type on selection
    const handleTypeSelect = (event) => {
        setType(event.target.value)
    }

    // set mood on selection
    const handleMoodSelect = (event) => {
        setMood(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(type, mood)
    }

    return (
        <div className="res-form">
            <Navbar />
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="search-header">What are you craving?</h2>
                <div className="cuisine-type">
                    <label>Cuisine</label>
                    <select value={type} className="form-select" onChange={handleTypeSelect}>
                        {types.map(t => (
                            <option>{t}</option>
                        ))}
                    </select>
                </div>
                <div className="mood-type">
                    <label>Mood</label>
                    <select value={mood} className="form-select" onChange={handleMoodSelect}>
                        {moods.map(m => (
                            <option>{m}</option>
                        ))}
                    </select>
                </div>
                <button>Find</button>
            </form>
        </div>
    )
}

export default RestaurantForm