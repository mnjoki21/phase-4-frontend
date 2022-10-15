import React, { useState } from 'react'


function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errors, setErrors ] = useState('')

    const url = 'http://localhost:3000/login'
    
    function handleSubmit(e) {
        e.preventDefault()

    }
  return (
    <div></div>
  )
}

export default Login