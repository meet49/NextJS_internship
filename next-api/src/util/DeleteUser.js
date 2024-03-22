"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DeleteUser(props) {
    const userId = props.id
    const deleteUser = async () => {
        let result = await fetch("http://localhost:3000/api/users/" + userId, {
            method: "delete"
        })
        result = await result.json()
        if (result.success) {
            toast.success("Successfully Deleted")
        }
        else {
            toast.error("Somthing error")
        }
    }
    return (
        <div>
            <button onClick={deleteUser}>DELETE</button>
            <ToastContainer />

        </div>
    )
}
