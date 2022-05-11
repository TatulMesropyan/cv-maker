import * as actions from "../redux/Actions/educationActions";
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
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const Education = () => {
  const dispatch = useDispatch();

  const { names, nameInputValue } = useSelector(
    (state) => state.educationDataReducer
  );
  const { departments, departmentInputValue } = useSelector(
    (state) => state.educationDataReducer
  );
  const { earlyYears, earlyInputValue } = useSelector(
    (state) => state.educationDataReducer
  );
  const { lateYears, lateInputValue } = useSelector(
    (state) => state.educationDataReducer
  );

  const handleNameChange = (e) => {
    dispatch(actions.setEducationName(e.target.value));
  };
  const handleDepartmentChange = (e) => {
    dispatch(actions.setEducationDepartment(e.target.value));
  };
  const handleEarlyChange = (e) => {
    dispatch(actions.setEducationEarly(e.target.value));
  };
  const handleLateChange = (e) => {
    dispatch(actions.setEducationLate(e.target.value));
  };

  const handleAddClick = useCallback(() => {
    dispatch(actions.educationAdd());
  }, [dispatch]);

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
            {helper.eduInfo}
          </Typography>
          <Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
            <Grid
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
              item
              xs={4}
            >
              <TextField
                name="name"
                label={helper.eduLabel}
                onChange={(e) => handleNameChange(e)}
                value={nameInputValue}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="department"
                label={helper.departmentLabel}
                onChange={(e) => handleDepartmentChange(e)}
                value={departmentInputValue}
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
                onChange={(e) => handleEarlyChange(e)}
                value={earlyInputValue}
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
                onChange={(e) => handleLateChange(e)}
                value={lateInputValue}
              />
            </Grid>
            <Grid item xs={3} sx={{ p: 2 }}>
              <Button
                variant="contained"
                color="success"
                onClick={handleAddClick}
              >
                {helper.addButton}
              </Button>
            </Grid>
          </Box>
          <Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
            {names.map((name, index) => (
              <div key={index} className="menuWrapper">
                <Grid
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                  item
                  xs={4}
                >
                  <TextField
                    name="name"
                    label={helper.eduLabel}
                    onChange={handleNameChange}
                    disabled
                    value={name}
                  />
                </Grid>
              </div>
            ))}
            {departments.map((department, index) => (
              <div key={index}>
                <Grid item xs={6}>
                  <TextField
                    name="department"
                    label={helper.departmentLabel}
                    onChange={handleDepartmentChange}
                    disabled
                    value={department}
                  />
                </Grid>
              </div>
            ))}
            {earlyYears.map((earlyYear, index) => (
              <div key={index}>
                <Input
                  type="number"
                  label={helper.labelEarly}
                  name="lateYear"
                  disabled
                  onChange={handleLateChange}
                  value={earlyYear}
                />
              </div>
            ))}
            {lateYears.map((lateYear, index) => (
              <div key={index}>
                <Grid>
                  <Input
                    type="number"
                    label={helper.labelEarly}
                    name="earlyYear"
                    margin="dense"
                    disabled
                    variant="outlined"
                    onChange={handleEarlyChange}
                    value={lateYear}
                  />
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={actions.educationRemove}
                  >
                    {helper.removeButton}
                  </Button>
                </Grid>
              </div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Education;
