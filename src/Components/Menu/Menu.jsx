import React from 'react'
import "./Menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"sideMenu "+(menuOpen && "active")}>
            <ul>
                <li >
                    <a onClick={()=>setMenuOpen(false)} href="#about">Contact</a>
                </li>
                <li >
                    <a onClick={()=>setMenuOpen(false)} href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    )
}
