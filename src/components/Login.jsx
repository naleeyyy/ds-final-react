import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext"
import AnimatedPage from "./AnimatedPage"
import { Navigate, useNavigate } from "react-router-dom"
import $ from 'jquery'

const Login = () => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {authenticated, setAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = $(e.target)
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setAuthenticated(data === "true")
                localStorage.setItem('authenticated', data === "true")
                navigate('/pages')
            }
        })
    }

    if (authenticated) {
        return <Navigate to={'/pages'} />
    }
    else {
        return (
            <AnimatedPage>
                <form 
                    action="http://localhost:8000/login.php"
                    onSubmit={handleSubmit}
                    className="center flex"
                    style={{
                        flexDirection: "column",
                        boxShadow: '0px 0px 5px -1px white',
                        borderRadius: '1rem',
                        backdropFilter: "brightness(30%)",
                        fontSize: "20px",
                        padding: "10rem 5rem",
                    }}
                >
                    <label htmlFor="user">Username:</label>
                    <input type="text" name="user" id="user" value={username} style={{width: "100%"}} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="pass" id="pass" value={password} style={{width: "100%"}} onChange={(e) => setPassword(e.target.value)}/> <br />
                    <button type="submit" className="button" style={{
                        outline: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}>Log In</button>
                </form>
            </AnimatedPage>
        )
    }
    }

export default Login