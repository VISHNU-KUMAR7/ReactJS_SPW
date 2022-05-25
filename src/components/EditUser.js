import React from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../service/api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  & > div {
    margin: 2%;
  }
`;

const EditUser = () => {
  const defaultValue = {
    name: "loding...",
    username: "loding...",
    email: "loding...",
    phone: "loding...",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUserDetails(id);
  }, []);

  const loadUserDetails = async (id) => {
    try {
      const response = await getUser(id);
      setUser(response.data);
      console.log(response.data[0]);
      console.log(user);
    } catch (error) {
      console.log("Error Not getting the data", error.message);
    }
  };
  const editUserDetails = async (e) => {
    console.log("Update button is clicked", user);
    await updateUser(user, id);
    navigate("/all");
  };

  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={user.phone}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={(e) => editUserDetails(e)}>
            UPDATE USER
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
