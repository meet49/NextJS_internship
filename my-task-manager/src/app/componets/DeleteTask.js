"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'

 function DeleteTask(props) {
    const router = useRouter()
    const handleDelete = async()=>{
    console.log(props.id)
        await fetch("http://localhost:3000/api/tasks/" + props.id,{
            method:"DELETE",
        })
        router.push("/managetask")
    }
   
  return (
    <div>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default DeleteTask
