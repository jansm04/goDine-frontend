import { useState } from "react"
import { APIProvider, Map } from "@vis.gl/react-google-maps"

// components
import RestaurantForm from "../components/RestaurantForm"
import PlaceDetails from "../components/PlaceDetails"
import Locations from "../components/Locations"

const Home = () => {

    const [restaurants, setRestaurants] = useState(null)
    const center = { lat: 43.6632, lng: -79.3832 }
    
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
            <div className="google-map">
                <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                    <Map className="google-api-map" center={center} zoom={11} disableDefaultUI={true} mapId={'adv-marker'}>
                        {restaurants && restaurants.map((r) => (
                            <Locations restaurant={r} />
                        ))}
                    </Map>
                </APIProvider>
            </div>
        </div>
    )
}

export default Home