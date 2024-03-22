import Link from "next/link"

const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products")
    const data = await res.json()
    return data.result
}
export default async function Page() {
    const products = await getProducts()
    console.log(products)
    return (
        <div>
            <h1 className=" text-center font-bold text-5xl m-6">Products List</h1>
            <table className=" table table-fixed w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <td className="py-3 px-6 font-bold text-2xl">Name</td>
                        <td className="py-3 px-6 font-bold text-2xl">Price</td>
                        <td className="py-3 px-6 font-bold text-2xl">Color</td>
                        <td className="py-3 px-6 font-bold text-2xl">Company</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => (
                            <tr key={item.id} className="bg-white border-b">
                                <td className="py-4 px-6">{item.name}</td>
                                <td className="py-4 px-6">{item.price}</td>
                                <td className="py-4 px-6">{item.color}</td>
                                <td className="py-4 px-6">{item.company}</td>
                                <td className="py-4 px-6"><Link href={"products/"+item._id}>Edit</Link></td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
