import { useState } from "react";
import helper from "../Components/helper";
import "../App.css";
import {
  TextField,
  Button,
  Input,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Education = () =>{
const [educationData, setEducationData] = useState([
    {
      name: "",
      department: "",
      earlyYear: "",
      lateYear: "",
    },
  ]);

  const educationDataHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationData];
    list[index][name] = value;
    setEducationData(list);
  };
  const educationListRemover = (index) => {
    const list = [...educationData];
    list.splice(index, 1);
    setEducationData(list);
  };
  const addEducationList = () => {
    setEducationData([
      ...educationData,
      {
        name: "",
        department: "",
        earlyYear: "",
        lateYear: "",
      },
    ]);
  }
  const handleSubmit = () =>{
    console.log(educationData)
  }
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
          {helper.eduInfo}
        </Typography>
        {educationData.map((singleEducation, index) => (
          <div key={index} className="menuWrapper">
          <Box sx={{p:4,border:0.5,borderRadius:10}}>
            <Grid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
              item
              xs={4}
            >
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
            </Box>
          </div>
        ))}
        <Grid item xs={3} sx={{ p: 2 }}>
          <Button
            variant="contained"
            color="warning"
            onClick={addEducationList}
          >
            {helper.addButton}
          </Button>
          {educationData.length > 1 && (
            <Button
              variant="contained"
              color="error"
              onClick={educationListRemover}
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
  export default Education;