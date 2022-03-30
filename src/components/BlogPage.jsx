import AnimatedPage from "./AnimatedPage"

const BlogPage = (props) => {
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
                    <h1 className="gradient-text">{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </main>
        </AnimatedPage>
    )
}

export default BlogPage