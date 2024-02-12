import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>Pehle pait pooja, fir kaam dooja</p>
            </div>
            <p className='mid'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non minima quos autem. Culpa quidem mollitia sequi odio adipisci earum consequatur incidunt consectetur cumque eaque pariatur blanditiis officiis quo, esse fugiat voluptatum totam accusantium iusto. Harum illo quaerat voluptates dignissimos maxime quia, deleniti aut unde, eaque, dolor nihil voluptas consectetur dolore.
            </p>
            <Link to={"/"}>
                Explore Menu{" "} 
                <span>
                    <HiOutlineArrowNarrowRight />
                </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About
