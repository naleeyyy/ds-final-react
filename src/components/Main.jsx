import Typewriter from 'typewriter-effect'
import AnimatedPage from './AnimatedPage'
import Card from './Card'

const Main = () => {
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
                        title='Title'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere sunt necessitatibus ullam placeat praesentium!'
                        buttonText='Click me'
                        url='/blogPage'
                    />
                    {/* use this card component */}
                    <Card 
                        alignment='left' 
                        title='Title'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere sunt necessitatibus ullam placeat praesentium!'
                        buttonText='Click me'
                        url='/blogPage'
                    />
                    <Card 
                        alignment='right' 
                        title='Title'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere sunt necessitatibus ullam placeat praesentium!'
                        buttonText='Click me'
                        url='/blogPage'
                    />
                </main>
        </AnimatedPage>
    )
}

export default Main