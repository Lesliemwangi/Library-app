import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div id="header">
            <div class="container">
                <nav>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#header">Login</a></li>
                        <li><a href="#header">Sign up</a></li>
                        <li><a href="#header">Book List</a></li>
                        <li><a href="#s">Add Book</a></li>
                        <li><a href="#p">About us</a></li>
                        <li><a href="#c">Contact Us</a></li>
                    </ul>
                </nav>
                <div class="intro">
                    <h1>Welcome to<br /><span>Chapter Chatter</span></h1>
                </div>

                <div class="header-text">
                    <h1>Where every page turn <span>is</span><br />a new adventure</h1>
                </div>
            </div>
        </div>
  )
}

export default Navbar
