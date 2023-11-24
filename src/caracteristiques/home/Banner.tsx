import { Box, Text, Flex, Heading, Button, Link } from "@chakra-ui/react";
import React from "react";
import { bannerHeadingStyles, bannerStyles, bannerTextStyles } from "./style";

export default function Banner() {
    return (
        <Flex {...bannerStyles}>
            <Box w={{ base: '100%', lg: '50%' }}>
                <Heading {...bannerHeadingStyles}>
                    Boutique en <br /><Text as={'span'} color={'blue.400'}>ligne</Text>
                </Heading>
                <Text {...bannerTextStyles}>
                    Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Sit nostrum rerum nobis quas, est molestias qui omnis
                    uscipit quaerat. Libero illo quis eligendi doloremque modi vitae aperiam ab amet consequatur!
                </Text>
                <Link href="/produits">
                    <Button
                     rounded={'full'} 
                     minW={'10rem'} 
                     bgColor={'blue.400'} 
                     color={'white'} 
                    _hover={{ backgroundColor: 'blue' }}
                    >
                        Voir plus
                    </Button>
                </Link>
            </Box>
            <Box w={{ base: '100%', lg: '50%' }}>
                <Box
                    mx={'3rem'}
                    w={{ base: '300px', lg: '600px' }}
                    h={{ base: '300px', lg: '500px' }}
                    bg={"center / cover no-repeat url(img6-removebg-preview.png)"}
                />
            </Box>
        </Flex>
    )
}