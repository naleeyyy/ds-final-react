import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import AnimatedPage from './AnimatedPage'
import Card from './Card'

const Main = () => {
    
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
    
    console.log(pages)

    if (!loading) {
        return (
            <AnimatedPage>
                    <main className="main" >
                        <div className="header flex-center text-left">
                            <h1 className="gradient-text">
                                <Typewriter options={{
                                        strings: ['string 1', 'string 2'],
                                        loop: true,
                                        autoStart: true,
                                        deleteSpeed: 100,
                                    }}
                                />
                            </h1>
                            <p className="gradient-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere sunt necessitatibus ullam placeat praesentium!</p>
                        </div>
                        <Card 
                            alignment='right' 
                            title={pages[pages.length - 1].title}
                            text={pages[pages.length - 1].text}
                            buttonText='Click me'
                            url={`/blogPage/${pages.length}`}
                        />
                        <Card 
                            alignment='left' 
                            title={pages[pages.length - 2].title}
                            text={pages[pages.length - 2].text}
                            buttonText='Click me'
                            url={`/blogPage/${pages.length - 1}`}
                        />
                        <Card 
                            alignment='right' 
                            title={pages[pages.length - 3].title}
                            text={pages[pages.length - 3].text}
                            buttonText='Click me'
                            url={`/blogPage/${pages.length - 2}`}
                        />
                    </main>
            </AnimatedPage>
        )
    }
    else {
        return (
            <h1>
                Loading
            </h1>
        )
    }
}

export default Main