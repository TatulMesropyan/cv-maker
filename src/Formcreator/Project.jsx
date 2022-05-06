import React, { useState } from "react";
import helper from "../Components/helper";
import "../App.css";
import {
  TextField,
  Button,
  TextareaAutosize,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Project = () => {
  const [projectData, setProjectData] = useState([
    {
      name: "",
      description: "",
      responsibilities: "",
    },
  ]);
  const addProjectList = () => {
    setProjectData([
      ...projectData,
      {
        name: "",
        description: "",
        responsibilities: "",
      },
    ]);
  };
  const handleProject = (e, index) => {
    const { name, value } = e.target;
    const list = [...projectData];
    list[index][name] = value;
    setProjectData(list);
  };

  const removeProjectList = (index) => {
    const list = [...projectData];
    list.splice(index, 1);
    setProjectData(list);
  };

  const handleSubmit = () => {
    console.log(projectData);
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ pt: 3 }}>
      <Card sx={{ mt: 4 }} raised={true}>
        <CardContent>
          <Box>
            <Typography
              gutterBottom={true}
              variant="h5"
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              {helper.projects}
            </Typography>
          </Box>
          {projectData.map((singleProject, index) => (
            <div key={index} className="menuWrapper">
              <Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
                <Grid>
                  <TextField
                    value={singleProject.name}
                    label={helper.projectName}
                    name="name"
                    onChange={(e) => handleProject(e, index)}
                  />
                </Grid>
                <Grid>
                  <Typography
                    gutterBottom={true}
                    variant="h6"
                    align="center"
                    sx={{ fontStyle: "italic" }}
                  >
                    {helper.description}
                  </Typography>
                  <TextareaAutosize
                    value={singleProject.description}
                    label={helper.description}
                    name="description"
                    onChange={(e) => handleProject(e, index)}
                  />
                </Grid>
                <Grid>
                  <Typography
                    gutterBottom={true}
                    variant="h6"
                    align="center"
                    sx={{ fontStyle: "italic" }}
                  >
                    {helper.responsibilities}
                  </Typography>
                  <TextareaAutosize
                    value={singleProject.responsibilities}
                    label={helper.responsibilities}
                    name="responsibilities"
                    onChange={(e) => handleProject(e, index)}
                  />
                </Grid>
              </Box>
            </div>
          ))}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={addProjectList}
            >
              {helper.addButton}
            </Button>
            {projectData.length > 1 && (
              <Button
                variant="contained"
                color="error"
                onClick={removeProjectList}
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
export default Project;
