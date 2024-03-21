import Link from "next/link"

const page = () => {
  return (
    <div>
      <Link href="/users">go to users page</Link>
      <br/>
      <br/>
      <br/> 
      <Link href="/adduser">Add User Data</Link>
    </div>
  )
}

export default page