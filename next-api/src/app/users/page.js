import DeleteUser from "@/util/DeleteUser"
import Link from "next/link"

async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users")
    const data = await res.json()
    return data
}

export default async function Page() {
    const users = await getUsers()
    console.log(users)
    return (
        <div>
            <h1>
                User List
            </h1>
            {
                users.map((item) => (

                    <div>
                        <Link href={`users/${item.id}`}>{item.name}</Link>  {     }
                        <span><Link href={`users/${item.id}/update`}>Edit</Link></span>
                        <span><DeleteUser id={item.id}/></span>
                        <br/>
                        <br/>

                    </div>
                ))
            }
            <Link href='/'> got to the home page</Link>

        </div>
    )
}