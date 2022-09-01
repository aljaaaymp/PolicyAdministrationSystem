import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SearchedPolicy from "./SearchedPolicy"
import swal from "sweetalert";


const SearchPolicy = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [premiumCharge, setPremiumCharge] = useState();

  const [policyHolders, setPolicyHolders] = useState([]);
  const [policyNumber, setPolicyNumber] = useState();
  const [vehicles, setVehicles] = useState([]);
  const [auth, setAuth] = useState(false)
  const [accountNumber, setAcountNumber] = useState()
  const getAll = async () => {
    console.log("first");
    await axios
      .get("http://192.168.2.129:8081/pas/getPolicyHolder")
      .then((res) => {
        const resp2 = res.data;
        setPolicyHolders(resp2);
          // console.log(resp2);
      });
    await axios
      .get("http://192.168.2.129:8081/pas/getVehicle")
      .then((res) => {
        const resp2 = res.data;
        setVehicles(resp2);
        // console.log("vehicle", resp2);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleClick = (e) => {
    const isExist = policyHolders.find(
      (item) => item.id === parseInt(policyNumber)
    );
    const isExist2 = vehicles.find(
      (item) => item.policynumber === parseInt(policyNumber)
    );

    if (isExist2) {
      console.log("Account found " + isExist.id);
      setFirstName(isExist.firstName);
      setLastName(isExist.lastName);
      setAddress(isExist.address);
      setEffectiveDate(isExist.effectiveDate);
      setMake(isExist2.make);
      setModel(isExist2.model);
      setPremiumCharge(isExist2.premiumCharge);
      setExpirationDate(isExist.expDate);
      setAcountNumber(isExist.accountNumber);
      setAuth(true);
    } else {

        swal({
          icon: "error",
          title: "Oops...",
          text: "User not found",
        });
      // alert("User not found");
      console.log("Users not found");
    }
  };
  return (
    <>
      <>
        {" "}
        <h1>SearchPolicy</h1>
      </>

      {auth ? (
        <SearchedPolicy
          policyNumber={policyNumber}
          firstName={firstName}
          lastName={lastName}
          address={address}
          effectiveDate={effectiveDate}
          make={make}
          model={model}
          premiumCharge={premiumCharge}
          expirationDate={expirationDate}
          accountNumber={accountNumber}
        />
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
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
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

export default SearchPolicy;
