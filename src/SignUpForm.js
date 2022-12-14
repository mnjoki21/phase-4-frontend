import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function SignUpForm( {onLogin} ) {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
  const [ errors, setErrors ] = useState([])
  
  const navigate = useNavigate()

    const url = "https://dashboard.heroku.com/apps/safe-mesa-15420/signup";
    
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
              navigate('/')
              alert("Sign up is successful")
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
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Already registered?
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign in
          </a>
        </p>
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
                  // id="email"
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
                  // id="password"
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password confirmation
              </label>
              <div className="mt-1">
                <input
                  // id="password"
                  name="passwordConfirmation"
                  type="passwordConfirmation"
                  autoComplete="current-password"
                  required
                  className=""
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-yellow flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm