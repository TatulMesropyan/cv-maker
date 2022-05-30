import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Section from "./SectionGenerator";
import formatDate from "../../Helpers/utils";
import useSessionData from "../../Helpers/useSessionData";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";

const content = [
  {
    grid: 6,
    name: "workplace_name",
    label: "Workplace",
    inputType: "input",
  },
  {
    grid: 6,
    name: "workplace_position",
    label: "Position",
    inputType: "input",
  },
  {
    grid: 6,
    name: "workplace_country",
    label: "Country",
    inputType: "input",
    textType : "noNumber",
  },
  {
    grid: 6,
    name: "workplace_city",
    label: "City",
    inputType: "input",
    textType : "noNumber",
  },
  {
    grid: 6,
    name: "workplace_from",
    label: "From",
    inputType: "date",
  },
  {
    grid: 6,
    name: "workplace_to",
    label: "To",
    inputType: "date",
  },
  {
    grid: 12,
    name: "workplace_description",
    label: "Description",
    inputType: "input",
		multiline : true,
  },
];

export default function Workplace({ getData }) {
	const [defaultValues, setDefaultValues, getValue] = useSessionData();
  const topic = "Experience";

  const handleData = (data) => {
    let val = {
      topic: topic,
      body: data.map((_v) => {
        return {
          subtopic: _v.workplace_name,
          secondarySubtopic: _v.workplace_position,
          date: formatDate(_v.wrokplace_from, _v.workplace_to),
          secondaryText: _v.workplace_description,
          location: _v.workplace_country + ", " + _v.workplace_city,
        };
      }),
    };
    getData(val, topic, data);
  };

  return (
    <>
      <Grid container columnSpacing={2} pt={4}>
        <Grid item xs={12}>
          <Box className="line" pb={2}>
            <Typography fontSize="20px">{topic}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Section
        getData={handleData}
        content={content}
				defaultValues={getValue(["main", topic])}
        sizeLimit={50}
        divisionLine={true}
      />
    </>
  );
}
