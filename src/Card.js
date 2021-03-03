import { Box } from '@material-ui/core'
import React from 'react'
import './Card.css'


function Card({ image, title, date, desc }) {
    return (
        <Box className='card'>
            <img src={image} className='card__image' />
            <div className='card__font'>
                <p>{title}</p>
                <p>{date}</p>
                <p>{desc}</p>
            </div>
            <hr />
        </Box>

    )
}

export default Card
