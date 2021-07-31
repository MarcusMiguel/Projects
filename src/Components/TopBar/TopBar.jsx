import React from 'react'
import "./TopBar.scss"

export default function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className="topbar " >
            <div className={"menu "+ (menuOpen && "active")} onClick={ () => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </div>
    )
}