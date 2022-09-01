import React from "react";
import { Container } from "@mui/system";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import swal from "sweetalert";

const FileClaim = (policyNumber1) => {
  let Navigate = useNavigate();
  const [dateAccident, setDateOfAccident] = useState(new Date());
  const [addressOfAccident, setAddressOfAccident] = useState("");
  const [descriptionOfAccident, setDescriptionOfAccident] = useState("");
  const [descriptionOfDamage, setDescriptionOfDamage] = useState("");
  const [estimatedCostOfRepair, setCostOfRepair] = useState();
  const inputPolicy = policyNumber1.policyNumber1;

  const claim = {
    dateAccident,
    addressOfAccident,
    descriptionOfAccident,
    descriptionOfDamage,
    estimatedCostOfRepair,
    inputPolicy,
  };
  
  const handleClick = (e) => {
      fetch("http://192.168.2.129:8081/pas/fileClaim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(claim),
      }).then(() => {
        axios
          .get("http://192.168.2.129:8081/pas/getFileClaim")
          .then((res) => {
            const respid = res.data.pop();
            const resp = res.data;
            // console.log(resp);
            // console.log(resp.id);

             swal({
               title: "Congratulations!",
               text: "Your Claim Number is " + respid.claimNo,
               icon: "success",
             });

            // alert("Your Claim Number is " + respid.claimNo);
            console.log("File Claim has been added");
          })
          .catch((err) => console.log(err));
      }, []);
  
    Navigate("/PolicyAdministrationSystem");
  };
  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            height: "550px",
            background: "white",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "left",
              alignContent: "center",
              marginTop: 2,
              flexDirection: "column",
            }}
          >
            <Container
              sx={{ display: "flex", marginTop: 1, justifyContent: "center" }}
            >
              <TextField
                id="filled-basic"
                label="Policy Number"
                variant="filled"
                fullWidth
                sx={{
                  border: "1px groove",
                  justifyContent: "center",
                  width: "50%",
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={inputPolicy}
                // onChange={(e) => setPolicyLink(e.target.value)}
              />{" "}
            </Container>
            <Container
              sx={{ display: "flex", marginTop: 1, justifyContent: "center" }}
            >
              <TextField
                id="standard-basic"
                type="date"
                label="Date of Accident"
                variant="standard"
                fullWidth
                sx={{
                  border: "1px groove",
                  justifyContent: "center",
                  width: "50%",
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={dateAccident}
                onChange={(e) => setDateOfAccident(e.target.value)}
              />{" "}
            </Container>

            <Container
              sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}
            >
              <TextField
                id="standard-basic"
                label="Address of Accident"
                variant="standard"
                multiline={true}
                fullWidth
                sx={{ border: "1px groove", width: "50%" }}
                value={addressOfAccident}
                onChange={(e) => setAddressOfAccident(e.target.value)}
              />{" "}
            </Container>
            <Container
              sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}
            >
              <TextField
                id="standard-basic"
                label="Description of Accident"
                variant="standard"
                multiline={true}
                fullWidth
                sx={{ border: "1px groove", width: "50%" }}
                value={descriptionOfAccident}
                onChange={(e) => setDescriptionOfAccident(e.target.value)}
              />{" "}
            </Container>
            <Container
              sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}
            >
              <TextField
                id="standard-basic"
                label="Description of damage to vehicle"
                variant="standard"
                multiline={true}
                fullWidth
                sx={{ border: "1px groove", width: "50%" }}
                value={descriptionOfDamage}
                onChange={(e) => setDescriptionOfDamage(e.target.value)}
              />{" "}
            </Container>
            <Container
              sx={{ display: "flex", marginTop: 1, justifyContent: "center" }}
            >
              <TextField
                id="standard-basic"
                label="Estimated Cost of Repair"
                variant="standard"
                type="number"
                fullWidth
                sx={{
                  border: "1px groove",
                  justifyContent: "center",
                  width: "50%",
                }}
                value={estimatedCostOfRepair}
                onChange={(e) => setCostOfRepair(e.target.value)}
              />{" "}
            </Container>
            <Container
              sx={{ display: "flex", marginTop: 1, justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ width: "50%" }}
                onClick={() => handleClick()}
              >
                Submit
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default FileClaim;
