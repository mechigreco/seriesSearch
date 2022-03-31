import React from "react";
import { Link } from 'react-router-dom'
class Menu extends React.Component {
    render(){
        return(
            <nav>
                <Link to='/' >Inicio</Link>
                <Link to='/buscador' > Buscador App </Link>

            </nav>
        )
    }
}

export default Menu;