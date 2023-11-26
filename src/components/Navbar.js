import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="header">
                <Link className="header-link" to="/">
                    <h1>goDine</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar