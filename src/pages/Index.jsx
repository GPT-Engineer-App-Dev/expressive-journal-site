import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            mb={4}
          />
          <Heading as="h1" size="xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer | Tech Enthusiast | Blogger
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Hello! I'm John, a passionate full stack developer with a love for creating dynamic and responsive web applications. I enjoy exploring new technologies and sharing my knowledge through blogging. Welcome to my personal blog where I write about tech, programming, and my journey in the world of software development.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Understanding React Hooks
              </Heading>
              <Text fontSize="sm" color="gray.600">
                March 10, 2023
              </Text>
              <Text mt={2}>
                React Hooks have revolutionized the way we write React components. In this post, we'll dive deep into the basics of Hooks and how to use them effectively...
              </Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                A Guide to Node.js Performance Optimization
              </Heading>
              <Text fontSize="sm" color="gray.600">
                February 25, 2023
              </Text>
              <Text mt={2}>
                Node.js is a powerful tool for building server-side applications. However, performance optimization is key to ensuring your applications run smoothly...
              </Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <VStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;