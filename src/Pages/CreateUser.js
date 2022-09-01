import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect } from "react";

import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
   let Navigate = useNavigate();

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [allUsers, setAllUsers] = React.useState([]);

  const getAll = async () => {
    console.log("first");
    await axios
      .get("http://192.168.2.129:8081/pas/getCustomer")
      .then((res) => {
        const resp2 = res.data;
        setAllUsers(resp2);
        // console.log(allUsers)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleClick = (e) => {
    const isExist = allUsers.find(
      (item) =>
        item.firstname === firstname &&
        item.lastname === lastname &&
        item.address === address
    );
    if (isExist) {
      swal({
        icon: "error",
        title: "Oops...",
        text: "Account Already Existing",
      });
      // alert("Account Already Exists!");
    } else {
      const customer = { firstname, lastname, address };

      if (firstname === "" || lastname === "" || address === "") {
         swal({
           icon: "error",
           title: "Oops...",
           text: "PLEASE FILL THE DETAILS",
         });
        // alert("PLEASE FILL THE DETAILS");
      } else {
        fetch("http://192.168.2.129:8081/pas/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customer),
        }).then(() => {
          axios
            .get("http://192.168.2.129:8081/pas/getCustomer")
            .then((res) => {
              const respid = res.data.pop();
              const resp = res.data;
              // console.log(resp);
              // console.log(resp.id);

              swal({
                title: "Congratulations!",
                text: "Your Account number is " + respid.id,
                icon: "success",
              });
              //  swal("Your Account number is " + respid.id, "success");
              console.log("Account has been added");
              getAll();
              Navigate("/");

            })
            .catch((err) => console.log(err));
        }, []);
      }
      setFirstName("");
      setLastName("");
      setAddress("");
      getAll();
    }
  };
  const stepStyle = {
    padding: "7px",
    textAlign: "left",
    marginLeft: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };
  return (
    <>
      <>
        <h3 style={stepStyle}>Step 1</h3>
        <h1>Create your Account</h1>
      </>
      <Container>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "55ch" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="First name "
            defaultValue=""
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Last name "
            defaultValue=""
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Address"
            defaultValue=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>
      </Container>
      {/* <Link to="/"> */}
      <Button
        variant="contained"
        sx={{ width: 450 }}
        onClick={() => handleClick()}
      >
        Submit
      </Button>

      {/* </Link> */}
    </>
  );
}
