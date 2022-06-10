import { useState } from "react"
import $ from 'jquery'

const LoginForm = (props) => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [authenticated, setAuthenticated] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = $(e.target)
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setAuthenticated(data)
                console.log(data)
            }
        })
        props.passData(authenticated)
    }

    return (
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
            <input type="text" name="user" id="user" style={{width: "100%"}} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="pass">Password:</label>
            <input type="password" name="pass" id="pass" style={{width: "100%"}} onChange={(e) => setPassword(e.target.value)}/> <br />
            <button type="submit" className="button" style={{
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
            }}>Log In</button>
        </form>
    )
}

export default LoginForm