import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="header">
                <Link to="/">
                    <h1>goDine</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar