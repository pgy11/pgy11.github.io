import { Box, Container } from '@material-ui/core'
import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <Box className='profile__info'>
            <p>Giyoon Park</p>
            <p>workspaceforice@gmail.com</p>
            <p><a href="https://velog.io/@study-dev347">velog.io/@study-dev347</a></p>
        </Box>
    )
}

export default Profile
