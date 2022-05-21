import React from "react";
import { Grid, Box } from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";
import Section from "./SectionGenerator";
import RenderAvatar from "./Avatar";

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
    name: "location",
    label: "Location",
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
  const topic = "Personal";

  return (
    <>
      <Grid container alignItems="center" columnSpacing={3}>
        <Grid item  xs={3}>
          <Box>
               <RenderAvatar
              getData={getData}
              topic="Personal"
            />
            </Box>
        </Grid>
        <Grid item xs={9} alignContent="space-around">
          <Section
            getData={(e) => getData(e, topic)}
            content={Headercontent}
            dynamic={false}
          />
        </Grid>
      </Grid>
      <Box pt={3}>
        <Section
          getData={(e) => getData(e, topic)}
          content={Bodycontent}
          dynamic={false}
        />
      </Box>
    </>
  );
}
