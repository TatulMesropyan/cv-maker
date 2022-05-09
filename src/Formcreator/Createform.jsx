import React from "react";
import { AppBar, Typography, Button, Container } from "@mui/material";
import helper from "../Components/helper";
import Personal from "./Personal";
import Education from "./Education";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Languages from "./Languages";
import Work from "./Work";
import Project from "./Project";
import store from "../redux/store";
const Createform = () => {
  const handleSubmit = () => {
    console.log(store.getState());
  };
  return (
    <Container className="container" component="main" maxWidth="md">
      <AppBar>
        <Typography
          align="center"
          gutterBottom={true}
          noWrap={true}
          variant="h5"
          sx={{ fontWeight: "bold" }}
        >
          {helper.profileForm}
        </Typography>
      </AppBar>
      <div style={{ paddingTop: "50px" }}>
        <Personal />
        <Education />
        <Skills />
        <Certificates />
        <Languages />
        <Project />
        <Work />
        <Button variant="contained" onClick={handleSubmit} color="success">
          {helper.save}
        </Button>
      </div>
    </Container>
  );
};

export default Createform;
