import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { getUsers } from "../service/api.js";
import styled from "@emotion/styled";

const styledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0px auto;
`;

const Thead = styled(TableRow)`
  background: #000000;
  & > th {
    color: white;
  }
`;

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log("Error from /all ", error.message);
    }
  };
  const editUser = async () => {
    try {
    } catch (error) {
      console.log("Error while editing the user", error.message);
    }
  };
  return (
    <>
      <styledTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${user._id}`}
                  onClick={(e) => {
                    editUser(e);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  color="secondary"
                  component={Link}
                  to={`/del/${user._id}`}
                >
                  Delete{" "}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </styledTable>
    </>
  );
}

export default AllUsers;
