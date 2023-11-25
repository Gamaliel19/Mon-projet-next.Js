import React, { ReactNode } from 'react'
import {
    Box,
    Container,
    IconButton,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    background,
    chakra,
} from '@chakra-ui/react'
import AppLogo from './Logo';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode,
    label: string,
    href: string,
}
) => {
    return (
        <chakra.button
            bg={'blackAlpha.100'}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as='a'
            href='href'
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: 'blackAlpha.200'
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
};

export const Footer = () => {
    return (
        <Box bg={'pink.50'} color={'gray.700'} mt={'2rem'}>
            <Container as={Stack} maxW={'6xl'} py={10} >
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Box>
                            <AppLogo />
                        </Box>
                        <Text fontSize={'sm'}>¢ 2023 My best SHOP. Tous droits réservés.</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label="Twitter" href={"#"}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label="Facebook" href={"#"}>
                                <FaFacebook />
                            </SocialButton>
                            <SocialButton label="Whatsapp" href={"#"}>
                                <FaWhatsapp />
                            </SocialButton>
                        </Stack>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Entreprise</ListHeader>
                        <Link href='#'>À propos</Link>
                        <Link href='#'>Nous contacter</Link>
                        <Link href='#'>Temoignages</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Supports</ListHeader>
                        <Link href='#'>Aide</Link>
                        <Link href='#'>Termes de contrat</Link>
                        <Link href='#'>Politiques de confidentialité</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Trouver la meilleur offre</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder='Votre adresse e-mail'
                                bg={'blackAlpha.100'}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300'
                                }}
                            />
                            <IconButton
                                bg={'green.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'greeen'
                                }}
                                aria-label='Subscribe'
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>

                </SimpleGrid>
            </Container>
        </Box>
    )
}


