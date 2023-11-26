import { Link } from 'react-router-dom'

const PlaceDetails = ({ restaurant }) => {

    if (restaurant && restaurant.id === "loading") {
        return (
            <div className="place-details-loading">
                <p>{restaurant.displayName.text}</p>
            </div>
        )
    }

    if (restaurant && restaurant.id === "error") {
        return (
            <div className="place-details-error">
                <p>{restaurant.displayName.text}</p>
            </div>
        )
    }
 
    if (restaurant && restaurant.websiteUri && restaurant.rating && restaurant.formattedAddress) {
        return (
            <div className="place-details">
                <Link className="place-link" to={restaurant.websiteUri}>{restaurant.displayName.text}</Link>
                <p className='place-rating'>{restaurant.rating}⭐️</p>
                <p className='place-location'>📍{restaurant.formattedAddress}</p>
            </div> 
        )
    } else {
        console.log("Null restaurant object.")
        return <></>
    }
    
}

export default PlaceDetails

