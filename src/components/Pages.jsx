import Loading from "./Loading"
import { useState, useEffect, useContext } from "react"
import Card from "./Card"
import $ from 'jquery'
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"

const Pages = () => {
    
    const [pages, setPages] = useState([])
    const [loading, setLoading] = useState(true)
    const {authenticated} = useContext(AuthContext)
    const navigate = useNavigate()

    const buttonStyle = {
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        height: '100%',
        marginLeft: '0.25rem',
    }

    useEffect(() => {
        fetch("http://localhost:8000/getPages.php")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data => {
                setPages(data)
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    const handleDelete = (e) => {
        e.preventDefault()
        const form = $(e.target)
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                console.log(data)
                window.location.reload(false)
            }
        })
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    if (!loading) {
        return (
            <div 
                style={{
                width: "90%",
                alignItems: "center",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -10%)"
            }}
            >
                {authenticated && <Link to='/add' className="button" style={{marignBottom: "2rem"}}>Add page</Link>}
                {pages.map(({title, text, ID}) => {
                    return <Card 
                        alignment='left' 
                        title={title}
                        text={text}
                        buttonText='Visit'
                        url={`/blogPage/${ID}`}
                        style={{
                            marginBottom: "2rem",
                        }}
                        key={ID}
                    >
                        {authenticated && <><form action="http://localhost:8000/delete.php" method="POST" onSubmit={(e) => handleDelete(e)}>
                            <input type="hidden" name="delete" value={ID}/>
                            <button type="submit" className="button" style={buttonStyle}>Delete</button>
                        </form>
                        <form action="" onSubmit={() => handleEdit(ID)}>
                            <button type="submit" className="button" style={buttonStyle}>Edit</button>
                        </form></>}
                    </Card>
                })}
            </div>
        )
    }
    else {
        return (
            <Loading />
        )
    }
    
}

export default Pages