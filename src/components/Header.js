import { Box, Circle, Flex, Stack, useColorMode, useMediaQuery , Text, Button, Image } from '@chakra-ui/react'
import React from 'react'
import Manish2 from './ManishNew.png'

export default function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
        <Circle position="absolute" bg="blue.100" opacity="0.1" 
        w="300px" h="300px" alignSelf="flex-end"  />
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" :16} align= "flex-start">
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600) " bgClip="text" >Manish Rawat</Text>
                <Text color={isDark ? "gray.200" : "gray.400"} fontSize="2xl" > A UI/UX Designer, Frontend Web Developer and Freelancer  </Text>
                <Button fontSize="xl" mt={8} color="blue.300" onClick={() => { window.open("mailto:manishrawat1186@gamil.com") }} >Hire me</Button>
            </Box>
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"} borderRadius= 'full'
            backgroundColor= "transparent" boxShadow="lg"
            boxSize="300px" src={Manish2} ml={5} />
        </Flex>
    </Stack>
  )
}
