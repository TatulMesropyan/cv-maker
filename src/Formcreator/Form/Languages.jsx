import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Section from "./SectionGenerator";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";

const content = [
  {
    grid: 12,
    name: "languages",
    label: "language",
    inputType: "select",
  },
];

export default function Languages({ getData }) {
  const topic = "Languages";

  const handleData = (data) => {
    let val = {
      topic: topic,
      body: [{ languages: data.map((_v) => _v.languages) }],
    };
    getData(val, topic);
  };
  return (
    <>
      <Grid container columnSpacing={2} pt={4}>
        <Grid item xs={12}>
          <Box className="line" pb={2}>
            <Typography fontSize="20px">Languages</Typography>
          </Box>
        </Grid>
      </Grid>
      <Section getData={handleData} content={content} />
    </>
  );
}
