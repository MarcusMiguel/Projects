import React from 'react'
import "./Menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"sideMenu "+(menuOpen && "active")}>
            <ul>
                <li >
                    <a onClick={()=>setMenuOpen(false)} href="#about">Sobre</a>
                </li>
                <li >
                    <a onClick={()=>setMenuOpen(false)} href="#projects">Projetos</a>
                </li>
            </ul>
        </div>
    )
}
