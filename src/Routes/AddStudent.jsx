import Footer from "../components/Footer"
import NavBar from "../components/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Select} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'

const AddStudent = () => {
  const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let faculty = "";
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
      case "Informatika":
        faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        faculty = "";
        break;
    }

    const student = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then((data) => {
        
        setFullname(data);
        setProfilePicture(data);
        setAddress(data);
        setPhoneNumber(data);
        setBirthDate(data);
        setGender(data);
        setProgramStudy(data);
        navigate("/student");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <NavBar />

      <Box w="75%" mx="auto" mt={8} mb={5}>
      <form onSubmit={handleSubmit} id="form-student">
        <Box>
          <label htmlFor="fullname">Fullname</label>
          <Input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            data-testid="name"
            required
          />
        </Box>
        <Box>
          <label htmlFor="profilePicture">Profile Picture</label>
          <Input
            type="text"
            id="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            data-testid="profilePicture"
            required
          />
        </Box>
        <Box>
          <label htmlFor="address">Address</label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            data-testid="address"
            required
          />
        </Box>
        <Box>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            data-testid="phoneNumber"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Box>
        <Box>
          <label htmlFor="birthDate">Birth Date</label>
          <Input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            data-testid="date"
            required
          />
        </Box>
        <Box>
          <label htmlFor="input-gender">Gender</label>
          <Select
            id="input-gender"
            name="gender"
            data-testid="gender"
            value={gender}
            required
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </Box>
        <Box>
          <label htmlFor="input-prody">Program Study</label>
          <Select
            id="input-prody"
            name="prody"
            value={programStudy}
            required
            onChange={(e) => setProgramStudy(e.target.value)}
            data-testid="prody"

          >
            <option value="">Select Prody</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </Select>
        </Box>
        <Button
          type="submit"
          value="Add student"
          id="add-btn"
          form="form-student"
          data-testid="add-btn"
          colorScheme="green"
          mt={5}
          leftIcon={<AddIcon />}
        >Add student</Button>
      </form>
      </Box>
      <Footer />
    </>
  );
};

export default AddStudent;
