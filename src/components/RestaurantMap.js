import { APIProvider, Map } from "@vis.gl/react-google-maps"

// components
import Locations from "../components/Locations"

const RestaurantMap = ({ restaurants }) => {

    const maps_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    // toronto coordinates
    const center = { lat: 43.6632, lng: -79.3832 }

    return (
        <div className="res-map">
            <APIProvider apiKey={maps_key}>
                <Map 
                    className="google-api-map" 
                    center={center} 
                    zoom={11} 
                    disableDefaultUI={true} 
                    mapId={'adv-marker'}>
                    {restaurants && restaurants.map((r) => (
                        <Locations restaurant={r} />
                    ))}
                </Map>
            </APIProvider>
        </div>
    )
}

export default RestaurantMap