import React from "react";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SearchedClaim from "./SearchedClaim";
import swal from "sweetalert";

const SearchFileClaim = () => {
  const [auth, setAuth] = useState(false);

  const [inputPolicy, setInputPolicy] = useState()
  const [claimNo, setClaimNo] = useState()
  const [dateAccident, setDateAccident] = useState()
  const [descriptionOfAccident, setDescriptionOfAccident] = useState()
  const [descriptionOfDamage, setDescriptionOfDamage] = useState()
  const [estimatedCostOfRepair, setEstimatedCostOfRepair] = useState()

  const [fileClaims, setFileClaims] = useState([]);
  const [claimNumber, setClaimNumber] = useState();
  const getAll = async () => {
    console.log("first");
    await axios
      .get("http://192.168.2.129:8081/pas/getFileClaim")
      .then((res) => {
        const resp2 = res.data;
        setFileClaims(resp2);
        //    console.log(resp2);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleClick = (e) => {
    const isExist = fileClaims.find(
      (item) => item.claimNo === parseInt(claimNumber)
    );
    if (isExist) {
      console.log("claim found");
      setClaimNo(isExist.claimNo)
      setInputPolicy(isExist.inputPolicy)
      setDateAccident(isExist.dateAccident)
      setDescriptionOfAccident(isExist.descriptionOfAccident)
      setDescriptionOfDamage(isExist.descriptionOfDamage)
      setEstimatedCostOfRepair(isExist.estimatedCostOfRepair)
      setAuth(true);


    } else 
     swal({
       icon: "error",
       title: "Oops...",
       text: "No Claim Number found",
     });
    // alert("no claim number found");
  };
  return (
    <>
      <>
        <h1>Search File Claim</h1>
      </>
      {auth ? (
        <SearchedClaim
          inputPolicy={inputPolicy}
          claimNo={claimNo}
          dateAccident={dateAccident}
          descriptionOfAccident={descriptionOfAccident}
          descriptionOfDamage={descriptionOfDamage}
          estimatedCostOfRepair={estimatedCostOfRepair}
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
                label="Claim Number"
                type="number"
                value={claimNumber}
                onChange={(e) => setClaimNumber(e.target.value)}
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
};

export default SearchFileClaim;
