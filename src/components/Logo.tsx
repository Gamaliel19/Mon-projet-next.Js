import React from "react";
import {Text } from '@chakra-ui/react'
import Link from "next/link";

export default function AppLogo() {
    return (

        <Link href="/">
            <Text color={'gray.800'} fontWeight={'bold'}>
                MyB
                <Text as={'span'} color={'blue.400'}>Shop</Text>
            </Text>
        </Link>
    )
}