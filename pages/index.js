import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoDiscord,
  IoMailSharp
} from 'react-icons/io5'


const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center" id="test">
          Linux
        </Box>
        <Heading id="home">Linux</Heading>
        <Paragraph></Paragraph>
        <Heading as="h3" variant="section-title" id="about">Über Linux</Heading>
        <Paragraph></Paragraph>
      </Container>
    </Layout>
  )
}

export default Page