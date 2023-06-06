import styles from './NavBar.module.css'
import { NavLink, useLocation } from "react-router-dom"
import image from '../../img/toHomeLogo.png'
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar (props){
    const location = useLocation();
    return (
        <div className={styles.nav}>
            <NavLink to='/home'>
                <img src={image} alt='toHome' />
            </NavLink>
            <br />
            <div className={styles.botones}>
            <NavLink to='/createfood'>
                {location.pathname === '/createfood' || <button>New Recipe</button>}    
            </NavLink>
            <NavLink to='/about'>
            {location.pathname === '/createfood' || <button>About</button>}
            </NavLink>
            </div>
            <div className={styles.searchbar}>
            {location.pathname !== '/createfood' && location.pathname !== '/about' ? <SearchBar setPage={props.setPage}/> : null}
            </div>
        </div>
    )
}