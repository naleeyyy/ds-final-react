import { useEffect, useState } from "react"
import $ from 'jquery'
import AnimatedPage from "./AnimatedPage"
import Loading from "./Loading"
import { useNavigate, useParams } from "react-router-dom"

const Edit = () => {
    
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [id, setId] = useState(null)
    
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "http://localhost:8000/getPage.php",
            data: `ID=${params.id}`,
            success(data) {
                let page = JSON.parse(data)[0]
                setTitle(page.title)
                setText(page.text)
                setId(page.ID)
                setLoading(false)
            }
        })
    }, [params.id])

    const handleSave = (e) => {
        e.preventDefault()
        const form = $(e.target)
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                console.log(data)
                navigate('/pages')
            }
        })
    }


    if (!loading) {

        return (
            <AnimatedPage>
                    <form
                        action="http://localhost:8000/edit.php"
                        onSubmit={(e) => handleSave(e)}
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
                        <input type="hidden" name="ID" value={id} />
                        <button type="submit" className="button" style={{
                            outline: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}>Save Edit</button>

                    </form>
                </AnimatedPage>
        )
    }
    else {
        return <Loading />
    }
}

export default Edit