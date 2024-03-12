import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "./usersSlice"

export default function AllUser() {
    const[userName, setUserName]=useState()
    const dispatch = useDispatch()

    function handelSend() {
        dispatch(addUser(userName))
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
            <button onClick={handelSend}> Add UserName</button>
        </div>
    )
}