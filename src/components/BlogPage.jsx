import AnimatedPage from "./AnimatedPage"
import Loading from './Loading'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import $ from 'jquery'

const BlogPage = (props) => {
    
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    
    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "http://localhost:8000/getPage.php",
            data: `ID=${params.id}`,
            success(data) {
                let page = JSON.parse(data)[0]
                console.log(data)
                setTitle(page.title)
                setText(page.text)
                setLoading(false)
            }
        })
    }, [params.id])

    if (!loading) {
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
                        <h1 className="gradient-text">{title}</h1>
                        <p>{text}</p>
                    </div>
                </main>
            </AnimatedPage>
        )
    }
    else {
        return <Loading />
    }
}

export default BlogPage