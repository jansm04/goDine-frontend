import { useState } from "react"

const Home = () => {

    const [restaurants, setRestaurants] = useState(null)
    const [type, setType] = useState("Italian") // type of restaurant
    const [mood, setMood] = useState("Casual") // restaurant mood (casual, fancy, etc.)

    const fetchRestaurants = async () => {
        // fetch array of restaurants from OpenAI API
        const response = await fetch(`http://localhost:4000/api/call?type=${type}&mood=${mood}`)
        const json = await response.json();
        if (response.ok) {
            setRestaurants(json);
        }
    }

    // types of cuisine
    const types = [
        "Italian",
        "Greek",
        "Mexican",
        "Canadian"
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

    const handleSubmit = () => {
        fetchRestaurants()
    }

    return (
        <div className="container">
            <div className="res-form">
                <form>
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
                    <button onSubmit={handleSubmit}>Find</button>
                </form>
            </div>
            <div className="data">
                <h2>{restaurants ? restaurants : "Loading..."}</h2>
            </div>
        </div>
    )
}

export default Home