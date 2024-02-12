import React from 'react'
import {Link} from "react-router-dom"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Success = () => {
  return (
    <section className='success' id='success'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">Thank You for your Reservation</h1>
                <p>Aapki Seat par Rumaal Rakh Diya Gya hai</p>
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
            <img src="\logo.svg" alt="success" />
        </div>
      </div>
    </section>
  )
}

export default Success
