import React, {useState} from "react";


function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            {/*href="#"*/}
            <a className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

export default NavItem;