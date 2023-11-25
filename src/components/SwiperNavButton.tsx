import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwiper } from 'swiper/react'

export const SwiperNavButton = () => {
    const swiper = useSwiper();
    return (
        <Box m={'1.5rem'}>
            <IconButton
                rounded={'lg'}
                icon={<FaChevronLeft />}
                borderColor={'blue.400'}
                borderWidth={'1px'}
                color={'blue.400'}
                bgColor={'white'}
                aria-label='Prec'
                onClick={() => swiper.slidePrev()}
                mx={1}
            />

            <IconButton
                rounded={'lg'}
                icon={<FaChevronRight />}
                borderColor={'blue.400'}
                borderWidth={'1px'}
                color={'blue.400'}
                bgColor={'white'}
                aria-label='Suiv'
                onClick={() => swiper.slideNext()}
                mx={1}
            />
        </Box>
    )
}


