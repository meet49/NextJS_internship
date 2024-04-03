"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState,useEffect} from 'react';


function page(props) {
    const [task, setTask] = useState("")
    const router = useRouter()

    const getProductDetail = async () => {
        let taskID = props.params.edittask;
        let taskData = await fetch("http://localhost:3000/api/tasks/" + taskID);
        taskData = await taskData.json();
        if(taskData){

            setTask(taskData.result.task)
        }
    };
   
    useEffect(() => {
        getProductDetail();
    }, []);

    const updateTask = async () => {
        let taskID = props.params.edittask;
        await fetch("http://localhost:3000/api/tasks/" + taskID, {
            method: "PATCH",
            body: JSON.stringify({ task })
        });
        router.push("/managetask")
    };
    return (
        <div>
            <div className="container mt-20 flex  flex-col justify-center items-center">
                <div className="title text-center font-black text-3xl font-serif">Edit Tsk</div>
                <div className="content flex  flex-col justify-center items-center">
                    <div className="user-details">
                        <div className="input-box mt-5">
                            <span className="details font-medium">Task Name</span>
                            <input type="text" placeholder="Enter The Task Name" className=" ml-5 border-black border-2 rounded-lg" defaultValue={task} onChange={(e) => setTask(e.target.value)} />
                        </div>
                    </div>
                    <div className="button">
                        <button className=" text-black border-2 border-solid border-purple-300 bg-purple-500 mt-6 w-20 rounded-lg" onClick={updateTask}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
