import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import axios from "axios";
import { useEffect } from "react";
import FileClaim from "./FileClaim";

export default function ClaimAdd() {
  let Navigate = useNavigate();
  const [isAuth, setIsAuth] = React.useState(false);

  const [policyNumber, setPolicyNumber] = React.useState();
 const [number, setNumber] = React.useState();
  const [users, setUsers] = React.useState([]);
  const getAll = async () => {
    console.log("first");
    await axios
      .get("http://192.168.2.129:8081/pas/getPolicyHolder")
      .then((res) => {
        const resp2 = res.data;
        setUsers(resp2);
        // console.log(users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleClick = (e) => {
    getAll();
    const isExist = users.find((item) => item.id === parseInt(number));
    // console.log(isExist);

    if (isExist) {
    setPolicyNumber(isExist.id);
      console.log("found");
      //   alert("Welcome ka dito " + isExist.firstname);
      setIsAuth(true);
    //   Navigate("/FileClaim/AddClaim");
    } else {
      console.log("not found");
       swal({
         icon: "error",
         title: "Oops...",
         text: "No Policy Number found",
       });
    //   alert("Mali mamsir walang ganun");
    }
  };
  return (
    <>
      <>
        <h1>File Claim</h1>
      </>
      {isAuth ? (
        <FileClaim policyNumber1={policyNumber} />
      ) : (
        <>
          <Container
            sx={{ display: "flex", height: 400, flexDirection: "column" }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Policy Number "
                type="number"
                defaultValue=""
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />

              <Button
                variant="contained"
                onClick={handleClick}
                sx={{ marginTop: 1 }}
              >
                Submit
              </Button>
            </Container>
          </Container>
        </>
      )}
    </>
  );
}