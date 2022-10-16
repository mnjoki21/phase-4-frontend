import React from 'react'
import { useState, useEffect } from 'react'

function ReminderList() {
    
    const [ list, setList ] = useState([])

    const url = 'http://localhost:3000/reminders'

    const getData = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setList(data)
            });
    };
    useEffect(() => {
        <ReminderList />
        getData()
    },[])

    function deleteList(id) {
        fetch(`http://localhost:3000/reminders/${id}`, {
            method: "DELETE"
        })
            .then((r) => r.json())
            .then(() => {
                const goThru = list.filter((reminder) => reminder.id !== id)
                setList(goThru)

        })
    }

    <ReminderList />


    


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
        {list &&
          list.map((l) => (
            <><tr key={ list.id }>
                  <td>{ l.provider }</td>
                  <td>{ l.category }</td>
                  <td>{ l.subscription}</td>
              </tr>
                  <button type="button"
                      onClick={ () => {
                          deleteList(list.id)
                      }}
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Delete Subscription</button>
              
              </>

          ))}
      </tbody>
            </table>
            
            </>
  );
}

export default ReminderList