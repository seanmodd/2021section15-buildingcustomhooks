import { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Heading,
  useColorMode,
  VStack,
} from '@chakra-ui/react';


const Index = () => {
//! this is just for dark mode...
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'black',
    dark: 'white',
  };
  const textColor = {
    light: 'white',
    dark: 'black',
  };
//!
  
  return (
    <>
      <VStack minHeight="100vh" bg={bgColor[colorMode]}>
        <Heading
          pt={20}
          align="center"
          color={textColor[colorMode]}
        >
          Section 15: Building Custom Hooks
        </Heading>
        
      </VStack>
    </>
  );
};

export default Index;
