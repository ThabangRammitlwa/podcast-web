import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
// import { Carousel } from 'react-responsive-carousel';
import ThabangPodcast from '../Assits/ThabangPodcastbgTP.png';
import { motion } from "framer-motion"



const Home = () => {
  return <Box
  bgColor={'blackAlpha.900'}
  w={'full'} h={'85vh'}>
  <motion.div style={{
    height:"80vh",
  }}
  animate={{
    translateY:"20px",
  }}
  transition={{
    duration:2,
    repeat:Infinity,
    repeatType:"reverse"
  }}
  >
    
    <Image
      w={'full'}
      h={'full'}
      objectFit={'contain'}
      src={ThabangPodcast}
      filter={'grayscale(1)'}
    />


  </motion.div>
  <Text
    fontSize={'6xl'}
    textAlign={'center'}
    fontWeight={'thin'}
    color={"whiteAlpha.700"}
    mt={'-10'}
  > Podcast you enjoy the Most ! </Text>
</Box>
}

export default Home