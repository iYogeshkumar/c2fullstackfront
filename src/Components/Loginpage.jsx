import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";

const Loginpage = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("http://localhost:8888/auth/login", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res._id)
            if(res.token){
                localStorage.setItem("userid", JSON.stringify(res._id))
                navigate("/notes")
            }
            else{
                console.log(res.message)
            }
        })
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Login page</h1> 
        <div>
            <input type="text" placeholder="username" name="username" onChange={handleChange}/>
            <input type="text" placeholder="password" name="password" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    </div>
}

export {Loginpage}