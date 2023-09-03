// TODO: answer here
import Footer from "../components/Footer"
import NavBar from "../components/Navbar"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Select, Table, Tbody, Td, Th, Thead, Tr, Tfoot,TableCaption, TableContainer } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'


const Student = () => {

    const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  
  useEffect(() => {
    fetch("http://localhost:3001/student")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
    
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  
    
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  
  const filteredStudents =
  filter === "All"
    ? students
    : students.filter((student) => student.faculty === filter);

  
        return (
            <>
              <NavBar />
          
              <Select data-testid="filter" value={filter} onChange={handleFilterChange} mt={5} mb={5} bgColor="#1A202C">
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">
                  Fakultas Ilmu Sosial dan Politik
                </option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">
                  Fakultas Teknologi Informasi dan Sains
                </option>
              </Select>

              <Box overflowX="auto" bgColor="#1A202C">
              {loading ? (
                <p>Loading ...</p>
              ) : (
                <TableContainer>
                <Table id="table-student" >
                  <Thead>
                    <Tr>
                      <Th>No</Th>
                      <Th>Full Name</Th>
                      <Th>Faculty</Th>
                      <Th>Program Study</Th>
                      <Th>Option</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredStudents &&
                      filteredStudents.map((student, index) => (
                        <Tr key={student.id} className="student-data-row">
                          <Td>{index + 1}</Td>
                          <Td>
                            <Link to={`/student/${student.id}`}>
                              {student.fullname}
                            </Link>
                          </Td>
                          <Td>{student.faculty}</Td>
                          <Td>{student.programStudy}</Td>
                          <Td>
                            <Button
                              data-testid={`delete-${student.id}`}
                              onClick={() => handleDelete(student.id)}
                              colorScheme="red"
                            >
                              <DeleteIcon />
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
                </TableContainer>
              )}
                </Box>
              <Footer />
            </>
          );
          
};

export default Student;
