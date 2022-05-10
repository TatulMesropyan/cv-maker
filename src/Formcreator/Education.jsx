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

const Education = () => {
  const dispatch = useDispatch();

  const nameInputValue = useSelector(
    (state) => state.educationDataReducer.name
  );
  const departmentInputValue = useSelector(
    (state) => state.educationDataReducer.department
  );
  const earlyInputValue = useSelector(
    (state) => state.educationDataReducer.earlyYear
  );
  const lateInputValue = useSelector(
    (state) => state.educationDataReducer.lateYear
  );

  const handleNameChange = (e) => {
    dispatch(actions.educationNameChange(e.target.value));
  };
  const handleDepartmentChange = (e) => {
    dispatch(actions.educationDepartmentChange(e.target.value));
  };
  const handleEarlyChange = (e) => {
    dispatch(actions.educationEarlyYearChange(e.target.value));
  };
  const handleLateChange = (e) => {
    dispatch(actions.educationLateYearChange(e.target.value));
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
            {helper.eduInfo}
          </Typography>
          <div key={""} className="menuWrapper">
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
                  onChange={handleNameChange}
                  value={nameInputValue}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="department"
                  label={helper.departmentLabel}
                  onChange={handleDepartmentChange}
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
                  onChange={handleEarlyChange}
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
                  onChange={handleLateChange}
                  value={lateInputValue}
                />
              </Grid>
            </Box>
          </div>
          {/* ))} */}
          <Grid item xs={3} sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={actions.educationAdd}
            >
              {helper.addButton}
            </Button>
            {/* {educationDataReducer.length > 1 && ( */}
            <Button
              variant="contained"
              color="error"
              onClick={actions.educationRemove}
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
export default Education;
