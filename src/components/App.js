import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaTwitter} from "react-icons/fa";
import Header from "./Header";
import Profile from "./Profile";
import Social from "./Social";

const App = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
            <VStack p={5}>
                <Flex w="100%">
                    <Heading
                    ml="8"
                    size="md"
                    fontWeight="semibold"
                    color="cyan.400">
                      
                    </Heading>
                    <Spacer />
                    <IconButton
                    ml={8}
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    onClick={toggleColorMode}
                    isRound='true'
                    />
                     <IconButton
                    ml={2}
                    icon={<FaInstagram />}
                    onClick={() => {
                        window.open("https://www.instagram.com/uzumaki_manu__/?hl=en");
                    }}
                    isRound='true'
                    />
                     <IconButton
                    ml={2}
                    icon={<FaGithub />}
                    onClick={() => {
                        window.open("https://github.com/Manish-Rawat-1186");
                    }}
                    isRound='true'
                    />
                     <IconButton
                    ml={2}
                    icon={<FaTwitter />}
                    onClick={() => {
                        window.open("https://twitter.com/RawatManu1186");
                    }}
                    isRound='true'
                    />
                </Flex>
                <Header></Header>
                <Profile></Profile>
                <Social ></Social>
                
            </VStack>
    );
}

export default App;