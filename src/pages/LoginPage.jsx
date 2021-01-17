import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginStyled } from '../components/LoginStyled';

export default function LoginPage(props) {
    const updateUserInfo = props.updateUserInfo;
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        // email: "Inna.Dyachkova@yh.nackademin.se",
        // password: "javascriptoramverk"
    });
    const history = useHistory();
    console.log(history);

    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        const url = "https://frebi.willandskill.eu/api-token-auth/";
        const payload = {
            email: formData.email,
            password: formData.password
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(data => {
                console.log(data)
                console.log(data.token)
                localStorage.setItem("token", data.token)
                fetch("https://frebi.willandskill.eu/api/v1/me", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${data.token}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("userInfo", JSON.stringify(data))
                        updateUserInfo();
                        history.push('/home')
                    })
            })
            .catch(error => {
                console.log(error);
                setError({error: error});
            })
}

    return (
        <LoginStyled className="container col-sm-12 col-md-6">
            {error ? "Something went wrong" : ""}
            <form className="form-signin" onSubmit={handleOnSubmit} >
                <h1 className="h3 mb-3 mt-5 fw-normal">Please Log In</h1>
                <label className="visually-hidden">Email</label>
                <input className="form-control mb-3" name="email" onChange={handleOnChange} />
                <label className="visually-hidden">Password</label>
                <input className="form-control mb-3" name="password" onChange={handleOnChange} />
                <button className="w-100 btn btn-lg btn-secondary mb-5 mt-3" type="submit">Log In</button>
            </form>
        </LoginStyled>
    )
}
