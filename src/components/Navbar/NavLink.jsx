import { Link } from "react-router-dom";


const NavLink = ({ children, pathname, to="/", ...rest}) => {

    const showPopoverDescription = (e) => {
        
        if (window.innerWidth > 550 )
            e.currentTarget.children[1].style.display="block"
    }

    const hidePopoverDescription = (e) => {

        if (window.innerWidth > 550 )
            e.currentTarget.children[1].style.display="none"
    }

    return (
        <Link 
            to={to} 
            style={{ background: `${pathname===to ? "rgb(175, 64, 132)" : "none"}`, position:"relative"}}
            onMouseEnter={showPopoverDescription}
            onMouseLeave={hidePopoverDescription}
            {...rest}>
            { children }
        </Link>
    )
}

export default NavLink