import { Box, Flex, Heading, useMediaQuery, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import {FaFigma} from 'react-icons/fa'
import {DiGithubAlt, DiWebplatform} from 'react-icons/di'

export default function Social() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" 
    maxWidth={{base : "100vh" , md: "130vh" , lg:"130vh", xl:"130vh"}} >
      <Box alignSelf="center" px="16" mt={8} py="25">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl" >
          2+
        </Heading>
        <Text fontSize="2xl" color="gray.400" >Projects ON </Text>
      </Box>
      <Box alignSelf="center" px="16" py="20" >
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={2}>
          <Flex rounded="xl" direction="column" mt={2} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
            <Icon as={DiGithubAlt} color="white" h="24" w="24" p="4" />
            <Text
            as="button"
            onClick={() => {
                        window.open("https://github.com/Manish-Rawat-1186");
                    }}
             color="white" p="4" fontWeight="semibold" fontSize="xl">
              GitHub
            </Text>  
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg : "teal.400"}}>
            <Icon as={DiWebplatform} color="black" h="24" w="24" p="4" />
            <Text
            as="button"
            onClick={() => {
                        window.open("https://to-do-snowy-zeta.vercel.app/");
                    }}
             color="white" p="4" fontWeight="semibold" fontSize="xl">
              web Apps
            </Text>  
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.400" h="30vh" w="30vh" justify="flex-end"  _hover={{bg : "green.400"}}>
            <Icon as={FaFigma} color="black" h="24" w="24" p="4" />
            <Text
            as="button"
            onClick={() => {
                        window.open("https://www.figma.com/file/mDdtvJhguRouex42ihzynQ/landing-page?node-id=0%3A1");
                    }}
             color="white" p="4" fontWeight="semibold" fontSize="xl">
              Figma
            </Text>  
          </Flex>

        </Flex>
      </Box>
    </Flex>
  )
}
