import React from 'react'
import "./Menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"sideMenu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">Sobre</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projetos</a>
                </li>
            </ul>
        </div>
    )
}
