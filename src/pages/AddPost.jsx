import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, date, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([newPost, ...existingPosts]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={4}>
            Add New Post
          </Heading>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              placeholder="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <Button type="submit" colorScheme="teal" size="md">
              Add Post
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default AddPost;