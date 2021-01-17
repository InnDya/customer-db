import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyled } from './HeaderStyled';

export default function Header(props) {
    const userInfo = props.userInfo;
    
    return (
        <HeaderStyled className="navbar">
            <div className="navbar-home">
                <Link className="navbar-brand" to="/home">
                    <h1>Customers DB</h1>
                </Link>
            </div>
            <div className="user-info">
                <ul>
                    <li>{userInfo.firstName} {userInfo.lastName}</li>
                    <li>{userInfo.email}</li>
                </ul>
            </div>
        </HeaderStyled>
    )
}
