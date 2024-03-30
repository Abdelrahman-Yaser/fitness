import React from 'react'
import { Link } from 'react-router-dom'
import {Stack} from '@mui/material'
import logo from '../assest/Logo-1.png'
const Navbar = () => {
  return (
<Stack direction={'row'}
justifyContent={'space-around'}
sx={{gap:{sm:'122px',xs:'40px'},mt:{ms:'32px',xs:'20px'},
justifyContent:'none'}}px={'20px'}
>
  <Link to='/'>
  <img src={logo} style={{width:'100px',height:'40px',margin:'0 20px'}}/>
  </Link>
  <Stack 
  direction={'row'}
  fontSize={'24px'}
  gap={'40PX'}
  alignItems={'flex-start'}
  >
  <Link to="/" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2526'}}>Home</Link>
  <a href='#exericses'style={{textDecoration:'none',color:'#3A1212'}}>Exericses</a>
</Stack>
</Stack>

  )
}

export default Navbar