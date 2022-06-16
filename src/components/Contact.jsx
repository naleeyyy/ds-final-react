import { useState } from "react"
import AnimatedPage from "./AnimatedPage"
import $ from 'jquery'
import { useNavigate } from "react-router-dom"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [result, setResult] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = $(e.target)
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data)
                console.log(form.serialize())
                setTimeout(() => {
                    navigate('/')
                }, 5000)
            }
        })
    }
    
    if (result){
        return (
            <AnimatedPage>
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                    <h1>
                        Thank You For Contacting Us
                    </h1>
                    <p>
                        You will automatically be redirected in 5 seconds.
                    </p>
                </div>
            </AnimatedPage>
        )
    }
    else {
        return (
            <AnimatedPage>
                <main style={{
                    gridTemplateColumns: '1fr',
                    gridTemplateRows: '1fr',
                    backdropFilter: 'drop-shadow(5px)',
                    borderRadius: '0.5rem',
                }}>
                    <form onSubmit={(e) => handleSubmit(e)} className="flex" action="http://localhost:8000/contact.php" style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        boxShadow: '0px 0px 5px -1px white',
                        borderRadius: '1rem',
                        backdropFilter: "brightness(30%)",
                        fontSize: "20px"
                    }}>
                        <h1 className="gradient-text">hello</h1>
                        <label htmlFor="name" className="gradient-text">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="email" className="gradient-text">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="text" className="gradient-text">Text</label>
                        <textarea name="text" id="text" cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <button type="submit" className="button" style={{
                            outline: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}>Submit</button>
                    </form>
                </main>
            </AnimatedPage>
        )
    }
}

export default Contact