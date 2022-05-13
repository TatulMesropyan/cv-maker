import helper from "../Components/helper";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/Actions/workActions";
import {
  TextField,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { useCallback } from "react";
import store from "../redux/store";
import workDataReducer from "../redux/Reducers/workDataReducer";

const Work = () => {
  const dispatch = useDispatch();

  const { names, nameInputValue } = useSelector(
    (state) => state.workDataReducer
  );
  const { earlyYears, earlyInputValue } = useSelector(
    (state) => state.workDataReducer
  );
  const { positions, positionInputValue } = useSelector(
    (state) => state.workDataReducer
  );
  const { lateYears, lateInputValue } = useSelector(
    (state) => state.workDataReducer
  );
  const { descriptions, descriptionInputValue } = useSelector(
    (state) => state.workDataReducer
  );
  const { cities, cityInputValue } = useSelector(
    (state) => state.workDataReducer
  );
  const { countries, countryInputValue } = useSelector(
    (state) => state.workDataReducer
  );
  const handleNameChange = (e) => {
    dispatch(actions.setWorkName(e.target.value));
  };
  const handleDescriptionChange = (e) => {
    dispatch(actions.setWorkDescription(e.target.value));
  };
  const handlePositionChange = (e) => {
    dispatch(actions.setWorkPosition(e.target.value));
  };
  const handleEarlyChange = (e) => {
    dispatch(actions.setWorkEarlyYear(e.target.value));
  };
  const handleLateChange = (e) => {
    dispatch(actions.setWorkLateYear(e.target.value));
  };
  const handleCountryChange = (e) => {
    dispatch(actions.setWorkCountry(e.target.value));
  };
  const handleCityChange = (e) => {
    dispatch(actions.setWorkCity(e.target.value));
  };
  const handleAddClick = useCallback(() => {
    dispatch(actions.workAdd());
  }, [dispatch]);

  let content = [];

  for (let i = 0; i < names.length; i++)
  {
    content.push(
      <Box key={i}>
          <Box sx={{ p: 1, border: 0.5, borderRadius: 10 }}>
            <TextField
              name="name"
              label={helper.workPlace}
              onChange={(e) => handleNameChange(e)}
              value={names[i]}
            />
            <TextField
              name="position"
              label={helper.position}
              onChange={(e) => handlePositionChange(e)}
              value={positions[i]}
            />
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
                onChange={(e) => handleEarlyChange(e)}
                value={earlyYears[i]}
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
                onChange={(e) => handleLateChange(e)}
                value={lateYears[i]}
              />
            </Grid>
            <Grid>
              <TextField
                name="locationCity"
                label={helper.workCity}
                onChange={(e) => handleCityChange(e)}
                value={cities[i]}
              />
              <TextField
                name="locationCountry"
                label={helper.workCountry}
                onChange={(e) => handleCountryChange(e)}
                value={countries[i]}
              />
            </Grid>
            <Typography sx={{ fontStyle: "italic" }}>
              {helper.description}
            </Typography>
            <TextareaAutosize
              label={helper.description}
              name="description"
              value={descriptions[i]}
              onChange={(e) => handleDescriptionChange(e)}
            />
          </Box>
      </Box>
    );
  }

  return (
    <Box component="form" noValidate sx={{ pt: 3, pb: 4 }}>
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
          <Box sx={{ p: 1, border: 0.5, borderRadius: 10 }}>
            <TextField
              name="name"
              label={helper.workPlace}
              onChange={(e) => handleNameChange(e)}
              value={nameInputValue}
            />
            <TextField
              name="position"
              label={helper.position}
              onChange={(e) => handlePositionChange(e)}
              value={positionInputValue}
            />
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
                onChange={(e) => handleEarlyChange(e)}
                value={earlyInputValue}
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
                onChange={(e) => handleLateChange(e)}
                value={lateInputValue}
              />
            </Grid>
            <Grid>
              <TextField
                name="locationCity"
                label={helper.workCity}
                onChange={(e) => handleCityChange(e)}
                value={cityInputValue}
              />
              <TextField
                name="locationCountry"
                label={helper.workCountry}
                onChange={(e) => handleCountryChange(e)}
                value={countryInputValue}
              />
            </Grid>
            <Typography sx={{ fontStyle: "italic" }}>
              {helper.description}
            </Typography>
            <TextareaAutosize
              label={helper.description}
              name="description"
              value={descriptionInputValue}
              onChange={(e) => handleDescriptionChange(e)}
            />
          </Box>
          {content}

          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleAddClick}
            >
              {helper.addButton}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={actions.workRemove}
            >
              {helper.removeButton}
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Work;
