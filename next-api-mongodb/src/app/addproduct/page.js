"use client"
import { useState } from "react"
import "../style.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function page() {
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[color,setColor]=useState("")
    const[company,setCompnay]=useState("")
    const router = useRouter()

    const addData = async () =>{
        const res = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,company})
        })
        const result = await res.json()
        if(result.success){
            toast.success("Product Add Successfully..")
            setTimeout(()=>{
                router.push('/products'); 
            },1000)
        }
        else{
            toast.error("somthing wrong..")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="title">Add Product</div>
                <div className="content">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Product Name</span>
                            <input type="text" placeholder="Enter the Product name" value={name} onChange={(e)=>setName(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Price</span>
                            <input type="text" placeholder="Enter the Price" value={price} onChange={(e)=>setPrice(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <span className="detail">Color</span>
                            <input type="text" placeholder="Enter Product Color" value={color} onChange={(e)=>setColor(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Company</span>
                            <input type="text" placeholder="Enter the Company Name" value={company} onChange={(e)=>setCompnay(e.target.value)} required />
                        </div>
                    </div>
                    <div className="button">
                        <button className=" text-black border-2 border-solid border-purple-300 bg-purple-500 mt-6 w-20 rounded-lg" onClick={addData}>Submit</button>
                    </div>

                </div>
            </div>
            <ToastContainer /> 
        </div>
    
    )
}
