import helper from "../Components/helper";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  Button,
  TextareaAutosize,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import * as actions from "../redux/Actions/projectActions";

const Project = () => {
  const dispatch = useDispatch();

  const nameInputValue = useSelector((state) => state.projectDataReducer.name);
  const descriptionInputValue = useSelector(
    (state) => state.projectDataReducer.description
  );
  const responsInputValue = useSelector(
    (state) => state.educationDataReducer.responsibilities
  );
  const handleNameChange = (e) => {
    dispatch(actions.projectNameChange(e.target.value));
  };
  const handleDescriptionChange = (e) => {
    dispatch(actions.projectDescriptionChange(e.target.value));
  };
  const handleResponseChange = (e) => {
    dispatch(actions.projectResponseChange(e.target.value));
  };

  return (
    <Box component="form" noValidate sx={{ pt: 3 }}>
      <Card sx={{ mt: 4 }} raised={true}>
        <CardContent>
          <Box>
            <Typography
              gutterBottom={true}
              variant="h5"
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              {helper.projects}
            </Typography>
          </Box>
          {/* {projectData.map((singleProject, index) => ( */}
          <div key={"index"} className="menuWrapper">
            <Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
              <Grid>
                <TextField
                  value={nameInputValue}
                  label={helper.projectName}
                  name="name"
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid>
                <Typography
                  gutterBottom={true}
                  variant="h6"
                  align="center"
                  sx={{ fontStyle: "italic" }}
                >
                  {helper.description}
                </Typography>
                <TextareaAutosize
                  value={descriptionInputValue}
                  label={helper.description}
                  name="description"
                  onChange={handleDescriptionChange}
                />
              </Grid>
              <Grid>
                <Typography
                  gutterBottom={true}
                  variant="h6"
                  align="center"
                  sx={{ fontStyle: "italic" }}
                >
                  {helper.responsibilities}
                </Typography>
                <TextareaAutosize
                  value={responsInputValue}
                  label={helper.responsibilities}
                  name="responsibilities"
                  onChange={handleResponseChange}
                />
              </Grid>
            </Box>
          </div>
          {/* ))} */}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={actions.projectAdd}
            >
              {helper.addButton}
            </Button>
            {/* {projectData.length > 1 && ( */}
            <Button
              variant="contained"
              color="error"
              onClick={actions.projectRemove}
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
export default Project;
