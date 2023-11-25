import { Button } from '@chakra-ui/react'
import React from 'react'

export const AddToCardButton = () => {
  return (
    <Button 
    variant={'outline'} 
    borderColor={'blue.400'} 
    color={'blue.400'} 
    rounded={'full'}
    size={'sm'}
    w={'150px'}
    >
      Ajouter au panier
    </Button>
  )
}
