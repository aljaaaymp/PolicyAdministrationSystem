import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { border, Container } from "@mui/system";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Vehicle from "./Vehicle";

export default function NewPolicy(accountNumber1) {
  let Navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setBirthDate] = useState(new Date(""));
  const [licenseNumber, setLicenseNumber] = useState("");
  const [dateOfLicenseNumber, setDateOfLicense] = useState(new Date(""));
  const [effectiveDate, setEffectiveDate] = useState(new Date(""));
  const accountNumber = accountNumber1.accountNumber1;
  const [isAuth, setIsAuth] = useState(false);

  function addMonths(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  }
  var expDate = addMonths(new Date(effectiveDate), 6).toDateString();

  const customer = {
    firstName,
    lastName,
    address,
    dateOfBirth,
    licenseNumber,
    dateOfLicenseNumber,
    effectiveDate,
    expDate,
    accountNumber,
  };
  const store = async () => {
    await axios
      .post("http://192.168.2.129:8081/pas/addpolicyHolder", customer)
      .then((res) => {
        // console.log(res.data);
        console.log("User has been added");
      })
      .catch((err) => console.log(err));
  };

  const [checkBox, setCheckBox] = useState(false);
  const handleClick = (e) => {
    swal({
      title: "Congratulations!",
      text: "Your Expiration date is " + expDate,
      icon: "success",
    });
    // alert("Your Expiration date is " + expDate);
    store();
    setIsAuth(true);

    // Navigate("/Vehicle");
  };

  return (
    <>
      <>
        <h1>New Policy</h1>
      </>
      {isAuth ? (
        <Vehicle accountNumber1={accountNumber} />
      ) : (
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
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "50px",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    label=" First Name"
                    variant="standard"
                    firstname="name"
                    fullWidth
                    sx={{ border: "1px groove" }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label=" Last Name"
                    variant="standard"
                    lastname="name"
                    fullWidth
                    sx={{ marginLeft: "1em", border: "1px groove" }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />{" "}
                </Container>

                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "50px",
                    justifyContent: "center",
                    marginTop: "1em",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    label=" Address"
                    variant="standard"
                    width="100%"
                    address="address"
                    fullWidth
                    sx={{ border: "1px groove" }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />{" "}
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "50px",
                    width: "100%",
                    marginTop: "1em",
                    justifyContent: "space-around",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    type="date"
                    label="Birthday"
                    variant="standard"
                    fullWidth
                    sx={{ border: "1px groove" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={dateOfBirth}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    type="number"
                    label="License Number"
                    variant="standard"
                    lastname="name"
                    fullWidth
                    sx={{ marginLeft: "1em", border: "1px groove" }}
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                  />{" "}
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "50px",
                    width: "100%",
                    marginTop: "1em",
                    justifyContent: "space-around",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    type="date"
                    min="2018-01-01"
                    max="2018-12-31"
                    label="Policy Start Date"
                    variant="standard"
                    fullWidth
                    sx={{ border: "1px groove" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={effectiveDate}
                    onChange={(e) => setEffectiveDate(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    type="date"
                    label="Date of License Number Issued"
                    variant="standard"
                    fullWidth
                    sx={{ border: "1px groove", marginLeft: "1em" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={dateOfLicenseNumber}
                    onChange={(e) => setDateOfLicense(e.target.value)}
                  />
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "300px",
                    width: "94%",
                    marginTop: "1em",
                    justifyContent: "space-around",
                    border: "1px solid",
                    overflow: "scroll",
                    textAlign: "justify",
                  }}
                >
                  <span>
                    Information from credit, insurance loss history, and other
                    consumer data may be utilized to estimate prices and
                    establish eligibility. We or a third party may also create
                    an insurance score based on credit using the data. kindly
                    review our{" "}
                    <a
                      data-onex-opensdrawer="welcomeInfoUsePolicyAndDisclosureModal"
                      onclick="oneX.Drawer.showDrawer(this.id)"
                      href="javascript:void(0)"
                      class="-oneX-link--inline"
                      id="notice-insurance"
                    >
                      Warning Regarding Insurance Information Collection
                      Procedures
                    </a>
                    . Your driving history, prior insurance claims, credit
                    history, and other personal data are all acquired when you
                    apply for insurance. Since this information is shared
                    throughout State Farm affiliates, we won't need to ask you
                    for it again, for instance. Click here to read the{" "}
                    <a
                      href="https://www.statefarm.com/customer-care/privacy-security/privacy"
                      class="-oneX-link--inline"
                      target="_blank"
                    >
                      Notice of Privacy Policy
                    </a>
                    .Call a State Farm agent at 1-800-865-6035 if you'd like to
                    restrict who sees this information. <br />
                    <br />
                    By moving forward with your quote, you are giving express
                    permission by electronic signature for State Farm Mutual
                    Automobile Insurance Company, its subsidiaries and
                    affiliates ("State Farm") or an independent State Farm agent
                    to contact you by phone (via call and/or text messages)
                    and/or email for marketing purposes regarding insurance
                    products and services using the phone number and/or email
                    address you have provided to State Farm, even if your pho
                    Additionally, you acknowledge that such contacts may be made
                    by automatic calling systems or prerecorded audio messages
                    (message and data rates may apply). Purchase is not subject
                    to your approval. Click Next: Vehicles to continue with your
                    purchase. You concur by moving forward.
                  </span>{" "}
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => setCheckBox(e.target.checked)}
                      />
                    }
                    label="I have read and acknowledge this disclosure."
                  />
                </Container>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    disabled={!checkBox}
                    className="submit-button"
                    sx={{
                      background: "#E8E8E8	",
                      color: "black",
                      borderRadius: 4,
                      fontSize: 15,
                      border: 2,
                    }}
                    onClick={() => handleClick()}
                  >
                    Next: Vehicle
                  </Button>
                </Container>
              </Container>
            </Container>
          </Container>
        </>
      )}
    </>
  );
}