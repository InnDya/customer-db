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
        <div>
            {!me && <p></p>}
            {me && <p>{me.email} {me.firstName} {me.lastName}</p>}
        </div>
    )
}
