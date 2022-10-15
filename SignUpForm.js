import React, { useState } from 'react'


function SignUpForm( {onLogin} ) {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ errors, setErrors ] = useState([])

    const url = 'http://localhost:3000/signup'
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                passwordConfirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));  
            } else {
                r.json() .then((err) => setErrors(err.errors))
            }
        })
    }
  return (
    <div></div>
  )
}

export default SignUpForm