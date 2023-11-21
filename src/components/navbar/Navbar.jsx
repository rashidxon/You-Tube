import React from 'react'
import {Link} from 'react-router-dom'
import {Stack, Box} from '@mui/material'
import { colors } from '../../constants/colors' 
import SearchBar from '../searchBar/SearchBar'
import logo from './img/rashidxon.png'

const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2} height="10vh" sx={{position: "sticky", top: 0, zIndex: 999, background: colors.primary }} >
      <Link to={'/'}>
        <img src={logo} alt='logo' height={90} ></img>
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar