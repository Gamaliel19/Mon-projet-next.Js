import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ReactStars from 'react-stars'

export const Rating = () => {
    return (
        <Flex>
            <ReactStars count={5} value={3.5} half={true} size={18} color2={'colors.blue.400'} edit={false} />
            <Text>({200})</Text>
        </Flex>
    )
}


