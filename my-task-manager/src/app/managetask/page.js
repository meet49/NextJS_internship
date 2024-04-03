"use client"
import React from 'react'
import DeleteTask from '../componets/DeleteTask'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
        <div className="mt-16">
            <div>
                <h1 className="bg-yellow-600 h-16 text-center p-2 font-bold text-4xl ">Pending Task</h1>
                <table className=" table w-screen">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <td className="py-3 px-6 font-bold text-2xl text-center">Task Name</td>
                            <td className="py-3 px-12 font-bold text-2xl text-center" colspan="3">Action</td>
                        </tr>
                    </thead>
                    <tbody className="text-lg font-medium">
                        {
                            tasks.map((item) => (
                                !item.check &&
                                <tr key={item.id} className="bg-white border-b  bg-gradient-to-r from-cyan-500 to-blue-500" >
                                    <td className="py-4 px-6 text-center">{item.task}</td>
                                    <td className="py-4 px-4"><Link href={"managetask/" + item._id}>Edit</Link></td>
                                    <td className="py-4 "><DeleteTask id={item._id} /></td>
                                    <td className="py-4 "><input type="checkbox" onClick={() => handleCheck(item._id)}></input></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <h2 className="bg-green-600  h-16 text-center p-2 font-bold text-4xl ">Complted Task</h2>
                <table className=" table table-fixed w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <td className="py-3 px-6 font-bold text-2xl text-center">Task Name</td>
                            <td className="py-3 px-6 font-bold text-2xl text-center">Action</td>
                        </tr>
                    </thead>
                    <tbody className="text-lg  font-medium">
                        {
                            tasks.map((item) => (
                                item.check &&
                                <tr key={item._id} className="bg-white border-b  bg-gradient-to-r from-cyan-500 to-blue-500">
                                    <td className="py-4 px-6 text-center">{item.task}</td>
                                    <td className="py-4 px-6 text-center"><DeleteTask id={item._id} /></td>
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
