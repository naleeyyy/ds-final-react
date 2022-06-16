import hamburger from '../images/hamburger.png'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'

const Menu = () => {
    
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        setAuthenticated(localStorage.getItem('authenticated'))
    }, [])

    let [menuState, setMenuState] = useState(false)
    const toggleMenu = () => {
        setMenuState(!menuState)
    }

    const location = useLocation()
    const navigate = useNavigate()

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
                    {authenticated && <button 
                        className='button' style={{
                            outline: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }} 
                        onClick={(e) => {
                            localStorage.removeItem('authenticated')
                            window.location.reload(false)
                        }}>
                        Sign Out</button>}
                </div>
                <div className="sidenav-footer">
                    <p>Copyright K.A 2022</p>
                </div>
            </div>
        </>
    )
}

export default Menu