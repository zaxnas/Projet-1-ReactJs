import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div>
            <nav className = "navbar navbar-dark bg-primary mb-3 py-0">
                <div className = "container">
                    <a href="/" className = "navbar-brand">AlloCine</a>
                    {(props.user && <h5>{props.user.name} - {props.user.email}</h5>)}
                    <ul className = "navbar-nav d-inline-block ">
                        <li className = "nav-item d-inline-block mr-4">
                        <Link to="/movie" className = "nav-link">Movie</Link>
                        </li>
                        <li className = "nav-item d-inline-block mr-4">
                        <Link to="/serie" className = "nav-link">Series</Link>
                        </li>
                        <li className = "nav-item d-inline-block mr-4">
                        <Link to="/anime" className = "nav-link">Anime</Link>
                        </li>
                        <li className = "nav-item d-inline-block mr-4">
                        <Link to="/purchase" className = "nav-link">Purchase</Link>
                        </li>

                    </ul>

                </div>

            </nav>
        </div>
    )
}
