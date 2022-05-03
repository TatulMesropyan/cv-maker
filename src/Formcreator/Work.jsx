import React, { useState } from "react";
import helper from "../Components/helper";
import "../App.css";
import {
  TextField,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Work = () => {
  const [workData, setWorkData] = useState([
    {
      name: "",
      position: "",
      earlyYear: "",
      lateYear: "",
      description: "",
      locationCity: "",
      locationCountry: "",
    },
  ]);

  const workDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...workData];
    list[index][name] = value;
    setWorkData(list);
  };
  const addWorkList = () => {
    setWorkData([
      ...workData,
      {
        name: "",
        earlyYear: "",
        lateYear: "",
        description: "",
        locationCity: "",
        locationCountry: "",
      },
    ]);
  };
  const workListRemover = (index) => {
    const list = [...workData];
    list.splice(index, 1);
    setWorkData(list);
  };
  const handleSubmit = () => {
    console.log(workData);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ pt: 3, pb: 4 }}
    >
      <Card sx={{ mt: 4 }} raised={true}>
        <CardContent>
          <Typography
            gutterBottom={true}
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            {helper.workPlace}
          </Typography>
          {workData.map((singleWork, index) => (
            <div key={index} className="menuWrapper">
              <Box sx={{ p: 1, border: 0.5, borderRadius: 10 }}>
                <TextField
                  name="name"
                  label={helper.workPlace}
                  onChange={(e) => workDataHandler(e, index)}
                  value={singleWork.name}
                />
                <TextField
                  name="position"
                  label={helper.position}
                  onChange={(e) => workDataHandler(e, index)}
                  value={singleWork.position}
                />
                <Grid>
                  <Grid>
                    <Typography
                      gutterBottom={true}
                      variant="h6"
                      align="center"
                      sx={{ fontStyle: "italic" }}
                    >
                      {helper.years}
                    </Typography>
                  </Grid>
                  <Input
                    type="number"
                    placeholder="2020"
                    label="early"
                    name="earlyYear"
                    min="1900"
                    max="2099"
                    step="1"
                    onChange={(e) => workDataHandler(e, index)}
                    value={singleWork.earlyYear}
                  />
                  -
                  <Input
                    type="number"
                    label="late"
                    name="lateYear"
                    placeholder="2022"
                    min="1900"
                    max="2099"
                    step="1"
                    onChange={(e) => workDataHandler(e, index)}
                    value={singleWork.lateYear}
                  />
                </Grid>
                <Grid>
                  <TextField
                    name="locationCity"
                    label={helper.workCity}
                    onChange={(e) => workDataHandler(e, index)}
                    value={singleWork.locationCity}
                  />
                  <TextField
                    name="locationCountry"
                    label={helper.workCountry}
                    onChange={(e) => workDataHandler(e, index)}
                    value={singleWork.locationCountry}
                  />
                </Grid>
                <Typography sx={{ fontStyle: "italic" }}>
                  {helper.description}
                </Typography>
                <TextareaAutosize
                  label={helper.description}
                  name="description"
                  value={singleWork.description}
                  onChange={(e) => workDataHandler(e, index)}
                />
              </Box>
            </div>
          ))}
          <Grid sx={{ p: 2 }}>
            <Button variant="contained" color="warning" onClick={addWorkList}>
              {helper.addButton}
            </Button>
            {workData.length > 1 && (
              <Button
                variant="contained"
                color="error"
                onClick={workListRemover}
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
export default Work;
