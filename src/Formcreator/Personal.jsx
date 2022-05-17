import labels from "../Components/labels";
import "../App.css";
import {
  TextField,
  Input,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/Actions/personalActions";
import store from "../redux/store";
import { useState } from "react";
import RenderAvatar from "../ProfilePicture/Avatar";
const Personal = () => {
  const dispatch = useDispatch();
  const nameInputValue = useSelector((state) => state.personalDataReducer.name);
  const surnameInputValue = useSelector(
    (state) => state.personalDataReducer.surname
  );
  const positionInputValue = useSelector(
    (state) => state.personalDataReducer.position
  );
  const birthdayInputValue = useSelector(
    (state) => state.personalDataReducer.birthday
  );
  const emailInputValue = useSelector(
    (state) => state.personalDataReducer.email
  );
  const phoneInputValue = useSelector(
    (state) => state.personalDataReducer.phone
  );
  const countryInputValue = useSelector(
    (state) => state.personalDataReducer.country
  );
  const cityInputValue = useSelector((state) => state.personalDataReducer.city);

  const handleNameChange = (e) => {
    dispatch(actions.personalNameChange(e.target.value));
  };
  const handleSurnameChange = (e) => {
    dispatch(actions.personalSurnameChange(e.target.value));
  };
  const handlePositionChange = (e) => {
    dispatch(actions.personalPositionChange(e.target.value));
  };
  const handleBirthdayChange = (e) => {
    dispatch(actions.personalBirthdayChange(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(actions.personalEmailChange(e.target.value));
  };
  const handlePhoneChange = (e) => {
    dispatch(actions.personalPhoneChange(e.target.value));
  };
  const handleCountryChange = (e) => {
    dispatch(actions.personalCountryChange(e.target.value));
  };
  const handleCityChange = (e) => {
    console.log(e.target.value)
    dispatch(actions.personalCityChange(e.target.value));
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
            <Box component="form" noValidate sx={{ mt: 3 }}>
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
                    {labels.personalInfo}
                  </Typography>
                  <TextField
                    type="text"
                    label={labels.name}
                    name="name"
                    variant="outlined"
                    onChange={handleNameChange}
                    value={nameInputValue}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="surname"
                    label={labels.surname}
                    variant="outlined"
                    value={surnameInputValue}
                    onChange={handleSurnameChange}
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
                    {labels.birthday}
                  </Typography>
                  <Input
                    type="date"
                    label={labels.position}
                    variant="contained"
                    name="birthday"
                    value={birthdayInputValue}
                    onChange={handleBirthdayChange}
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
                {labels.position}
              </Typography>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label={labels.position}
                  variant="outlined"
                  name="position"
                  value={positionInputValue}
                  onChange={handlePositionChange}
                  fullWidth
                />
              </Grid>
              <RenderAvatar/>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ pt: 6 }}>
        <Card>
          <CardContent>
            <Box sx={{ mt: 2 }}>
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
                  {labels.contactInfo}
                </Typography>
                <Grid sx={{}}>
                  <Grid item xs={4}>
                    <TextField
                      type="text"
                      label={labels.email}
                      name="email"
                      autoComplete="email"
                      variant="outlined"
                      value={emailInputValue}
                      onChange={handleEmailChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name="phone"
                      label={labels.phone}
                      variant="outlined"
                      value={phoneInputValue}
                      onChange={handlePhoneChange}
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
                    label={labels.city}
                    name="city"
                    onChange={handleCityChange}
                    value={cityInputValue}
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <TextField
                    type="text"
                    label={labels.country}
                    name="country"
                    value={countryInputValue}
                    onChange={handleCountryChange}
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
