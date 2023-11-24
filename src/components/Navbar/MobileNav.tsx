import React from 'react'
import { Box, Text, Flex, Stack } from '@chakra-ui/react'
import AppLogo from '../Logo'
import { mobileNavContainerStyles, mobileSearchWrapper } from './style'
import { Search } from '../Search/Search'

export default function MobileNav() {
    return (
        <>
            <Flex { ...mobileNavContainerStyles}>
                <Box>
                    Nav Menu
                </Box>
                <AppLogo />

                <Stack direction={'row'} spacing={1}>
                    <Text>Favoris</Text>
                    <Text>Panier</Text>
                </Stack>

            </Flex>
            <Box { ...mobileSearchWrapper} >
                <Search />
            </Box>
        </>
    )
}