import { Link } from "react-router-dom"
import AnimatedPage from "./AnimatedPage"

const Card = (props) => {
    return (
        <AnimatedPage>
            <div className={props.alignment === 'right' ? 'card flex-center text-right' : 'card flex-center text-left'} style={props.style}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className={props.alignment === 'right' ? 'button-left' : 'button-right'}>
                    <div className="button-wrapper">
                        <Link to={props.url} className="button">{props.buttonText}</Link>
                        {props.children}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Card