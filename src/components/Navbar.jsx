import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <NavLink to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
                    <span className="brand-accent">{'>'}</span> piwi<span className="brand-accent">.ai</span>
                </NavLink>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                </nav>
            </div>
        </header>
    )
}
