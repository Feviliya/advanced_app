import { Link } from "react-router-dom"
import balloon from '../../assets/balloons.png'
import '../../assets/css/user/Navbar.css'
export const Navbar = () => {
  return (
    <div id="nav-bar-user">
        <div className="nav-logo">
            <img src={balloon} width={70}></img>
        </div>
        <div className="nav-links">
            <Link to='/landing'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/bookings'>My events</Link>
            <Link to='/contact'>Contact us</Link>
        </div>
    </div>
  )
}
