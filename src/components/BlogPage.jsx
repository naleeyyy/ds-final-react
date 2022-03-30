import AnimatedPage from "./AnimatedPage"
import { blogPages } from "../data"
import { useParams } from "react-router-dom"

const BlogPage = (props) => {
    
    const params = useParams()
    const blogPage = blogPages.find((el) => el.id == params.id)
    console.log(blogPage)

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