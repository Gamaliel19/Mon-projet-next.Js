import React from 'react'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { desktopNavStyles, cartSectionStyles, logoSectionStyles } from './style'
import AppLogo from '../Logo'
import { navItems } from '../helpers'
import Link from 'next/link'
import { Search } from '../Search/Search'

export default function DesktopNav() {
    return (
        <Flex { ...desktopNavStyles}>
            <Stack { ...logoSectionStyles}>
                <Box><AppLogo /></Box>
                {
                    navItems.map((navItem) => <Box key={navItem.label}>
                        <Link href={navItem.href}>{navItem.label}</Link>
                    </Box>)
                }
                <Box>
                    <Search/>
                </Box>
            </Stack>
            <Stack { ...cartSectionStyles}>
                <Box>Favoris</Box>
                <Box>Panier</Box>
            </Stack>
        </Flex>
    )
}