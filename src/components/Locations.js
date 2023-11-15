import { Marker } from "@vis.gl/react-google-maps"

const Locations = ({ restaurant }) => {

    // return empty map when in loading state
    if (restaurant.id === "loading") {
        return 
    }

    // restaurant location
    const pos = { 
        lat: restaurant.position.latitude, 
        lng: restaurant.position.longitude
    }
    return (
        <Marker position={pos} />
    )
}

export default Locations