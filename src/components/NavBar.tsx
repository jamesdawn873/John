import { Fragment } from "react";

function NavBar(){
    const items = [
        'John',
        'GitHub',
        'LinkedIn',
        'Projects'
    ]

    return (
        <ul className = "flex">
            {items.map(item =>
                <li className="float-left p-4" key={item}>{item}</li>
            )}
        </ul>
        
    )
}

export default NavBar;