import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} color="white">
        <Container maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={4} color={"black"}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/Home">Contact</Link>
              </Box>
              <Box>
                <Link href="/Home">Support</Link>
              </Box>
              <Box>
                <Link href="/Home">Privacy</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} color={"black"}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/Home">Login</Link>
              </Box>
              <Box>
                <Link href="/Home">Register</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} color={"black"}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/Home">Backup</Link>
              </Box>
              <Box>
                <Link href="/Home">History</Link>
              </Box>
              <Box>
                <Link href="/Home">Roll</Link>
              </Box>
            </Grid>
          </Grid>
        
        </Container>
      </Box>
    </footer>
  );
}
export default Footer;