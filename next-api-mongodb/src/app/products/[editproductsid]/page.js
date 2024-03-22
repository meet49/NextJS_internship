"use client"
import { useState,useEffect } from "react"
import "../../style.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page(props) {
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[color,setColor]=useState("")
    const[company,setCompnay]=useState("")

    useEffect(()=>{
        getProductDetail()
    },[])

    const getProductDetail = async () => {
        console.log(props);
        let productId = props.params.editproductsid;
    
        try {
            let response = await fetch("http://localhost:3000/api/products/" + productId);
        
            let productData = await response.json();
            if (productData.success) {
                let result = productData.result;
                setName(result.name);
                setPrice(result.price);
                setColor(result.color);
                setCompnay(result.company);
            } 
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="title">Update Product</div>
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
                        <button className=" text-black border-2 border-solid border-purple-300 bg-purple-500 mt-6 w-20 rounded-lg" onClick={getProductDetail}>Submit</button>
                    </div>

                </div>
            </div>
            <ToastContainer /> 
        </div>
    
    )
}
