import React from "react";
import '../App.css'

function Header(props){
    return(
        <header className="header">
        <h2>{props.name}</h2>
        <ul className="lista">
            <li>{props.links[0]}</li>
            <li>{props.links[1]}</li>
            <li>{props.links[2]}</li>
        </ul>
    </header>
    )
}

export default Header