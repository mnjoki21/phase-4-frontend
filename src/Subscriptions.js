import React, { useState } from 'react'

function Subscriptions() {
    const [ formData, setFormData ] = useState({
        name: '',
        amount: '',
        start_date: '',
        billing_cycle: ''
    })
    const url = "http://localhost:3000/subscriptions"

    function handleSubmit(e) {
        e.preventDefault();
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        setFormData({
            name: '',
            amount: '',
            start_date: '',
            billing_cycle:''
        })
        console.log(formData)
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
     <div></div> 
    )
}

export default Subscriptions