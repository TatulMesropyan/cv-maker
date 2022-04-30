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
import helper from "./helper.js";

const Createform = () => {
  //Main Data

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
  const handleMainDataChange = (e) => {
    const { name, value } = e.target;
    setMainUserData({
      ...mainUserData,
      [name]: value,
    });
  };

  //Certificate

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

  //Project

  const [project, setProject] = useState([
    {
      name: "",
      description: "",
      responsibilities: "",
    },
  ]);
  const addProjectList = () => {
    setProject([
      ...project,
      {
        name: "",
        description: "",
        responsibilities: "",
      },
    ]);
  };
  const handleProject = (e, index) => {
    const { name, value } = e.target;
    const list = [...project];
    list[index][name] = value;
    setProject(list);
  };

  const removeProjectList = (index) => {
    const list = [...workExperience];
    list.splice(index, 1);
    setProject(list);
  };

  //Education

  const [education, setEducation] = useState([
    {
      name: "",
      department: "",
      earlyYear: "",
      lateYear: "",
    },
  ]);

  const educationDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };
  const educationListRemover = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
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

  //Skills

  const [skills, setSkills] = useState([
    {
      skillDiscription: "",
    },
  ]);

  const addSkillList = () => {
    setSkills([
      ...skills,
      {
        skillDiscription: "",
      },
    ]);
  };
  const skillListRemover = (index) => {
    const list = [...skills];
    list.splice(index, 1);
    setSkills(list);
  };
  const skillDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...skills];
    list[index][name] = value;
    setSkills(list);
  };

  //Work Functionality

  const [workExperience, setWorkExperience] = useState([
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
    const list = [...workExperience];
    list[index][name] = value;
    setWorkExperience(list);
  };
  const addWorkList = () => {
    setWorkExperience([
      ...workExperience,
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
    const list = [...workExperience];
    list.splice(index, 1);
    setWorkExperience(list);
  };

  //Language functionality

  const [language, setLanguage] = useState([
    {
      language: "",
    },
  ]);
  const addLanguageList = () => {
    setLanguage([
      ...language,
      {
        language: "",
      },
    ]);
  };
  const languageDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...language];
    list[index][name] = value;
    setLanguage(list);
  };
  const languageListRemover = (index) => {
    const list = [...language];
    list.splice(index, 1);
    setLanguage(list);
  };

  const handleSubmit = () => {
    console.log(
      mainUserData,
      education,
      skills,
      workExperience,
      language,
      certificate,
      project
    );
  };

  return (
    <Container className="container" component="main" maxWidth="md">
      <AppBar>
        <Typography
          align="center"
          gutterBottom={true}
          noWrap={true}
          variant="h5"
          x={{ fontWeight: "bold" }}
        >
          {helper.profileForm}
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
            sx={{ fontWeight: "bold" }}
          >
            {helper.position}
          </Typography>
          <Grid item xs={4}>
            <TextField
              type="text"
              label={helper.position}
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
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            >
              <Grid item xs={12}>
                <Typography
                  gutterBottom={true}
                  variant="h5"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {helper.personalInfo}
                </Typography>
                <TextField
                  type="text"
                  label={helper.name}
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
                  label={helper.surname}
                  variant="outlined"
                  value={mainUserData.surname}
                  onChange={handleMainDataChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Card sx={{ mt: 2 }} raised={false}>
              <CardContent>
                <Typography
                  gutterBottom={true}
                  variant="h5"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {helper.birthday}
                </Typography>
                <Input
                  type="date"
                  label={helper.position}
                  variant="contained"
                  name="birthday"
                  value={mainUserData.birthday}
                  onChange={handleMainDataChange}
                />
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid
            rowSpacing={1}
            sx={{ alignItems: "center" }}
            columnSpacing={{ xs: 1, sm: 1, md: 2 }}
          >
            <Typography
              gutterBottom={true}
              variant="h5"
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              {helper.contactInfo}
            </Typography>
            <Grid sx={{}}>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label={helper.email}
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
                  label={helper.phone}
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
                label={helper.city}
                name="city"
                value={mainUserData.city}
                onChange={handleMainDataChange}
                variant="outlined"
              />
            </Grid>
            <Grid>
              <TextField
                type="text"
                label={helper.country}
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
              <Typography
                gutterBottom={true}
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                {helper.eduInfo}
              </Typography>
              {education.map((singleEducation, index) => (
                <div key={index}>
                  <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item xs={4}>
                      <TextField
                        name="name"
                        label={helper.eduLabel}
                        onChange={(e) => educationDataHandler(e, index)}
                        value={singleEducation.name}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="department"
                        label={helper.departmentLabel}
                        onChange={(e) => educationDataHandler(e, index)}
                        value={singleEducation.department}
                      />
                    </Grid>
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
                        label={helper.labelEarly}
                        placeholder="2014"
                        name="earlyYear"
                        margin="dense"
                        min="1900"
                        max="2099"
                        variant="contained"
                        step="1"
                        onChange={(e) => educationDataHandler(e, index)}
                        value={singleEducation.earlyYear}
                      />
                      -
                      <Input
                        type="number"
                        label={helper.labelEarly}
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
                        {helper.addButton}
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={educationListRemover}
                      >
                        {helper.removeButton}
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
            <Typography
              gutterBottom={true}
              variant="h5"
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              {helper.skills}
            </Typography>
            {skills.map((singleSkill, index) => (
              <div key={index}>
                <Grid>
                  <Grid>
                    <TextField
                      value={singleSkill.skillDiscription}
                      label={helper.skills}
                      name="skillDiscription"
                      onChange={(e) => skillDataHandler(e, index)}
                    />
                  </Grid>
                  <Grid sx={{ p: 2 }}>
                    <span>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={addSkillList}
                      >
                        {helper.addButton}
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={skillListRemover}
                      >
                        {helper.removeButton}
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
            <Typography
              gutterBottom={true}
              variant="h5"
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              {helper.workPlace}
            </Typography>
            {workExperience.map((singleWork, index) => (
              <div key={index}>
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
                <div>
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
                  <div>
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
                  </div>
                  <Grid sx={{ p: 2 }}>
                    <span>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={addWorkList}
                      >
                        {helper.addButton}
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={workListRemover}
                      >
                        {helper.removeButton}
                      </Button>
                    </span>
                  </Grid>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {
          // Language Menu
        }
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
                {helper.language}
              </Typography>
              {language.map((singleLanguage, index) => (
                <div key={index}>
                  <Grid>
                    <Grid>
                      <TextField
                        value={singleLanguage.skill}
                        label={helper.language}
                        name="language"
                        onChange={(e) => languageDataHandler(e, index)}
                      />
                    </Grid>
                    <Grid sx={{ p: 2 }}>
                      <span>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={addLanguageList}
                        >
                          {helper.addButton}
                        </Button>
                      </span>
                      <span>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={languageListRemover}
                        >
                          {helper.removeButton}
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
          // Certificates and Courser
        }
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
                    <Grid>
                      <TextField
                        value={singleCerteficate.skillDiscription}
                        label={helper.certAndCourse}
                        name="certificate"
                        onChange={(e) => certificatesHandler(e, index)}
                      />
                    </Grid>
                    <Grid sx={{ p: 2 }}>
                      <span>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={addCertificateList}
                        >
                          {helper.addButton}
                        </Button>
                      </span>
                      <span>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={removeCertificateList}
                        >
                          {helper.removeButton}
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
          // Projects
        }
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
                {helper.projects}
              </Typography>
              {project.map((singleProject, index) => (
                <div key={index}>
                  <Grid>
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
                    <Grid sx={{ p: 2 }}>
                      <span>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={addProjectList}
                        >
                          {helper.addButton}
                        </Button>
                      </span>
                      <span>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={removeProjectList}
                        >
                          {helper.removeButton}
                        </Button>
                      </span>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Button variant="contained" onClick={handleSubmit} color="primary">
        {helper.save}
      </Button>
    </Container>
  );
};

export default Createform;
