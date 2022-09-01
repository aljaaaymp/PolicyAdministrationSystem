import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { useEffect } from "react";

 const SearchedAccount = ({
   firstName,
   lastNameProps,
   addressProps,
   customerIdProps,
   policynumber,
   premiumCharge,
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
         <h1>Account Details</h1>
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
                 Account Number
               </Box>
               <Box component="div" style={fontStyle}>
                 First Name
               </Box>
               <Box component="div" style={fontStyle}>
                 Last Name
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
                 {customerIdProps}
               </Box>
               <Box component="div" style={boxStyle}>
                 {firstName}
               </Box>
               <Box component="div" style={boxStyle}>
                 {lastNameProps}
               </Box>
             </Container>
             <Container
               sx={{
                 display: "flex",
                 flexDirection: "row",
                 height: "25px",
                 justifyContent: "center",
                 marginTop: 2,
               }}
             >
               <Box component="div" style={fontStyle}>
                 Address
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
                 {addressProps}
               </Box>
             </Container>
             <Container
               sx={{
                 display: "flex",
                 flexDirection: "row",
                 height: "25px",
                 justifyContent: "center",
                 marginTop: 2,
               }}
             >
               <Box component="div" style={fontStyle}>
                 Policy Number
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
                 {policynumber}
               </Box>
             </Container>
             <Container
               sx={{
                 display: "flex",
                 flexDirection: "row",
                 height: "25px",
                 justifyContent: "center",
                 marginTop: 2,
               }}
             >
               <Box component="div" style={fontStyle}>
                 Premium Charge
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
                 P{premiumCharge}
               </Box>
             </Container>
           </Container>
         </Container>
       </Container>
     </>
   );
 };

export default SearchedAccount