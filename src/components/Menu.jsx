import hamburger from '../images/hamburger.png'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'

const Menu = () => {
    
    let [menuState, setMenuState] = useState(false)
    const toggleMenu = () => {
        setMenuState(!menuState)
    }

    const location = useLocation()

    useEffect(() => {
        if (menuState) {
            toggleMenu()
        }
    }, [location])

    return (
        <>
            <div className={menuState ? 'overlay' : 'overlay hidden'} onClick={toggleMenu}></div>

            <div className="menu-icon">
                <img src={hamburger} alt="hamburger-menu" className="" id="hamburger-icon" onClick={toggleMenu}></img>
            </div>

            <div id="mySidenav" className="sidenav" style={menuState ? {width: '250px'} : null}>
                <a className="closebtn" onClick={toggleMenu}>&times;</a>
                <div>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/about'>
                        About
                    </Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                    <Link to='/pages'>
                        Pages
                    </Link>
                </div>
                <div className="sidenav-footer">
                    <p>Copyright K.A 2022</p>
                </div>
            </div>
        </>
    )
}

export default Menu