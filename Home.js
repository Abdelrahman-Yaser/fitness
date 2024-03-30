import React,{useState} from 'react'
import {Box} from '@mui/material'
import Herobanner from '../Herobanner'
import Exercises from '../Exercises'
import SearchExercises from '../SearchExercises'
const Home = () => {
  return (
  <Box>
<Herobanner/>
<SearchExercises/>
<Exercises/>
  </Box>
  )
}

export default Home