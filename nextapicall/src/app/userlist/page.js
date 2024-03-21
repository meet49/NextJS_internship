async function userlist() {
    let data = await fetch("https://jsonplaceholder.typicode.com/comments")
    data = await data.json()
    return data
}
export default async function page() {
    let users = await userlist()
  return (
    <div>
      {
        users.map((item)=>(
            <h1>FirstName : {item.body}</h1>
        ))
      }
    </div>
  )
}
