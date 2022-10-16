import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({onLogin}) {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errors, setErrors ] = useState('') 
    const navigate =useNavigate()
    
    const url = "http://localhost:3000/login"

    function handleSubmit(e) {
        e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password 
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
                navigate('/')
                
            } else {
                r.json() .then((err) => setErrors(err.errors))
            }
        })
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://images.unsplash.com/photo-1620860421940-11d849067893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80"
          alt="Workflow"
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit}
            className="mb-0 space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                //   id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                //   id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-yellow flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
