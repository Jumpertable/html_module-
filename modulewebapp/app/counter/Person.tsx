'use client'

import { useState } from "react"

export default function Person() {

    const [person, setPerson] = useState({
        name: "",
        age: "",
        email: "",
        salary: "",
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {   
        
        const { name, value } = e.target 


        setPerson({
            ...person, 
            [name]: value  
        })
    }   
  
    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
            <div className="text-black bg-red-200 p-2 rounded-md mb-2">
                <b>Person:</b> {person.name}
            </div>
            <div className="text-black bg-blue-200 p-2 rounded-md mb-2">
                <b>Age:</b> {person.age}
            </div>
            <div className="text-black bg-green-200 p-2 rounded-md mb-2">
                <b>Email:</b> {person.email}
            </div>
            <div className="text-black bg-yellow-200 p-2 rounded-md mb-2">
                <b>Salary:</b> {person.salary}
            </div>
            <div> 
                <label
                    htmlFor="name">Name</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="text"
                    name="name"
                    value={person.name}
                    onChange={handleChange}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Age</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="number"
                    name="age"
                    value={person.age}
                    onChange={handleChange}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Email</label>
                <input
                    className="border p-2 w-full rounded-md"
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Salary</label>
                <input
                    className="border p-2 w-full rounded-md"
                    type="number"
                    name="salary"
                    value={person.salary}
                    onChange={handleChange}
                />
            </div>

        </div>
    )
}