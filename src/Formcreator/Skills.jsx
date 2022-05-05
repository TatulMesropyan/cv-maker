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

const Skills = () =>{
const [skillsData, setSkillsData] = useState([
    {
      skillDiscription: "",
    },
  ]);

  const addSkillList = () => {
    setSkillsData([
      ...skillsData,
      {
        skillDiscription: "",
      },
    ]);
  };
  const skillListRemover = (index) => {
    const list = [...skillsData];
    list.splice(index, 1);
    setSkillsData(list);
  };
  const skillDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...skillsData];
    list[index][name] = value;
    setSkillsData(list);
  };

  const handleSubmit = () =>{
      console.log(skillsData)
  }
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
          {helper.skills}
        </Typography>
        {skillsData.map((singleSkill, index) => (
          <div key={index}>
            <Grid>
              <TextField
                value={singleSkill.skillDiscription}
                label={helper.skills}
                name="skillDiscription"
                onChange={(e) => skillDataHandler(e, index)}
              />
            </Grid>
          </div>
        ))}
        <Grid sx={{ p: 2 }}>
          <Button
            variant="contained"
            color="warning"
            onClick={addSkillList}
          >
            {helper.addButton}
          </Button>
          {skillsData.length > 1 && (
            <Button
              variant="contained"
              color="error"
              onClick={skillListRemover}
            >
              {helper.removeButton}
            </Button>
          )}
        </Grid>
      </CardContent>
    </Card>
  </Box>
  )
}
export default Skills;