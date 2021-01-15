import React from 'react';
import { Link } from 'react-router-dom'; 

export default function CustomerListItem({customerData}) {
    return (
        <div className="row">
            <h2>
                <Link className="text-dark" to={`/home/${customerData.id}`}>
                    {customerData.name}
                </Link>
            </h2>
        </div>
    )
}
