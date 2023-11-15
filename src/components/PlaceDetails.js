import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

const PlaceDetails = ({ restaurant }) => {

    if (restaurant.id === "loading") {
        return (
            <div className="place-details">
                <p>{restaurant.displayName.text}</p>
            </div>
        )
    }

    // restaurant location
    const pos = { 
        lat: restaurant.location.latitude, 
        lng: restaurant.location.longitude 
    }
 
    return (
        <div className="place-details">
            <p>{restaurant.displayName.text} ({restaurant.rating})</p>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <Map className="google-api-map" center={pos} zoom={13} disableDefaultUI={true}>
                    <Marker position={pos}></Marker>
                </Map>
            </APIProvider>
        </div> 
    )
}

export default PlaceDetails

