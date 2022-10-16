import React, { useState } from 'react'

function Reminders() {
  const [ formData, setFormData ] = useState({
    provider: '',
    category: '',
    subscription: ''
  })

  const url = "http://localhost:3000/reminders"

  function handleSubmit(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    setFormData({
      provider: '',
      category: '',
      subscription: ''
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
    <section className="max-w-4xl p-6  mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add Reminder here
      </h2>

      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200">Provider</label>
            <input
              name="provider"
              value={formData.provider}
              onChange={handleChange}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="category"
            >
              Enter Category
            </label>
            <input
              name="category"
              value={formData.category}
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
              Enter Subscription
            </label>
            <input
              name="subscription"
              value={formData.subscription}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-navy-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="px-8 py-2.5 leading-5 text-white transition-colors  bg-yellow duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Submit Reminder
          </button>
        </div>
      </form>
    </section>
  );
}

export default Reminders