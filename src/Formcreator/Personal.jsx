import { useState } from "react";
import helper from "../Components/helper";
import "../App.css"
import {
  TextField,
  Input,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import store from "../redux/store";
import { personalDataReducer } from "../redux/Reducers/personalDataReducer";
import { personalNameChange } from "../redux/actions";
const Personal = () => {
  
  const dispatch=useDispatch()

  const [personalData, setPersonalData] = useState({
    name: "",
    surname: "",
    position: "",
    birthday: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });
  const handlePersonalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
      
    })
    store.dispatch(personalNameChange(personalData.name))
    console.log(store.getState())
  };
  
  const handleSubmit = () => {
    console.log(store);
  };
  return (
    <>
      <Box
        align="center"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card>
          <CardContent>
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
                    value={personalData.name}
                    onChange={handlePersonalDataChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="surname"
                    label={helper.surname}
                    variant="outlined"
                    value={personalData.surname}
                    onChange={handlePersonalDataChange}
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
                    value={personalData.birthday}
                    onChange={handlePersonalDataChange}
                  />
                </CardContent>
              </Card>
              <Typography
                align="center"
                gutterBottom={true}
                noWrap={true}
                variant="h5"
                sx={{ fontWeight: "bold", pt: 3 }}
              >
                {helper.position}
              </Typography>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label={helper.position}
                  variant="outlined"
                  name="position"
                  value={personalData.position}
                  onChange={handlePersonalDataChange}
                  fullWidth
                />
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ pt: 6 }}>
        <Card>
          <CardContent>
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
                      value={personalData.email}
                      onChange={handlePersonalDataChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type="text"
                      name="phone"
                      label={helper.phone}
                      variant="outlined"
                      value={personalData.phone}
                      onChange={handlePersonalDataChange}
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
                    value={personalData.city}
                    onChange={handlePersonalDataChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <TextField
                    type="text"
                    label={helper.country}
                    name="country"
                    value={personalData.country}
                    onChange={handlePersonalDataChange}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default Personal;
