"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const[name,setName]= useState("")
  const[email,setEmail]= useState("")
  const[mobile,setMobile]=useState("")
  const router = useRouter()

  const handleData = async (e) =>{
e.preventDefault()
    let res =  await fetch("http://localhost:3000/api/contact",{
      method:"POST",
      body:JSON.stringify({name,email,mobile})
    })

    const result = await res.json()
        if (result) {
            toast.success("task Add Successfully..")
            setTimeout(()=>{
              router.push("/")

            },1500)
        }
        else {
            toast.error("somthing wrong..")
        }
  }

  return (
    <div>
      <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
          <div class="bg-white shadow-md rounded-md p-6">

            <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h2>

            <form class="space-y-6">

              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                <div class="mt-1">
                  <input name="username" type="username" required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm text-black" 
                    value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1">
                  <input name="email" type="email-address" autocomplete="email-address" required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm text-black" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
              </div>

              <div>
                <label for="mobile number" class="block text-sm font-medium text-gray-700">Mobile No</label>
                <div class="mt-1">
                  <input name="mobile" type="text"  required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm text-black"  value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                </div>
              </div>

              <div>
                <button type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2" onClick={handleData}>Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  )
}

export default Contact
