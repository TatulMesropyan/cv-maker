import React, { useState } from "react";
import "./App.css";
import {
  AppBar,
  TextField,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Createform = () => {
  // const [profilePicture, setProfilePicture] = useState({
  //   selectedFile: null,
  // });

  const [mainUserData, setMainUserData] = useState({
    name: "",
    surname: "",
    position: "",
    birthday: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });

  const titles = {
    name: "Name",
    surname: "Surname",
    position: "Position",
    birthday: "Birthday",
    email: "Email",
    phone: "Phone",
    country: "Country",
    city: "City",
    education: "Education",
    skills: "Skills",
    workExp: "Work Experience",
    projects: "Projects",
    languages: "Languages",
    certNcourse: "Certifications & courses",
  };
  const [education, setEducation] = useState([
    {
      name: "",
      department: "",
      earlyYear: "",
      lateYear: "",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      skillDiscription: "",
    },
  ]);
  const [workExperience, setWorkExperience] = useState([
    {
      name: "",
      position: "",
      earlyYear: "",
      lateYear: "",
      description: "",
    },
  ]);

  const addWorkList = () => {
    setWorkExperience([
      ...workExperience,
      {
        name: "",
        position: "",
        earlyYear: "",
        lateYear: "",
        description: "",
      },
    ]);
  };
  const educationDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };

  const handleMainDataChange = (e) => {
    const { name, value } = e.target;
    setMainUserData({
      ...mainUserData,
      [name]: value,
    });
  };

  const addEducationList = () => {
    setEducation([
      ...education,
      {
        name: "",
        department: "",
        earlyYear: "",
        lateYear: "",
      },
    ]);
  };
  const addSkillList = () => {
    setSkills([
      ...skills,
      {
        skill: "",
      },
    ]);
  };

  const skillDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...skills];
    list[index][name] = value;
    setSkills(list);
  };

  const workDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...workExperience];
    list[index][name] = value;
    setWorkExperience(list);
  };

  const workListRemover = (index) =>{
    const list =[...workExperience];
    list.splice(index,1)
    setWorkExperience(list)
  }

  const skillListRemover = (index) =>{
    const list = [...skills];
    list.splice(index,1);
    setSkills(list)
  }
  const educationListRemover = (index) =>{
    const list = [...education];
    list.splice(index,1);
    setEducation(list)
  }
  const handleSubmit = () => {
    console.log(education, skills);
  };
  return (
    <Container className="container" component="main" maxWidth="sm" >
      <AppBar>
        <Typography
          align="center"
          gutterBottom={true}
          noWrap={true}
          variant="h5"
        >
          Profile Form
        </Typography>
      </AppBar>
      <div style={{ paddingTop: "50px" }}>
        <Box
          align="left"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography
            align="center"
            gutterBottom={true}
            noWrap={true}
            variant="h5"
          >
            Position
          </Typography>
          <Grid item xs={4}>
            <TextField
              type="text"
              label={titles.position}
              variant="outlined"
              name="position"
              value={mainUserData.position}
              onChange={handleMainDataChange}
              fullWidth
            />
          </Grid>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Typography gutterBottom={true} variant="h5" align="center">
              Main Info
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            >
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label={titles.name}
                  name="name"
                  variant="outlined"
                  value={mainUserData.name}
                  onChange={handleMainDataChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="surname"
                  label={titles.surname}
                  variant="outlined"
                  value={mainUserData.surname}
                  onChange={handleMainDataChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Card sx={{ mt: 2 }} raised={false}>
              <CardContent>
                <Typography gutterBottom={true} variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
                  Birth Date
                </Typography>
                <Input
                  type="date"
                  label={titles.position}
                  variant="contained"
                  name="birthday"
                  value={mainUserData.birthday}
                  onChange={handleMainDataChange}
                />
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <Grid rowSpacing={1} sx={{alignItems:"center"}} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
            <Typography gutterBottom={true} variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
              Contact Info
            </Typography>
            <Grid sx={{}}>
            <Grid item xs={4}>
              <TextField
                type="text"
                label={titles.email}
                name="email"
                autoComplete="email"
                variant="outlined"
                value={mainUserData.email}
                onChange={handleMainDataChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                name="phone"
                label={titles.phone}
                variant="outlined"
                value={mainUserData.phone}
                onChange={handleMainDataChange}
              />
            </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid>
            <Grid>
              <TextField
                type="text"
                label={titles.city}
                name="city"
                value={mainUserData.city}
                onChange={handleMainDataChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                label={titles.country}
                name="country"
                value={mainUserData.country}
                onChange={handleMainDataChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
        {
          //Education Menu
        }
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ pt: 3, pb: 4 }}
        >
          <Card sx={{ mt: 4 }} raised={true}>
            <CardContent>
              <Typography gutterBottom={true} variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
                Education Info
              </Typography>
              {education.map((singleEducation, index) => (
                <div key={index}>
                  <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item xs={4}>
                      <TextField
                        name="name"
                        label="Educational Institution Name"
                        onChange={(e) => educationDataHandler(e, index)}
                        value={singleEducation.name}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="department"
                        label="Department"
                        onChange={(e) => educationDataHandler(e, index)}
                        value={singleEducation.department}
                      />
                    </Grid>
                    <Grid>
                      <Input
                        type="number"
                        placeholder="2014"
                        label="early"
                        name="earlyYear"
                        min="1900"
                        max="2099"
                        step="1"
                        onChange={(e) => educationDataHandler(e, index)}
                        value={singleEducation.earlyYear}
                      />
                      -
                      <Input
                        type="number"
                        label="late"
                        name="lateYear"
                        min="1900"
                        placeholder="2022"
                        max="2099"
                        step="1"
                        onChange={(e) => educationDataHandler(e, index)}
                        value={singleEducation.lateYear}
                      />
                    </Grid>
                    <Grid item xs={3} sx={{ p: 2 }}>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={addEducationList}
                      >
                        Add
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={educationListRemover}
                      >
                        Remove
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </CardContent>
          </Card>
        </Box>
      </div>
      {
        //Skill Menu
      }
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ pt: 3, p3: 4 }}
      >
        <Card sx={{ mt: 4 }} raised={true}>
          <CardContent>
            <Typography gutterBottom={true} variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
              Skills
            </Typography>
            {skills.map((singleSkill, index) => (
              <div key={index}>
                <Grid>
                  <Grid>
                    <TextField
                      value={singleSkill.skillDiscription}
                      label="Skill"
                      name="skillDiscription"
                      onChange={(e) => skillDataHandler(e, index)}
                    />
                  </Grid>
                  <Grid sx={{ p: 2 }}>
                    <span className="">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={addSkillList}
                      >
                        Add
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={skillListRemover}
                      >
                        Remove
                      </Button>
                    </span>
                  </Grid>
                </Grid>
              </div>
            ))}
          </CardContent>
        </Card>
      </Box>
      {
        //Work Menu
      }
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ pt: 3, pb: 4 }}
        >
          <Card sx={{ mt: 4 }} raised={true}>
            <CardContent>
              <Typography gutterBottom={true} variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
                Work Experience
              </Typography>
              {workExperience.map((singleWork, index) => (
              <div key={index}>
                <TextField
                  name="name"
                  label="Workplace Name"
                  onChange={workDataHandler}
                  value={singleWork.name}
                />
                <TextField
                  name="Position"
                  label="Position"
                  onChange={workDataHandler}
                  value={singleWork.position}
                />
                <div>
                  <div className="yearWrapper">
                    <Input
                      type="number"
                      label="early"
                      name="earlyYear"
                      min="1900"
                      max="2099"
                      step="1"
                      onChange={workDataHandler}
                      value={singleWork.earlyYear}
                    />
                    -
                    <Input
                      type="number"
                      label="late"
                      name="lateYear"
                      min="1900"
                      max="2099"
                      step="1"
                      onChange={workDataHandler}
                      value={singleWork.lateYear}
                    />
                  </div>
                  <div>
                    <Typography sx={{ fontStyle: 'italic' }}>Description</Typography>
                    <TextareaAutosize
                      label="Description"
                      name="description"
                      value={singleWork.description}
                      onChange={workDataHandler}
                    />
                  </div> 
                  <Grid sx={{ p: 2 }}>
                    <span>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={addWorkList}
                      >
                        Add
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={workListRemover}
                      >
                        Remove
                      </Button>
                    </span>
                  </Grid>
                </div>
              </div>
                    ))}
            </CardContent>
          </Card>
        </Box>
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Save
        </Button>
    </Container>
  );
};

export default Createform;
