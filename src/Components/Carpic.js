import Carpic2 from "../images/car.svg"
import Container from "@mui/material/Container";

function Carpic() {

    const Carstyle = {
      height: 500,
      width: 1300,
    };

    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <img src={Carpic2} style={Carstyle} />
      </Container>
    );
}
export default Carpic;
