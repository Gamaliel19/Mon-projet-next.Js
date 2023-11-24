import React from 'react'
import { Box } from '@chakra-ui/react'
import { navbarStyles } from './style'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
export const Navbar = () => {
    return (
        <Box className='navbar-wrapper' h={'120px'}>
            <Box { ...navbarStyles}>
                <DesktopNav />
                <MobileNav />
            </Box>
        </Box>
    )

}