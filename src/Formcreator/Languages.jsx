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

const Languages = () => {
  const [languagesData, setLanguagesData] = useState([
    {
      language: "",
    },
  ]);
  const addLanguageList = () => {
    setLanguagesData([
      ...languagesData,
      {
        language: "",
      },
    ]);
  };
  const languageDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...languagesData];
    list[index][name] = value;
    setLanguagesData(list);
  };
  const languageListRemover = (index) => {
    const list = [...languagesData];
    list.splice(index, 1);
    setLanguagesData(list);
  };
  const handleSubmit = () => {
    console.log(languagesData);
  };

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
            {helper.language}
          </Typography>
          {languagesData.map((singleLanguage, index) => (
            <div key={index}>
              <Grid>
                <TextField
                  value={singleLanguage.skill}
                  label={helper.language}
                  name="language"
                  onChange={(e) => languageDataHandler(e, index)}
                />
              </Grid>
            </div>
          ))}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={addLanguageList}
            >
              {helper.addButton}
            </Button>
            {languagesData.length > 1 && (
              <Button
                variant="contained"
                color="error"
                onClick={languageListRemover}
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
export default Languages;
