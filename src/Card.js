import React from 'react'
import './Card.css'

function Card({ image, title, date, desc }) {
    return (
        <div className='card'>
            <img src={image} className='card__image' />
            <hr/>
            <div className='card__font'>
                <p>{title}</p>
                <p>{date}</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card
