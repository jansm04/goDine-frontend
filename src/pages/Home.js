import { useState } from "react"

import { useJsApiLoader, GoogleMap } from "@react-google-maps/api"

// components
import RestaurantForm from "../components/RestaurantForm"

const Home = () => {

    const [restaurants, setRestaurants] = useState(null)
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    })
    if (!isLoaded) {
        console.log("Error: Google Maps API key has not been loaded.")
        return
    }
    const center = { lat: 43.6532, lng: -79.3832 }

    const handleQuerySubmit = (type, mood) => {
        setRestaurants(["finding your next dinner..."])

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
                {restaurants && restaurants.map(r => (
                    <p>{r}</p>
                ))}
            </div>
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '500px', height: '500px'}}>
                <div>Map</div>
            </GoogleMap>
        </div>
    )
}

export default Home