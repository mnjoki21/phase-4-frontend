import React, { useState } from 'react'
import SubscriptionList from './SubscriptionList';

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
      <div>
      <section className="max-w-4xl p-6  mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add subscription here
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="amount"
              >
                Enter Amount
              </label>
                        <input
                            name='amount'
                            value={formData.amount}
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-navy-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="startDate"
              >
                Enter Start Date
              </label>
                        <input
                            name='start_date'
                            value={formData.start_date}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-navy-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="billingCycle"
              >
                Enter Billing Cycle
              </label>
                        <input
                            name="billing_cycle"
                            value={ formData.billing_cycle }
                            onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="px-8 py-2.5 leading-5 text-white transition-colors  bg-yellow duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit Subscription
            </button>
          </div>
        </form>
      </section>
      <div>
        <SubscriptionList />
      </div>
      </div>
    
    );
}

export default Subscriptions