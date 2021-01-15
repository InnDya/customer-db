import React, { useState, useEffect } from 'react';

export default function LoggedInUser() {
    const [me, setMe] = useState({});

    useEffect(() => {
        getMe()
    }, [])

    function getMe() {
        const url = "https://frebi.willandskill.eu/api/v1/me";
        const token = localStorage.getItem("token");
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setMe(data))
    }

    return (
        <div className="btn btn-outline-secondary mt-5 mb-5">
            {!me && <p></p>}
            {me && <p>User: {me.email} {me.firstName} {me.lastName}</p>}
        </div>
    )
}
