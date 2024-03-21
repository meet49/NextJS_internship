import Link from "next/link"

const page = () => {
  return (
    <div>
      <Link href="/productlist">go to the product page</Link>
      <Link href="/productlist1">go to the product1 page</Link>
    </div>
  )
}

export default page