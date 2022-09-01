import React from 'react'
import {  Container } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import swal from "sweetalert";

const Vehicle = (accountNumber1) => {
  let currentYear = new Date().getFullYear();

  let Navigate = useNavigate();
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [yearModel, setYearModel] = React.useState("");
  const [type, setType] = React.useState("");
  const [fuel, setFuel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [purchasePrice, setPurchasePrice] = React.useState("");
  const [policynumber, setPolicyNumber] = React.useState();
  const [premiumCharge, setPremiumCharge] = React.useState();
  const accountnumber = accountNumber1.accountNumber1;

  const vehicleSave = {
    make,
    model,
    yearModel,
    type,
    fuel,
    color,
    purchasePrice,
    premiumCharge,
    policynumber,
    accountnumber,
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    axios
      .get("http://192.168.2.129:8081/pas/getPolicyHolder")
      .then((res) => {
        const respid = res.data.pop();
        // console.log(resp);
        // console.log(resp.id);

        let setLicenseYear;
        setPolicyNumber(respid.id);
        // console.log("policynumber from policy holder " + respid.id)
        setLicenseYear = respid.dateOfLicenseNumber;
        const spliter = setLicenseYear.split("-");
        let splitYear = spliter[0];

        let finalDlx = currentYear - parseInt(splitYear);

        setPremiumCharge(
          purchasePrice * getVehiclePriceFactor() +
            purchasePrice / 100 / finalDlx
        );
        let storeCharge =
          purchasePrice * getVehiclePriceFactor() +
          purchasePrice / 100 / finalDlx;
        // console.log(storeCharge);
          storeCharge = storeCharge.toFixed(2);

        swal({
          title: "Congratulations!",
          text: "Premium Charge : " + storeCharge,
          icon: "success",
        });
        // alert("ETO ANG PRESYO NANDITO P" + storeCharge + " PESOS");
      })
      .catch((err) => console.log(err));
  };
  const close = () => {
    setOpen(false);
    // console.log(currentYear);
  };
  const handleClose = () => {
    fetch("http://192.168.2.129:8081/pas/addVehicle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicleSave),
    }).then(() => {
      axios
        .get("http://192.168.2.129:8081/pas/getVehicle")
        .then((res) => {
          const respid = res.data.pop();
          const resp = res.data;
          // console.log(resp);
          // console.log(resp.id);
          swal({
            title: "Congratulations!",
            text: "Your policy number is " + respid.policynumber,
            icon: "success",
          });
          // alert("Your policy number is " + respid.policynumber);
          console.log("Vehicle has been added");
        })
        .catch((err) => console.log(err));
    }, []);
    setOpen(false);

    setMake("");
    setModel("");
    setYearModel("");
    setType("");
    setFuel("");
    setColor("");
    setPurchasePrice("");
    Navigate("/PolicyAdministrationSystem");
  };
  function getVehiclePriceFactor() {
    let vehiclePriceFactor;
    let vehicleAge = currentYear - yearModel;
    if (vehicleAge < 1) {
      vehiclePriceFactor = 0.01;
    } else if (vehicleAge < 3) {
      vehiclePriceFactor = 0.008;
    } else if (vehicleAge < 5) {
      vehiclePriceFactor = 0.007;
    } else if (vehicleAge < 10) {
      vehiclePriceFactor = 0.006;
    } else if (vehicleAge < 15) {
      vehiclePriceFactor = 0.004;
    } else if (vehicleAge < 20) {
      vehiclePriceFactor = 0.002;
    } else {
      vehiclePriceFactor = 0.001;
    }
    return vehiclePriceFactor;
  }
  const handleChange = (event) => {
    setMake(event.target.value);
  };

  return (
    <>
      <h1>Adding Vehicle</h1>
      <Container sx={{ display: "flex" }}>
        <Container
          sx={{
            display: "flex",
            alignContent: "center",
            width: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            height: "550px",
            background: "white",
            flexDirection: "column",
          }}
        >
          <Container sx={{ display: "flex", marginTop: "1em", height: "50px" }}>
            <FormControl sx={{ minWidth: "50%" }}>
              <InputLabel style={{ marginLeft: "1em" }}>Make</InputLabel>
              <Select
                value={make}
                label="Age"
                onChange={handleChange}
                sx={{ border: "1px groove", marginLeft: "1em" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Honda"}>Honda</MenuItem>
                <MenuItem value={"Toyota"}>Toyota</MenuItem>
                <MenuItem value={"Ford"}>Ford</MenuItem>
                <MenuItem value={"Kia"}>Kia</MenuItem>
                <MenuItem value={"Suzuki"}>Suzuki</MenuItem>
                <MenuItem value={"Mitsubishi"}>Mitsubishi</MenuItem>
                <MenuItem value={"Cherry"}>Cherry</MenuItem>
                <MenuItem value={"Nissan"}>Nissan</MenuItem>
                <MenuItem value={"BMW"}>BMW</MenuItem>
                <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
                <MenuItem value={"Mazda"}>Mazda</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="standard-basic"
              label="Model"
              variant="standard"
              firstname="name"
              fullWidth
              sx={{ border: "1px groove", marginLeft: "1em" }}
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </Container>
          <Container sx={{ display: "flex", marginTop: "1em", height: "50px" }}>
            <TextField
              id="standard-basic"
              label="YEAR MODEL IDOLO."
              variant="standard"
              fullWidth
              type="number"
              sx={{ border: "1px groove", marginLeft: "1em" }}
              value={yearModel}
              onChange={(e) => setYearModel(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="URI NG KOTSE. SEDAN O SUV O AkO"
              variant="standard"
              fullWidth
              sx={{ border: "1px groove", marginLeft: "1em" }}
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Container>
          <Container sx={{ display: "flex", marginTop: "1em", height: "50px" }}>
            <TextField
              id="standard-basic"
              label="ANO GAS MO."
              variant="standard"
              fullWidth
              sx={{ border: "1px groove", marginLeft: "1em" }}
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="KULAY NETO MAMSIR."
              variant="standard"
              fullWidth
              sx={{ border: "1px groove", marginLeft: "1em" }}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              marginTop: "1em",
              height: "50px",
              // justifyContent: "center",
              marginLeft: "1em",
            }}
          >
            <TextField
              id="standard-basic"
              label="MAGKANO NABILI."
              variant="standard"
              type="number"
              sx={{
                border: "1px groove",
                width: "48%",
              }}
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              marginTop: "1em",
              height: "50px",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                background: "#E8E8E8",
                color: "black",
                borderRadius: 4,
                fontSize: 15,
                border: 2,
              }}
              onClick={() => handleClickOpen()}
            >
              Confirm
            </Button>
            <Dialog
              show={open}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Get / Buy policy?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={close}>No</Button>
                <Button onClick={handleClose} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Vehicle