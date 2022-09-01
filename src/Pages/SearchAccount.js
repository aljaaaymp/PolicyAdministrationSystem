import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SearchedAccount from "./SearchedAccount";
import swal from "sweetalert";

export default function SearchAccount() {
  
  
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [customerId, setCustomerId] = useState();
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false)
  const [policyHolders, setPolicyHolders] = useState([])
  const [policyNumber, setPolicyNumber] = useState();
  const [premiumCharge, setPremiumCharge] = useState();
  const getAll = async () => {
    console.log("first");
    await axios
      .get("http://192.168.2.129:8081/pas/getCustomer")
      .then((res) => {
        const resp2 = res.data;
        setUsers(resp2);
        // console.log(users);
        
      });
        await axios
          .get("http://192.168.2.129:8081/pas/getVehicle")
          .then((res) => {
            const resp2 = res.data;
            setPolicyHolders(resp2);
            // console.log(resp2);
          })
          .catch((err) => console.log(err));

  };

  useEffect(() => {
    getAll();
  }, []);

  const handleClick = (e) => {
    getAll();

    const isExist = users.find(
      (item) => item.firstname === firstname && item.lastname === lastname
    );
    if (isExist) {
      // console.log("Account found " + isExist.id + " " + isExist.firstname + " " + isExist.lastname + " " + isExist.address);
      setFirstName(isExist.firstname);
      setLastName(isExist.lastname);
      setCustomerId(isExist.id);
      setAddress(isExist.address);
      
 const isExist1 = policyHolders.find(
   (item) => item.accountnumber === isExist.id
 );
      if (isExist1){
        
        setPolicyNumber(isExist1.policynumber)
        setPremiumCharge(isExist1.premiumCharge);
      }
      setIsAuth(true)

    
    } else {
      swal({
        icon: "error",
        title: "Oops...",
        text: "User not found",
      });
      // alert("User not found");
    }

  };
  

  return (
    <>
      <>
        <h1>Search your Account</h1>
      </>
      {isAuth ? (
        <SearchedAccount
          firstName={firstname}
          lastNameProps={lastname}
          addressProps={address}
          customerIdProps={customerId}
          policynumber={policyNumber}
          premiumCharge={premiumCharge}
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
                sx={{ marginTop: 1 }}
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
