import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaFigma , FaNode, FaCss3Alt,FaReact } from 'react-icons/fa';

export default function Profile() {
  return (
    <HStack spacing="24" >
      
      <Icon as={FaFigma} size="100" />
      <Icon as={FaCss3Alt} size="100" />
      <Icon as={FaReact} size="100" />
      <Icon as={FaNode} size="100" />
    </HStack>
  )
}
