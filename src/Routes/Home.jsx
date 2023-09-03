import { Button, Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        textAlign="center"
        padding={8}
        color="grey"
      >
        <Text fontWeight="bold" fontSize="2xl" fontFamily="helvetica" marginBottom={4}>
          Student Portal Website Application
        </Text>
        <Text fontSize="lg" marginBottom={8}>
          Click the button below to see all students
        </Text>
        <Link to="/student">
          <Button colorScheme="teal" size="lg" data-testid="student-btn">
            All Students
          </Button>
        </Link>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
