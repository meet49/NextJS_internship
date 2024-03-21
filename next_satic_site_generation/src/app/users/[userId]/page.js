import getUser from "../../../../services/getUser"
export default async function page(props) {
    const getUserList = await getUser()
    const currentId = props.params.userId
    const userData = getUserList[currentId-1]
    console.log(getUserList[currentId-1])
  return (
    <div>
      <h1>User List</h1>
      <br></br>
      <h4><b>Id :</b> {userData.id}</h4>
      <h4><b>Name :</b> {userData.name}</h4>
      <h4><b>Website : </b>{userData.website}</h4>
    </div>
  )
}

export async function generateStaticParams(){
    const getUserList = await getUser()
    return getUserList.map(user=>{
        userId: user.id.toString()
    })

}
