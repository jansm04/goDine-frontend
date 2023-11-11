import { useState } from "react"

// components
import RestaurantForm from "../components/RestaurantForm"

const Home = () => {

    const [restaurants, setRestaurants] = useState(null)

    const handleQuerySubmit = (type, mood) => {
        // fetch array of restaurants from OpenAI API
        const fetchRestaurants = async () => {
            const response = await fetch(`http://localhost:4000/api/call?type=${type}&mood=${mood}`)
            const json = await response.json();
            if (response.ok) {
                setRestaurants(json);
            }
        }
        fetchRestaurants()
    }

    return (
        <div className="container">
            <RestaurantForm onSubmit={handleQuerySubmit} />
            <div className="data">
                <h2> Restaurants:
                    {restaurants && restaurants.map(r => (
                        <p>{r}</p>
                    ))}
                </h2>
            </div>
        </div>
    )
}

export default Home