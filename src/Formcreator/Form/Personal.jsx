import React, { useState, useEffect, useRef } from "react";
import { Grid, Box } from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";
import Section from "./SectionGenerator";
import RenderAvatar from "./Avatar";
import Picture from "../../images/img.png";

const Headercontent = [
  {
    grid: 12,
    name: "fname",
    label: "First Name",
    inputType: "input",
  },
  {
    grid: 12,
    name: "lname",
    label: "Last Name",
    inputType: "input",
  },
];

const Bodycontent = [
  {
    grid: 6,
    name: "email",
    label: "Email Address",
    inputType: "input",
  },
  {
    grid: 6,
    name: "phone",
    label: "Phone Number",
    inputType: "input",
  },
  {
    grid: 6,
    name: "country",
    label: "Country",
    inputType: "input",
  },
  {
    grid: 6,
    name: "city",
    label: "City",
    inputType: "input",
  },
  {
    grid: 6,
    name: "position",
    label: "Position",
    inputType: "input",
  },
  {
    grid: 6,
    name: "birthday",
    label: "Birthday",
    inputType: "date",
  },
];

export default function Personal({ getData }) {
  const currentImage = useRef();
  return (
    <>
      <Grid container columnSpacing={3}>
        <Grid item xs={3}>
          <Box
            sx={{
              boxShadow: 1,
              backgroundColor: "gray",
              alignContent: "center",
              borderRadius: "50%",
              width: "200px",
              height: "200px",
            }}
          >
              <img
                src={Picture}
                ref={currentImage}
                alt="pox"
                width="200px"
                height="200px"
              />
            {/* {currentImage.current ? (
              <img src={currentImage} alt="blyat" />
            ) : ( */}
              <RenderAvatar
                getData={getData}
                currentImage={currentImage}
                topic="Personal"
              />
            {/* )} */}
          </Box>
        </Grid>
        <Grid item xs={9} alignContent="space-around">
          <Section
            getData={getData}
            topic="Personal"
            content={Headercontent}
            dynamic={false}
          />
        </Grid>
      </Grid>
      <Box pt={3}>
        <Section
          getData={getData}
          topic="Personal"
          content={Bodycontent}
          dynamic={false}
        />
      </Box>
    </>
  );
}
