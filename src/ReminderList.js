import React from 'react'
import { useState, useEffect } from 'react'

function ReminderList() {
    
    const [ list, setList ] = useState([])

    const url = "https://dashboard.heroku.com/apps/safe-mesa-15420/reminders";


    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setList(data);
          });
        
    },[])

    function deleteList(id) {
        fetch(
          `https://dashboard.heroku.com/apps/safe-mesa-15420/reminders/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((r) => r.json())
          .then(() => {
            const goThru = list.filter((reminder) => reminder.id !== id);
            setList(goThru);
          });
    }

    return (
      <>
        <table class="table-auto">
          <thead>
            <tr>
              <th>Provider</th>
              <th>Category</th>
              <th>Subscription</th>
            </tr>
          </thead>
          <tbody>
            {list.map((l) => {
              return (
                <>
                  <tr key={list.id}>
                    <td>{l.provider}</td>
                    <td>{l.category}</td>
                    <td>{l.subscription}</td>
                  </tr>
                  <button
                    type="button"
                    onClick={() => {
                      deleteList(list.id);
                    }}
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Delete Reminder
                  </button>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
}

export default ReminderList