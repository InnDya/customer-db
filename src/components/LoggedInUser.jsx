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
            {
                !me
                    ?
                    <ul></ul>
                    :
                    <ul>
                        <li>{me.firstName} {me.lastName}</li>
                        <li>{me.email}</li>
                    </ul>
            }
        </div>
    )
}
