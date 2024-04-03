"use client"
import React from 'react'
import DeleteTask from '../componets/DeleteTask'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const getTask = async () => {
    const res = await fetch("http://localhost:3000/api/tasks")
    const data = await res.json()
    return data.result
}

async function Manage() {
    const tasks = await getTask()



    const handleCheck = async (id) => {
        await fetch("http://localhost:3000/api/tasks/" + id, {
            method: "PATCH",
            body: JSON.stringify({ check: true })
        });

    }


    return (
        <div className="mt-20">
            <div>
                <h1 className="bg-yellow-600">Pending Task</h1>
                <table className=" table table-fixed w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <td className="py-3 px-6 font-bold text-2xl">Task Name</td>
                            <td className="py-3 px-6 font-bold text-2xl">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((item) => (
                                !item.check && 
                                <tr key={item.id} className="bg-white border-b">
                                    <td className="py-4 px-6">{item.task}</td>
                                    <td className="py-4 px-6"><Link href={"managetask/" + item._id}>Edit</Link></td>
                                    <td><DeleteTask id={item._id} /></td>
                                    <td><input type="checkbox" onClick={() => handleCheck(item._id)}></input></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <h2 className="bg-green-600">Complted Task</h2>
                <table className=" table table-fixed w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <td className="py-3 px-6 font-bold text-2xl">Task Name</td>
                            <td className="py-3 px-6 font-bold text-2xl">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((item) => (
                                item.check && 
                                <tr key={item._id} className="bg-white border-b">
                                    <td className="py-4 px-6">{item.task}</td>
                                    <td><DeleteTask id={item._id} /></td>   
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Manage
