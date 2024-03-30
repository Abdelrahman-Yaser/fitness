import React from 'react'
import {Box,Typography,stack,Button}from '@mui/material'
const Herobanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}}position="relative">
    <Typography color='#FF2526' fontWeight='600'fontStyle='26px'>
    Fitness Club
    </Typography>
    <Typography fontWeight='600' sx={{fontSize:{lg:'44px',xs:'40px'}}}> 
        Sweat ,Smaile <br/> and repeat
    </Typography>
    <Typography fontSize='22px'lineHeight='35px'mb={3}>
        check out the moust effective Exercises
    </Typography>
    <Button variant='contained'color='error' href='#exercisses' > Explore Exercises</Button>
    <img src=''/>
    </Box>
  )
}

export default Herobanner