import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { assets } from "../../assets/assets";
import './Coreteam.css'

export default function Coreteam() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            position: "relative",
            height: "500px",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundImage: `url(${assets.coretem})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#ea44355e",
              zIndex: 1,
            },
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              zIndex: 2,
              position: "relative",
            }}
          >
            <h1 style={{ fontFamily: "Londrina Outline",fontSize:"100px" ,color:"white"}}>Core Team</h1>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
