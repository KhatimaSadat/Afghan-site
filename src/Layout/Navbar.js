import './NavBar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
    return ( 
        <nav className="navbar">
           <div className='left'>
             left
           </div>
           <nav className='right'>
             <Link to="/">Home</Link>
             <Link to="/history">History</Link>
             <Link to="/province">Province</Link>
             <Link to="/contactUs">Contact Us</Link>
           </nav>
        </nav>
     );
}
 
export default Navbar;