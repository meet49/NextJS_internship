"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function page({ params }) {
    let id = params.userid
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        let data = await fetch("http://localhost:3000/api/users/" + id)
        data = await data.json();
        setName(data.result.name);
        setAge(data.result.age)
        setEmail(data.result.email)
    }

    const updateUser = async () => {
        let result = await fetch("http://localhost:3000/api/users/" + id, {
            method: "PUT",
            body: JSON.stringify({ name, age, email })
        });

        result = await result.json()
        if (result.success) {
            alert("update data")
        } else {
            alert("error")
        }
        console.log(result)
    }
    return (
        <div>
            <h1>Update User Data</h1>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={updateUser}>Add User</button>
            <br/>
            <br/>
            <Link href='/users'> got to the users page</Link>

        </div>
    )
}
