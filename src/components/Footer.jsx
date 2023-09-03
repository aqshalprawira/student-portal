import { Box, Text } from "@chakra-ui/react";
import {studentId, studentName} from "../Task"


const Footer = () => {
  return (
    <Box className="footer" display="flex" bgColor="#2D3748" justifyContent="center" w="100%" flexDirection="column" alignItems="center" p={5}>
      <Text className="studentName" fontWeight="bold" color="white" fontFamily="helvetica">{studentName}</Text>
      <Text className="studentId" mt={0} color="white" fontFamily="helvetica">{studentId}</Text>
    </Box>
  );
};

export default Footer;
