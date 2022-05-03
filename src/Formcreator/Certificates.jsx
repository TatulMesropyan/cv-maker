import React, { useState } from "react";
import helper from "../Components/helper";
import "../App.css";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Certificates = () => {
  const [certificate, setCertificate] = useState([
    {
      name: "",
    },
  ]);
  const removeCertificateList = (index) => {
    const list = [...certificate];
    list.splice(index, 1);
    setCertificate(list);
  };
  const certificatesHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...certificate];
    list[index][name] = value;
    setCertificate(list);
  };
  const addCertificateList = () => {
    setCertificate([
      ...certificate,
      {
        certificate: "",
      },
    ]);
  };
  const handleSubmit = () => {
    console.log(certificate);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ pt: 3, p3: 4 }}
    >
      <Card sx={{ mt: 4 }} raised={true}>
        <CardContent>
          <Typography
            gutterBottom={true}
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            {helper.certAndCourse}
          </Typography>
          {certificate.map((singleCerteficate, index) => (
            <div key={index}>
              <Grid>
                <TextField
                  value={singleCerteficate.skillDiscription}
                  label={helper.certAndCourse}
                  name="certificate"
                  onChange={(e) => certificatesHandler(e, index)}
                />
              </Grid>
            </div>
          ))}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={addCertificateList}
            >
              {helper.addButton}
            </Button>
            {certificate.length > 1 && (
              <Button
                variant="contained"
                color="error"
                onClick={removeCertificateList}
              >
                {helper.removeButton}
              </Button>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Certificates;
