"use client"
import { useEffect, useState } from "react"

export default function page() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            let res = await fetch("https://dummyjson.com/products")
            let data = await res.json();
            // console.log(data)

            setProduct(data.products)
            // console.log(data.products.title)

        }
        fetchdata()

        // (async () => {
        //     let res = await fetch("https://dummyjson.com/products")
        //     let data = await res.json();
        //     const x = data.products
        //     let obj = [];
        //     for (const key in x) {
        //        obj.push(x[key])
        //     }

        //     setProduct(obj)

        // }
        // )()
    }, [])
    console.log(product)
    return (
        <div>
            <h1>productlist</h1>
            {
                product.map((item) => (
                    <div key={item.id}>
                        <h3><b>Name :</b> {item.title}</h3>
                        <h5><b>Price :</b> {item.price} $</h5>
                        <p><b>Description :</b> {item.description}</p>
                        <div className=" flex justify-start gap-2">
                            {
                                item.images.map((i) => (
                                    <img src={i} className=" h-52 w-52 " key={i} />
                                ))
                                // <img src={item.images[0]} className=" h-52 w-52 "/>
                            }
                        </div>
                        <br />
                        <hr />
                        <br />
                    </div>
                ))
            }


        </div>
    )


}

