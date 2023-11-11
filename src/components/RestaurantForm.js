import { useState } from "react"

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
            <form onSubmit={handleSubmit}>
                <h2 className="search-header">What are you looking for?</h2>
                <label>Cuisine</label>
                <select value={type} className="type-select" onChange={handleTypeSelect}>
                    {types.map(t => (
                        <option>{t}</option>
                    ))}
                </select>
                <label>Mood</label>
                <select value={mood} className="mood-select" onChange={handleMoodSelect}>
                    {moods.map(m => (
                        <option>{m}</option>
                    ))}
                </select>
                <button>Find</button>
            </form>
        </div>
    )
}

export default RestaurantForm