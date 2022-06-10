import AnimatedPage from "./AnimatedPage"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BlogPage = (props) => {
    
    const params = useParams()
    const [blogPage, setBlogPage] = useState({})

    useEffect(() => {
        fetch("http://localhost:8000/getPages.php")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const page = data[params.id - 1]
                setBlogPage(page)
            })
    }, [])

    return (
        <AnimatedPage>
            <main style={{
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr',
                backdropFilter: 'drop-shadow(5px)',
                borderRadius: '0.5rem',
            }}>
                <div className="flex flex-center" style={{
                    textAlign: 'center'
                }}>
                    <h1 className="gradient-text">{blogPage.title}</h1>
                    <p>{blogPage.text}</p>
                </div>
            </main>
        </AnimatedPage>
    )
}

export default BlogPage