import { Link } from 'react-router-dom'

const PlaceDetails = ({ restaurant }) => {

    if (restaurant && restaurant.id === "loading") {
        return (
            <div className="place-details">
                <p>{restaurant.displayName.text}</p>
            </div>
        )
    }
 
    return (
        <div className="place-details">
            <Link to={restaurant.websiteUri}>{restaurant.displayName.text}</Link>
            <p>Rating: {restaurant.rating}</p>
            <p>Address: {restaurant.formattedAddress}</p>
        </div> 
    )
}

export default PlaceDetails

