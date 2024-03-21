import Link from "next/link"
import getUser from "../../../services/getUser"
// import { redirect } from "next/navigation"

export default async function page() {
  // redirect("/")
    const getUserList = await getUser()
    console.log(getUserList)
  return (
    <div>
      <h1>user List</h1>
      {
        getUserList.map((user)=>(
            <h2 key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </h2>
        ))
      }
    </div>
  )
}
