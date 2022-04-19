import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';

export default function Profile() {
  return (
    <HStack spacing="24" >
      <Icon as={FaFacebookF} size="50" />
      <Icon as={FaGoogle} size="50" />
      <Icon as={FaSpotify} size="50" />
      <Icon as={FaShopify} size="50" />
    </HStack>
  )
}
