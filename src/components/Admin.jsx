import { useState } from "react"
import $ from 'jquery'

const Admin = () => {
    
    const [authenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    
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
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const form = $(e.target)
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                console.log(data)
            }
        })
    }

    if (!(authenticated == "true")) {
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
    else {
        return (
            <form
                action="http://localhost:8000/addPage.php"
                onSubmit={handleAdd}
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
                <h2>Add new Page</h2>
                <label htmlFor="Title">Title:</label>
                <input type="text" name="title" id="title" style={{width: "100%"}} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="Text">Text:</label>
                <textarea type="text" name="text" id="text" style={{width: "100%"}} rows={10} onChange={(e) => setText(e.target.value)} /> <br />
                <button type="submit" className="button" style={{
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}>Add Page</button>
            </form>
        )
    }
}

export default Admin