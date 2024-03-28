"use client"

import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function DeleteProduct(props){
    const router = useRouter()
    const deleteRecord = async () =>{
        let response = await fetch('http://localhost:3000/api/products/'+props.id,{
            method:"DELETE"
        })
        response = await response.json()
        if(response.success){
            toast.success("Product Deleted Successfully..")
            router.push("/products")
        }
    }
    return(
        <>
        
        <button onClick={deleteRecord}>Delete</button>
        <ToastContainer /> 
        </>

    )
}