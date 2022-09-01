import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { useEffect } from "react";

const SearchedClaim = ({
  inputPolicy,
  claimNo,
  dateAccident,
  descriptionOfAccident,
  descriptionOfDamage,
  estimatedCostOfRepair,
}) => {
  const boxStyle = {
    overflow: "hidden",
    my: 2,
    p: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: "2em",
    border: "2px solid",
    fontSize: "0.875rem",
    fontWeight: "700",
  };
    const boxStyle2 = {
      overflow: "hidden",
      my: 2,
      p: 1,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      marginLeft: "2em",
      border: "2px solid",
      fontSize: "0.875rem",
      fontWeight: "700",
      textAlign: "justify",
      height: "100px"
    };
  const fontStyle = {
    overflow: "hidden",
    my: 2,
    p: 1,
    width: "Autocomplete",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: "2em",
    fontSize: "0.875rem",
    fontWeight: "700",
  };

  return (
    <>
      <>
        <h1>Claim Details</h1>
      </>

      <Container sx={{ display: "flex" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            height: "500px",
            background: "white",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "left",
              alignContent: "center",
              marginTop: 8,
              flexDirection: "column",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "25px",
                justifyContent: "space-around",
              }}
            >
              <Box component="div" style={fontStyle}>
                Policy Number
              </Box>
              <Box component="div" style={fontStyle}>
                Claim Number
              </Box>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "25px",
                justifyContent: "space-around",
              }}
            >
              <Box component="div" style={boxStyle}>
                {inputPolicy}
              </Box>
              <Box component="div" style={boxStyle}>
                {claimNo}
              </Box>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "25px",
                justifyContent: "space-around",
                marginTop: 2,
              }}
            >
              <Box component="div" style={fontStyle}>
                Date of Accident
              </Box>
              <Box component="div" style={fontStyle}>
                Cost of Repair
              </Box>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "25px",
                justifyContent: "center",
              }}
            >
              <Box component="div" style={boxStyle}>
                {dateAccident}
              </Box>
              <Box component="div" style={boxStyle}>
                {estimatedCostOfRepair}
              </Box>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "25px",
                justifyContent: "space-around",
                marginTop: 2,
              }}
            >
              <Box component="div" style={fontStyle}>
                Description of Accident
              </Box>
              <Box component="div" style={fontStyle}>
                Description of Damage
              </Box>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "25px",
                justifyContent: "center",
              }}
            >
              <Box component="div" style={boxStyle2}>
                {descriptionOfAccident}
              </Box>
              <Box component="div" style={boxStyle2}>
                {descriptionOfDamage}
              </Box>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default SearchedClaim;
