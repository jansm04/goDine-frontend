import { useState } from "react"

// components
import RestaurantForm from "../components/RestaurantForm"
import RestaurantMap from "../components/RestaurantMap"
import PlaceDetails from "../components/PlaceDetails"


const Home = () => {

    const [restaurants, setRestaurants] = useState(null)
    
    const handleQuerySubmit = (type, mood) => {
        setRestaurants([
            {
                id: "loading",
                displayName: {text: "finding your next dinner..."}
            }])

        // fetch array of restaurants from OpenAI API
        const fetchRestaurants = async () => {
            const response = await fetch(`http://localhost:4000/api/call?type=${type}&mood=${mood}`)
            const json = await response.json()
            if (response.ok) {
                setRestaurants(json)
                console.log(json)
            }
        }
        fetchRestaurants() 
    }

    return (
        <div className="container">
            <RestaurantForm onSubmit={handleQuerySubmit} />
            <div className="data">
                <h2> Restaurants: </h2>
                {restaurants && restaurants.map((r) => (
                    <PlaceDetails restaurant={r}/>
                ))}
            </div>
            <RestaurantMap restaurants={restaurants} />
        </div>
    )
}

export default Home