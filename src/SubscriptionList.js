import React from 'react'
import {useState, useEffect } from "react"

function SubscriptionList() {
    
    const [ list, setList ] = useState([])

    const url = 'http://localhost:3000/subscriptions'

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setList(data);
            });
    }, [])

    function deleteList(id) {
        fetch(`http://localhost:3000/subscriptions/${id}`, {
            method: "DELETE"
        })
            .then((r) => r.json())
            .then(() => {
                const goThru = list.filter((subscription) => subscription.id !== id)
                setList(goThru)

            })
    }

    return (
      
        <>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>Provider</th>
                        <th>Amount</th>
                        <th>Start Date</th>
                        <th>Billing cycle</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((l) => {
                            return (
                                <><tr key={ list.id }>
                                    <td>{ l.name }</td>
                                    <td>{ l.amount }</td>
                                    <td>{ l.start_date }</td>
                                    <td>{ l.billing_cycle }</td>
                                </tr>
                                    <button type="button"
                                        onClick={ () => {
                                            deleteList(list.id)
                                        } }
                                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Delete Subscription</button>
              
                                </>
                            )
                        }) }
        
                </tbody>
            </table>
            
        </>
  
    )
}

export default SubscriptionList