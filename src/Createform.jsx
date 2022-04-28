import React, { useState } from "react";
import "./App.css";
import "./Createform.css";
import {
  AppBar,
  TextField,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  Container,
} from "@mui/material";

const fieldStyles = {
  paddingBottom: "5px",
  paddingTop: "5px",
};

const Createform = () => {
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
  const [education, setEducation] = useState({
    name: "",
    department: "",
    earlyYear: "",
    lateYear: "",
  });
  const [educationMenu, setEducationMenu] = useState(false);
  const [skills, setSkills] = useState("");
  const [skillsMenu, setSkillsMenu] = useState(false);
  const [experienceMenu, setExperienceMenu] = useState(false);
  const [workExperience, setWorkExperience] = useState({
    name: "",
    position: "",
    earlyYear: "",
    lateYear: "",
    description: "",
  });

  const openExperienceMenu = () => {
    experienceMenu ? setExperienceMenu(false) : setExperienceMenu(true);
  };
  const openSkillsMenu = () => {
    skillsMenu ? setSkillsMenu(false) : setSkillsMenu(true);
  };
  const workDataHandler = (e) => {
    const { name, value } = e.target;
    setWorkExperience({
      ...workExperience,
      [name]: value,
    });
  };
  const educationDataHandler = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleMainDataChange = (e) => {
    const { name, value } = e.target;
    setMainUserData({
      ...mainUserData,
      [name]: value,
    });
  };

  const openEducationMenu = () => {
    educationMenu ? setEducationMenu(false) : setEducationMenu(true);
  };

  const handleSubmit = () => {
    console.log(education, mainUserData);
  };
  return (
    <Container className="container">
      <AppBar>
        <h1>Profile Form</h1>
      </AppBar>
      <form>
        <div style={{ paddingTop: "150px" }}>
          <div>
            <TextField
              type="text"
              style={fieldStyles}
              label={titles.name}
              name="name"
              variant="outlined"
              value={mainUserData.name}
              onChange={handleMainDataChange}
            />

            <TextField
              type="text"
              name="surname"
              label={titles.surname}
              style={fieldStyles}
              variant="outlined"
              value={mainUserData.surname}
              onChange={handleMainDataChange}
            />

            <TextField
              type="text"
              label={titles.position}
              variant="outlined"
              name="position"
              style={fieldStyles}
              value={mainUserData.position}
              onChange={handleMainDataChange}
            />
          </div>
          <div>
            <TextField
              type="text"
              label={titles.email}
              name="email"
              variant="outlined"
              style={fieldStyles}
              value={mainUserData.email}
              onChange={handleMainDataChange}
            />

            <TextField
              type="text"
              name="phone"
              label={titles.phone}
              variant="outlined"
              value={mainUserData.phone}
              onChange={handleMainDataChange}
              style={fieldStyles}
            />
          </div>
          <div>
            <Input
              type="date"
              label={titles.position}
              style={fieldStyles}
              variant="outlined"
              name="birthday"
              value={mainUserData.birthday}
              onChange={handleMainDataChange}
            />
          </div>
          <div>
            <TextField
              type="text"
              label={titles.city}
              name="city"
              value={mainUserData.city}
              onChange={handleMainDataChange}
              variant="outlined"
            />
            <TextField
              type="text"
              label={titles.country}
              name="country"
              value={mainUserData.country}
              onChange={handleMainDataChange}
              variant="outlined"
            />
          </div>
          <div className="dropDownFieldWrapper">
            <div className="buttonWraper">
              <Button
                variant="contained"
                color="primary"
                onClick={openEducationMenu}
              >
                <Typography>Education</Typography>
              </Button>
            </div>
            {educationMenu ? (
              <div>
                <TextField
                  name="name"
                  style={fieldStyles}
                  label="Educational Institution Name"
                  onChange={educationDataHandler}
                  value={education.name}
                ></TextField>
                <TextField
                  name="department"
                  label="Department"
                  style={fieldStyles}
                  onChange={educationDataHandler}
                  value={education.department}
                ></TextField>
                <div>
                  <div>
                    <label>Years</label>
                  </div>
                  <div className="yearWrapper">
                    <Input
                      type="number"
                      label="early"
                      name="earlyYear"
                      min="1900"
                      max="2099"
                      step="1"
                      onChange={educationDataHandler}
                      value={education.earlyYear}
                    />
                    -
                    <Input
                      type="number"
                      label="late"
                      name="lateYear"
                      min="1900"
                      max="2099"
                      step="1"
                      onChange={educationDataHandler}
                      value={education.lateYear}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="dropDownFieldWrapper">
            <div className="buttonWrapper">
              <Button
                variant="contained"
                color="primary"
                className="button"
                onClick={openSkillsMenu}
              >
                <Typography>Skills</Typography>
              </Button>
            </div>
            {skillsMenu ? (
              <div>
                <TextField
                  value={skills}
                  label="Skill"
                  onChange={(e) => setSkills(e.target.value)}
                ></TextField>
              </div>
            ) : null}
          </div>
          <div className="dropDownFieldWrapper">
            <div className="buttonWraper">
              <Button
                variant="contained"
                color="primary"
                onClick={openExperienceMenu}
              >
                <Typography>Work Experience</Typography>
              </Button>
            </div>
            {experienceMenu ? (
              <div>
                <TextField
                  name="name"
                  style={fieldStyles}
                  label="Workplace Name"
                  onChange={workDataHandler}
                  value={workExperience.name}
                ></TextField>
                <TextField
                  name="Position"
                  label="Position"
                  style={fieldStyles}
                  onChange={workDataHandler}
                  value={workExperience.position}
                ></TextField>
                <div>
                  <div>
                    <label>Years</label>
                  </div>
                  <div className="yearWrapper">
                    <Input
                      type="number"
                      label="early"
                      name="earlyYear"
                      min="1900"
                      max="2099"
                      step="1"
                      onChange={workDataHandler}
                      value={workExperience.earlyYear}
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
                      value={workExperience.lateYear}
                    />
                  </div>
                  <div>
                    <Typography>Description</Typography>
                    <TextareaAutosize
                      label="Description"
                      name="description"
                      value={workExperience.description}
                      onChange={workDataHandler}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="buttonWraper">
            <Button variant="contained" onClick={handleSubmit} color="primary">
              Save
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Createform;
