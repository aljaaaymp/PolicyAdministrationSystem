import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import * as React from "react";
import swal from "sweetalert";

import axios from "axios";
import { useEffect } from "react";
import NewPolicy from "./NewPolicy";

export default function AddPolicy() {
  const [accountnumber, setAccountNumber] = React.useState();
  const [isAuth, setIsAuth] = React.useState(false);

  const [users, setUsers] = React.useState([]);
  const getAll = async () => {
    console.log("first");
    await axios
      .get("http://192.168.2.129:8081/pas/getCustomer")
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
    const isExist = users.find((item) => item.id === parseInt(accountnumber));
    // console.log(isExist);

    if (isExist) {
      console.log("found");

      swal({
        title: "Welcome!",
        text: "Mr/Ms " + isExist.firstname + " " + isExist.lastname,
        icon: "success",
      });
      // alert("Welcome ka dito " + isExist.firstname);
      setIsAuth(true);
    } else {

        swal({
          icon: "error",
          title: "Oops...",
          text: "Account not found",
        });

      console.log("not found");
      // alert("Mali mamsir walang ganun");
    }
  };
  return (
    <>
      <>
        <h3>Step 2</h3>
        <h1>ADD POLICY</h1>
      </>
      {isAuth ? (
        <NewPolicy accountNumber1={accountnumber} />
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
                label="Account Number "
                type="number"
                defaultValue=""
                value={accountnumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />

              <Button
                variant="contained"
                X
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
