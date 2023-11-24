import { FlexProps, HeadingProps, TextProps } from '@chakra-ui/react'

export const bannerStyles: FlexProps = {
    justify: 'center',
    align: 'center',
    gap: 2,
    flexDirection: { base: 'column', lg: 'row' },
    w: { base: '100%', lg: '90%' },
    mx: 'auto',
    p: '2rem'
}

export const bannerHeadingStyles: HeadingProps = {
    size: { base: 'xl', lg: '3xl' },
    lineHeight: '4rem',
    color: 'blue.400'
}
export const bannerTextStyles: TextProps = {
    fontSize: { base: 'md', lg: 'lg' },
    py: '1rem',
    maxW: '600px'
}