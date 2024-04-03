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
            <div className="mt-24 flex  flex-col justify-center items-center  ">
                <div className="title text-center font-black text-5xl font-serif">Edit Tsk</div>
                <div className="content flex  flex-col justify-center items-center">
                    <div className="user-details">
                        <div className="input-box mt-5">
                            <span className="details font-medium text-2xl">Task Name</span>
                            <input type="text" placeholder="Enter The Task Name" className=" ml-5 border-black border-2 rounded-lg text-center" defaultValue={task} onChange={(e) => setTask(e.target.value)} />
                        </div>
                    </div>
                    <div className="button">
                        <button className=" font-bold border-2 border-solid  bg-purple-500 mt-6 w-[150px] rounded-lg h-[50px]" onClick={updateTask}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
