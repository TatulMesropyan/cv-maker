import helper from "../Components/helper";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import store from "../redux/store";
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

const Work = () => {
  const dispatch = useDispatch();

  const nameInputValue = useSelector((state) => state.workDataReducer.name);
  const earlyInputValue = useSelector(
    (state) => state.workDataReducer.earlyYear
  );
  const positionInputValue = useSelector(
    (state) => state.workDataReducer.position
  );
  const lateInputValue = useSelector((state) => state.workDataReducer.lateYear);
  const descriptionInputValue = useSelector(
    (state) => state.workDataReducer.description
  );
  const cityInputValue = useSelector((state) => state.workDataReducer.city);
  const countryInputValue = useSelector(
    (state) => state.workDataReducer.country
  );

  const handleNameChange = (e) => {
    dispatch(actions.workNameChange(e.target.value));
  };
  const handleDescriptionChange = (e) => {
    dispatch(actions.workDescriptionChange(e.target.value));
  };
  const handlePositionChange = (e) => {
    dispatch(actions.workPositionChange(e.target.value));
  };
  const handleEarlyChange = (e) => {
    dispatch(actions.workEarlyYearChange(e.target.value));
  };
  const handleLateChange = (e) => {
    dispatch(actions.workLateYearChange(e.target.value));
  };
  const handleCountryChange = (e) => {
    dispatch(actions.workCountryChange(e.target.value));
  };
  const handleCityChange = (e) => {
    store.dispatch(actions.workCityChange(e.target.value));
  };
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
          {/* {workData.map((singleWork, index) => ( */}
          <div key={"index"} className="menuWrapper">
            <Box sx={{ p: 1, border: 0.5, borderRadius: 10 }}>
              <TextField
                name="name"
                label={helper.workPlace}
                onChange={handleNameChange}
                value={nameInputValue}
              />
              <TextField
                name="position"
                label={helper.position}
                onChange={handlePositionChange}
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
                  onChange={handleEarlyChange}
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
                  onChange={handleLateChange}
                  value={lateInputValue}
                />
              </Grid>
              <Grid>
                <TextField
                  name="locationCity"
                  label={helper.workCity}
                  onChange={handleCityChange}
                  value={cityInputValue}
                />
                <TextField
                  name="locationCountry"
                  label={helper.workCountry}
                  onChange={handleCountryChange}
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
                onChange={handleDescriptionChange}
              />
            </Box>
          </div>
          {/* ))} */}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={actions.workAdd}
            >
              {helper.addButton}
            </Button>
            {/* {workData.length > 1 && ( */}
            <Button
              variant="contained"
              color="error"
              onClick={actions.workRemove}
            >
              {helper.removeButton}
            </Button>
            {/* )} */}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Work;
