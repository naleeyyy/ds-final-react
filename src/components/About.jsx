import AnimatedPage from "./AnimatedPage"

const About = (props) => {
    return (
        <AnimatedPage>
            <main style={{textAlign: 'center'}}>
                <h1>About</h1>
                <img src={props.img} alt="" />
                <p></p>
                <p></p>
            </main>
        </AnimatedPage>
    )
}

export default About