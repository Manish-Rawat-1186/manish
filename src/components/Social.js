import { Box, Flex, Heading, useMediaQuery, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import {DiGithubBadge, DiJsBadge, DiWebplatform} from 'react-icons/di'

export default function Social() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" 
    maxWidth={{base : "100vh" , md: "130vh" , lg:"130vh", xl:"130vh"}} >
      <Box alignSelf="center" px="16" py="32">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl" >
          2+
        </Heading>
        <Text fontSize="2xl" color="gray.400" >years of experience</Text>
      </Box>
      <Box alignSelf="center" px="16" py="32" >
        <Text fontWeight="bold" fontSize="2xl" >Freelencer and web devloper</Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
            <Icon as={DiGithubBadge} color="white" h="24" w="24" p="4" />
            <Text color="white" p="4" fontWeight="semibold" fontSize="xl">
              GitHub
            </Text>  
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg : "teal.400"}}>
            <Icon as={DiWebplatform} color="black" h="24" w="24" p="4" />
            <Text color="white" p="4" fontWeight="semibold" fontSize="xl">
              web Apps
            </Text>  
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.400" h="30vh" w="30vh" justify="flex-end"  _hover={{bg : "green.400"}}>
            <Icon as={DiJsBadge} color="black" h="24" w="24" p="4" />
            <Text color="white" p="4" fontWeight="semibold" fontSize="xl">
              JS
            </Text>  
          </Flex>

        </Flex>
      </Box>
    </Flex>
  )
}
