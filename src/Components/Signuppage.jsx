import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";

const Signuppage = () => {
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
        fetch("http://localhost:8888/auth/signup", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => navigate("/login"))
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Signuppage</h1>
        <div>
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="username" name="username" onChange={handleChange}/>
            <input type="text" placeholder="email" name="email" onChange={handleChange}/>
            <input type="text" placeholder="password" name="password" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Sign up</button>
        </div>
    </div>
}

export {Signuppage}