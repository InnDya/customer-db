import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInUser from './LoggedInUser';

import {HeaderStyled} from './HeaderStyled';

export default function Header() {
    return (
        <HeaderStyled className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/home">
                <h1>Customers DB</h1>
            </Link>
            <LoggedInUser/>
        </HeaderStyled>
    )
}
