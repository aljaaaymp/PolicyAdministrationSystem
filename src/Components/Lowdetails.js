import * as React from "react";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link, Route } from "react-router-dom";


function Lowdetails() {
  const style2 = {
    padding: "7px",
    textAlign: "left",
  };

  const sx = {
    right: 15,
    marginLeft: "2em",
    width: 350,
    height: 100,
    backgroundColor: "#E0E0E0",
    color: "black",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7],
      border: "1px dashed grey",
    },
  };
    const sx1 = {
      marginTop: 10,
      right: 15,
      marginLeft: "2em",
      width: 350,
      height: 100,
      backgroundColor: "#E0E0E0",
      color: "black",
      fontSize: "15px",
      "&:hover": {
        backgroundColor: "primary.main",
        opacity: [0.9, 0.8, 0.7],
        border: "1px dashed grey",
      },
    };


  const sx3 = {
    
    width: 350,
    height: 400,
    backgroundColor: "#E0E0E0",
    color: "black",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7],
      border: "1px dashed grey",
    },
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box element="body">
          <h2 style={style2}> Let's Start here! </h2>
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Link to="/CreateUser">
          <Button style={sx}>
            Create User
            <PersonAddAltIcon />
          </Button>
        </Link>
        <Link to="/AddPolicy">
          <Button style={sx}>
            Add a policy
            <AddModeratorIcon />
          </Button>
        </Link>
        <Link to="/FileClaim">
          <Button style={sx}>
            Report a claim
            <TextSnippetIcon />
          </Button>
        </Link>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {" "}
        <Link to="/SearchAccount">
          <Button style={sx1}>
            Search User
            <PersonAddAltIcon />
          </Button>
        </Link>
        <Link to="/SearchPolicy">
          <Button style={sx1}>
            Search a policy
            <AddModeratorIcon />
          </Button>
        </Link>
        <Link to="/getFileClaim">
          <Button style={sx1}>
            Search a claim
            <TextSnippetIcon />
          </Button>
        </Link>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box element="body">
          <h2 style={style2}> You can Count on us </h2>
          <p style={style2}>
            Have you ever had to file a loss and damage claim or deal with an
            inconvenience roadside emergency? Discover the finest auto insurance
            option that quickly addresses your needs. We offer a range of
            packages, from the most basic to the most comprehensive, together
            with special advantages and services you can rely on for emergency
            support and prompt claims processing.
          </p>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h2 style={style2}> Our Insurance</h2>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <Box style={sx3}>
          <h2>Compulsory Third Party Insurance (CTPL) </h2>
          <p style={{ textAlign: "left", marginLeft: "2em" }}>
            Compulsory Third Party Liability (CTPL) <br />
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "2em",
              lineHeight: "2.0",
            }}
          >
            The legal requirement for third-party liability insurance at the
            time of car registration. This offers defense against lawsuits
            brought about by the demise or physical harm of third parties.
          </p>
        </Box>
        <Box style={sx3}>
          <h2>6 Wheels (CTPL) </h2>
          <p style={{ textAlign: "left", marginLeft: "2em" }}>
            Compulsory Third Party Liability (CTPL) <br />
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "2em",
              lineHeight: "2.0",
            }}
          >
            Protection against both legal obligations that may result from the
            use of the covered motorbike and private vehicle, as well as loss or
            damage to the insured vehicle.
          </p>
          <p
            style={{
              textAlign: "left",
              marginLeft: "2em",
              lineHeight: "2.0",
            }}
          >
            A separate Private Car Policy and a Motorcycle Policy are included
            in the package.
          </p>
        </Box>
        <Box style={sx3}>
          <h2>You Choose</h2>
          <p
            style={{
              textAlign: "left",
              marginLeft: "2em",
              lineHeight: "2.0",
            }}
          >
            Based on the insured's desired coverage preferences, offers
            protection.
          </p>
        </Box>
      </Container>
    </>
  );
}
export default Lowdetails;
