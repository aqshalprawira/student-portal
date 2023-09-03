import { Button } from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/layout";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from "@chakra-ui/react";
import { SearchIcon, AddIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <Flex
    bgColor="#1A202C"
      w="100%"
      pt={2}
      pb={2}
      justifyContent="space-between"
      alignItems="center"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      <ChakraLink as={RouterLink} to="/" data-testid="home-page">
        <Button
          _hover={{
            transform: "scale(1.2)",
            opacity: 1,
            color: "grey",
          }}
          mt={1}
          ml={{ base: 2, md: 5 }}
          mr={{ base: 2, md: 5 }}
          opacity={0.5}
          size={["xs", "sm"]}
        >
          Student Portal
        </Button>
      </ChakraLink>

      <Box display={{ base: "block", md: "block" }}> 
        <ChakraLink as={RouterLink} to="/student" data-testid="student-page">
          <Button
            _hover={{
              transform: "scale(1.2)",
              opacity: 1,
              color: "grey",
            }}
            mt={{ base: 1, md: 1 }}
            mr={{ base: 2, md: 5 }}
            ml={{ base: 2, md: 5 }}
            opacity={0.5}
            size={["xs", "sm"]}
            leftIcon={<SearchIcon />}
          >
            All Student
          </Button>
        </ChakraLink>

        <ChakraLink as={RouterLink} to="/add" data-testid="add-page">
          <Button
            _hover={{
              transform: "scale(1.2)",
              opacity: 1,
              color: "grey",
            }}
            mt={1}
            mr={{ base: 2, md: 5 }}
            opacity={0.5}
            size={["xs", "sm"]}
            color="green"
            leftIcon={<AddIcon />}
          >
            Add Student
          </Button>
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
