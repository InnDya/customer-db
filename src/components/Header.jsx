import React from 'react';
import { Link } from 'react-router-dom';

import {HeaderStyled} from './HeaderStyled';

export default function Header() {
    return (
        <HeaderStyled className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/home">
                <h1>Customers-db</h1>
            </Link>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"></div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Customers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home/create">Create Customer</Link>
                </li>
            </ul>
        </HeaderStyled>
    )
}
