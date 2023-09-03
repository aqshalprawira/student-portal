import Footer from "../components/Footer"
import NavBar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Input, Select} from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'


const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFullname(data.fullname);
        setProfilePicture(data.profilePicture);
        setAddress(data.address);
        setPhoneNumber(data.phoneNumber);
        setBirthDate(data.birthDate);
        setGender(data.gender);
        setProgramStudy(data.programStudy);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  
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
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
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

      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Box w="75%" mx="auto" mt={8} mb={5}>
        <form onSubmit={handleSubmit} id="form-student">
          <Box>
            <label htmlFor="fullname">Fullname</label>
            <Input
              type="text"
              id="fullname"
              value={fullname}
              data-testid="name"
              required
              onChange={(e) => setFullname(e.target.value)}
            />
          </Box>
          <Box>
            <label htmlFor="profilePicture">Profile Picture</label>
            <img src={profilePicture} alt="Profile Picture" required />
          </Box>
          <Box>
            <label htmlFor="address">Address</label>
            <Input
              type="text"
              id="address"
              value={address}
              required
              data-testid="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
          <Box>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              required
              data-testid="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
          <Box>
            <label htmlFor="birthDate">Birth Date</label>
            <Input
              type="date"
              id="birthDate"
              value={birthDate}
              required
              data-testid="date"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Box>
          <Box>
            <label htmlFor="gender">Gender</label>
            <Select
              id="gender"
              name="gender"
              value={gender}
              required
              data-testid="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </Box>
          <Box>
            <label htmlFor="programStudy">Program Study</label>
            <Select
              id="programStudy"
              value={programStudy}
              required
              data-testid="prody"
              onChange={(e) => setProgramStudy(e.target.value)}
            >
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
          <Button type="submit" value="Edit student" data-testid="edit-btn" leftIcon={<EditIcon />} colorScheme="green" mt={5}>Edit student</Button>
        </form>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default EditStudent;
