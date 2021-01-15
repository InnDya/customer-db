import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/home/create">Create Customer</Link>
                </li>
            </ul>
        </div>
    )
}
