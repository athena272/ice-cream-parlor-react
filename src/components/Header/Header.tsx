import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="limitar-secao">
                <Link to="/"><img src="assets/logo.png" alt="logomarca" width={60} height={60} /></Link>
                <nav>
                    <Link className="link-topo" to="/">Home</Link>
                    <Link className="link-topo" to="/flavors">Sabores</Link>
                    <Link className="link-topo" to="/about">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}