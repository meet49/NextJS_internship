"use client"

export default function Product(props) {
    console.log(props)
  return (
    <div>
      <button onClick={()=>alert(props.price)} className=" bg-red-300 w-28 rounded-md">check price</button>
    </div>
  )
}

