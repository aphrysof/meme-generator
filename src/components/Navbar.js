import React from 'react'
import './style.css'
import logo from "../logo/Troll Face.png"
export default function Navbar () {
    return (
        <div>
        <nav>
        <div className = "logo">
              <img src = {logo} alt = "logo" />
                <h3>Meme Generator</h3>
        </div>
        <p>React Course - Project 3</p>
        </nav>
        </div>
    )
}