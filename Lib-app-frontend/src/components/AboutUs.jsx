import React from 'react'
import "./AboutUs.css"


function AboutUs() {
  return (
    <>
   <div className="intro">
    <h1>ABOUT US</h1>
    <img src="https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?b=1&s=170667a&w=0&k=20&c=T63zJBKuZLTUQwwAAwLzbMwtzAEdd4wZRaEV6EAdUnA=" alt="" />
   </div>
   <div className="intro2">
    <h3>"Lets read,who knows;You might learn something" </h3>
   </div>
   <div className="intro3">
    <div className="card1">
        <div className="container11">
            <h3>Our Mission</h3>
            <p>Empowering readers to discover, share, and connect through authentic book reviews and a vibrant literary
            community.</p>
        </div>
        <div className="random1">
            <h1>"Create distinction...</h1>
        </div>
        <div className="random2">
            <h1>...become better"</h1>
        </div>
        <div class="container1">
            <h1>Our Vision</h1>
            <p>To be the premier platform for book lovers, fostering a culture of informed and passionate reading.</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default AboutUs