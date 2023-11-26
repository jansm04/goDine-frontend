import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="header">
                <Link className="header-link" to="/">
                    <h1>goDine</h1>
                </Link>
                <div className='slogan'>
                    <p>Let AI help you decide where to eat.</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar