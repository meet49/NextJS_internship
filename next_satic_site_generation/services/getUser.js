
const getUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")  
      return res.json()
}

export default getUser
      