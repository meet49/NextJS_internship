import Link from "next/link"

async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await res.json()
    return data.result
}

export default async function Page({ params }) {
    const user = await getUser(params.userid)
    console.log(user)
    return (
        <div>
            <h1>
                User List
            </h1>
            <h2>Id : {user.id}</h2>
            <h2>Name : {user.name}</h2>
            <h2>Age : {user.age}</h2>
            <h2>Email : {user.email}</h2>
            <br/>
            <br/>
            <Link href='/users'> got to the users page</Link>
        </div>
    )
}