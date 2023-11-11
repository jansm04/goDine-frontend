import { useState, useMemo } from "react"

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

// components
import RestaurantForm from "../components/RestaurantForm"

const Home = () => {

    const center = useMemo(() => ({ lat: 43.6532, lng: -79.3832 }), [])
    const [restaurants, setRestaurants] = useState(null)

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
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <Map className="google-api-map" center={center} zoom={10}>
                    <Marker position={center}></Marker>
                </Map>
            </APIProvider>
        </div>
    )
}

export default Home