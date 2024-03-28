"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook conditionally
import "../../style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

export default function Page(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompnay] = useState("");
    const router = useRouter(); // Initialize useRouter hook

    useEffect(() => {
        console.log(props.params.editproduct);
        getProductDetail();
    }, []);

    const getProductDetail = async () => {
        let productId = props.params.editproduct;
        let productData = await fetch("http://localhost:3000/api/products/" + productId);
        productData = await productData.json();
        if (productData.success) {
            let result = productData.result;
            setName(result.name);
            setPrice(result.price);
            setColor(result.color);
            setCompnay(result.company);
        }
        console.log(productData);
    };

    const updateProduct = async () => {
        let productId = props.params.editproduct;
        let data = await fetch("http://localhost:3000/api/products/" + productId, {
            method: "PATCH",
            body: JSON.stringify({ name, price, color, company })
        });
        data = await data.json();
        if (data.result) {
            toast.success("Product Updated Successfully..");
            setTimeout(()=>{
                router.push('/products'); 
            },1000)
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
                            <input type="text" placeholder="Enter the Product name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Price</span>
                            <input type="text" placeholder="Enter the Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <span className="detail">Color</span>
                            <input type="text" placeholder="Enter Product Color" value={color} onChange={(e) => setColor(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Company</span>
                            <input type="text" placeholder="Enter the Company Name" value={company} onChange={(e) => setCompnay(e.target.value)} required />
                        </div>
                    </div>
                    <div className="button">
                        <button className="text-black border-2 border-solid border-purple-300 bg-purple-500 mt-6 w-20 rounded-lg" onClick={updateProduct}>Update</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
