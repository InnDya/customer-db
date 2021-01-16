import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CustomerCreatePage() {
    const [formData, setFormData] = useState({});
    const history = useHistory();

    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function renderInput(name, label, type) {
        return (
            <div>
                <label className="h4 text-muted">{label}</label>
                <input className="form-control mb-4"
                    type={type || "text"}
                    name={name}
                    onChange={handleOnChange}
                />
            </div>
        )
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        const url = "https://frebi.willandskill.eu/api/v1/customers/";
        const token = localStorage.getItem("token");
        fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                history.push('/home')
            })
    }

    return (
        <div>
            <h1 className="mt-5 mb-5 text-center">Create Customer</h1>
            <form className="form-group" onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("reference", "Reference")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("website", "Website", "url")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                <button className="btn btn-secondary mt-3 mb-5" type="submit">Create Customer</button>
            </form>
        </div>
    )
}
