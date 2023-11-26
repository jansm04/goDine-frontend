import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="signature">Created by Jan S. in November 2023</div>
            <Link className="gh-link" to='https://github.com/jansm04'>Github</Link>
        </footer>
    )
}

export default Footer