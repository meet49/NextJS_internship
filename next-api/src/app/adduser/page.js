"use client"
import Link from "next/link"
import { useState } from "react"

export default function page() {
    const[name,setName] = useState("")
    const[age,setAge]= useState("")
    const[email,setEmail]=useState("")

    const addUser = async () =>{
        let response = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });

         response = await response.json()
        if(response.success){
            alert("add data")
        }else{
            alert("error")
        }
        console.log(response)
    }
  return (
    <div>
      <h1>Add User Data</h1>
      <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="Enter Your Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
      <input type="text" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <button onClick={addUser}>Add User</button>
      <br/>
      <br/>
      <Link href='/users'> go to the users page</Link>
    </div>
  )
}
