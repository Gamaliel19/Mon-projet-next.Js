'use client';

import { SectionHeading } from "@/components/SectionHeading";
import { Box, Card, Grid, GridItem, Image, Text, Heading, CardBody } from "@chakra-ui/react";
import React from "react";

export const TopCategories = () => {
    return (
        <Box w={{ base: '100%', lg: '90%' }} mx={'auto'} py={'3rem'} px={'2rem'}>
            <SectionHeading title="Voir notre catalogue" />

            <Grid templateColumns={{base: 'repeat(1,fr)',md:'repeat(2,1fr)', lg:'repeat(4,1fr)'}}>
                <GridItem>
                    <TopCategoriesCard/>
                </GridItem>
                <GridItem>
                    <TopCategoriesCard/>
                </GridItem>
                <GridItem>
                    <TopCategoriesCard/>
                </GridItem>
                <GridItem>
                    <TopCategoriesCard/>
                </GridItem>
            </Grid>
        </Box>
    )
};

export const TopCategoriesCard = () => {
    return (
        <Card
        direction={'row'}
        align={'center'}
        overflow={'hidden'}
        variant={'outline'}
        w={'100%'}
        h={'100%'}
        p={'10px'}
        _hover={{cursor:'pointer', bgColor:'gray.100'}}
        >
            <Image src="Montre2-removebg-preview.png" alt="" w={100} h={100}/>
            <CardBody>
                <Heading size={{base: 'sm', lg:'md'}}>Montre</Heading>
            </CardBody>
        </Card>
    )
}