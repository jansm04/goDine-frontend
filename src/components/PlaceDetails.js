const PlaceDetails = ({ restaurant }) => {

    if (restaurant.id === "loading") {
        return (
            <div className="place-details">
                <p>{restaurant.displayName.text}</p>
            </div>
        )
    }
 
    return (
        <div className="place-details">
            <p>{restaurant.displayName.text} ({restaurant.rating})</p>
        </div> 
    )
}

export default PlaceDetails

