import Loading from "./Loading"
import { useState, useEffect } from "react"
import Card from "./Card"

const Pages = () => {
    const [pages, setPages] = useState([])
    const [loading, setLoading] = useState(true)

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
    
    if (!loading) {
        return (
            <div 
                style={{
                width: "90%",
                alignItems: "center",
            }}
                className="center"
            >
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
                    />
                })}
            </div>
            // <Card title={pages[0].title} text={pages[0].text} buttonText='Visit' url={`/blogPage/${pages[0].ID}`} />
        )
    }
    else {
        return (
            <Loading />
        )
    }
    
}

export default Pages