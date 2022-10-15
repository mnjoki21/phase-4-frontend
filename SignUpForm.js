import React, { useState } from 'react'


function SignUpForm() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ errors, setErrors ] = useState([])
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch
    }
  return (
    <div></div>
  )
}

export default SignUpForm