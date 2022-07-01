import { useState, useContext } from "react"
import AnimatedPage from "./AnimatedPage"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import $ from 'jquery'

const Add = () => {
    
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const {authenticated} = useContext(AuthContext)

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

    if (authenticated) {
        return (
            <AnimatedPage>
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
                    <input type="text" name="title" id="title" value={title} style={{width: "100%"}} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="Text">Text:</label>
                    <textarea type="text" name="text" id="text" value={text} style={{width: "100%"}} rows={10} onChange={(e) => setText(e.target.value)} /> <br />
                    <button type="submit" className="button" style={{
                        outline: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}>Add Page</button>
                </form>
            </AnimatedPage>
        )
    }
    else {
        return (
            <Navigate to={'/login'}/>
        )
    }
}

export default Add