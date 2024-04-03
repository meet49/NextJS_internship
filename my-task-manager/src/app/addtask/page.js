"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add() {
    const [task, setTask] = useState("")
    const router = useRouter()

    const handleSubmit = async () => {
        const res = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            body: JSON.stringify({ task })
        })
        const result = await res.json()
        if (result) {
            toast.success("task Add Successfully..")
            router.push("/managetask")
        }
        else {
            toast.error("somthing wrong..")
        }
    }



    return (
        <div className=" mt-24 flex  flex-col justify-center items-center ">
            <div className="title text-center font-black text-5xl font-serif">Add Tsk</div>
            <div className="content flex  flex-col justify-center items-center">
                <div className="user-details">
                    <div className="input-box mt-5 ">
                        <span className="details font-medium text-2xl">Task Name</span>
                        <input type="text" placeholder="Enter The Task Name" className=" ml-5 border-black border-2 rounded-lg text-center" value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>
                </div>
                <div className="button">
                    <button className="  font-bold border-2 border-solid  bg-purple-500 mt-6 w-[150px] rounded-lg h-[50px]" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            <ToastContainer />

        </div>

    )
}

export default Add
