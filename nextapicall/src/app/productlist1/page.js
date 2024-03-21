import Product from "./product"

async function productlist() {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    return data.products

}

export default async function page() {
    let products = await productlist()
    console.log(products)
    return (
        <div>{  
            products.map((items)=>{
                return(
                    <div className=" flex gap-3 p-2">
                    <h4><b className=" text-purple-950">Name:</b> {items.title}</h4>
                    <Product price={items.price}/>
                    </div>
                )
            })
        }
        </div>
    )
}
