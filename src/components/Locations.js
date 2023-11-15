import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps"
import { useState } from "react"

const Locations = ({ restaurant }) => {

    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();

    // return empty map when in loading state
    if (restaurant.id === "loading") {
        return 
    }

    // restaurant location
    const pos = { 
        lat: restaurant.location.latitude, 
        lng: restaurant.location.longitude
    }

    return (
        <>
        <AdvancedMarker 
            ref={markerRef}
            onClick={() => setInfowindowOpen(true)}
            position={pos}
        />
        {infowindowOpen && (
            <InfoWindow
                anchor={marker}
                maxWidth={200}
                onCloseClick={() => setInfowindowOpen(false)}>
                {restaurant.displayName.text}
            </InfoWindow> 
        )}
        </>  
    )
}

export default Locations