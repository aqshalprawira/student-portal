import { useNavigate } from "react-router-dom";
import { Button, Box, Text } from "@chakra-ui/react";

const NotFound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/"); 
    };

    return (
        <>
            <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        color="white"
        textAlign="center"
        padding={8}
        bgColor="#1A202C"
      >
        <Text fontWeight="bold" fontSize="2xl" fontFamily="helvetica" marginBottom={4}>
        404 | Not Found
        </Text>
        
       
          <Button colorScheme="red" size="lg" data-testid="back" onClick={handleBack}>
            Take Me Back
          </Button>
     
      </Box>
        </>
    );
};

export default NotFound;
