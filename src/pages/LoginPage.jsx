import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "Inna.Dyachkova@yh.nackademin.se",
        password: "javascriptoramverk"
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
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data.token)
                localStorage.setItem("token", data.token)
                history.push('/home')
            })
    }

    return (
        <div className="container">
            <form onSubmit={handleOnSubmit} >
                <div className="form-group">
                    <label className="h4 text-muted">Email</label>
                    <input className="form-control" name="email" value={formData.email} onChange={handleOnChange} />
                </div>
                <div className="form-group">
                    <label className="h4 text-muted">Password</label>
                    <input className="form-control" name="password" value={formData.password} onChange={handleOnChange} />
                </div>
                <button className="btn btn-secondary mt-3" type="submit">Log In</button>
            </form>
        </div>
    )
}
