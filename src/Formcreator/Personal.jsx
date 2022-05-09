import helper from "../Components/helper";
import "../App.css";
import {
  TextField,
  Input,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
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
                    {helper.personalInfo}
                  </Typography>
                  <TextField
                    type="text"
                    label={helper.name}
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
                    label={helper.surname}
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
                    {helper.birthday}
                  </Typography>
                  <Input
                    type="date"
                    label={helper.position}
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
                {helper.position}
              </Typography>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label={helper.position}
                  variant="outlined"
                  name="position"
                  value={positionInputValue}
                  onChange={handlePositionChange}
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
                      value={emailInputValue}
                      onChange={handleEmailChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name="phone"
                      label={helper.phone}
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
                    label={helper.city}
                    name="city"
                    onChange={handleCityChange}
                    value={cityInputValue}
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <TextField
                    type="text"
                    label={helper.country}
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
