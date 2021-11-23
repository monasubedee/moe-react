import { SearchOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';




const Navbar = () => {
    const [nav,setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return(
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to='#' className='logo'>
                <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/07/moe-myanmar-online-entrepreneur.png' alt='logo' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='#'>HOME</Link></li>
                <li><Link to='#'>ABOUT</Link></li>
                <li><Link to='#'>SERVICES</Link></li>
                <li><Link to='/Book'>BOOKS</Link></li>
                <li><Link to='/Course'>COURSES</Link></li>
                <li><Link to='#'>BLOG</Link></li>
                <li><Link to='#'>CONTACT</Link></li>
                <li><Link to='#'>ACCOUNT</Link></li>
               
            </ul>

        </nav>
    )
}


export default Navbar;