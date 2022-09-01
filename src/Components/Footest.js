import Box from "@mui/material/Box";

export default function Footest  ()  {
  return (

   <Box
  textAlign="center"
  pt={{ xs: 5, sm: 10 }}
  pb={{ xs: 5, sm: 0 }}
  color={"black"}
  minHeight="100px"
>
  Aljay Pascual &reg; {new Date().getFullYear()}
</Box>

  );
};
