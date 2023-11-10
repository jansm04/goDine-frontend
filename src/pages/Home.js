import { useEffect, useState } from "react"

const Home = () => {

    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        const fetchRestaurants = async () => {
            const response = await fetch('http://localhost:4000/api/call?type=italian&mood=fancy')
            const json = await response.json();

            if (response.ok) {
                setRestaurants(json);
            }
        }
        fetchRestaurants()
    }, [])

    return (
        <div className="container">
            <header>{restaurants}</header>
        </div>
    )
}

export default Home