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
import skillsDataReducer from "../redux/Reducers/skillsDataReducer";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
const Skills = () => {
  const dispatch = useDispatch();
  const skillInputValue = useSelector(
    (state) => state.skillsDataReducer.skillDiscription
  );
  const handleSkillChange = (e) => {
    dispatch(actions.skillsChange(e.target.value));
  };
  return (
    <Box component="form" noValidate sx={{ pt: 3, p3: 4 }}>
      <Card sx={{ mt: 4 }} raised={true}>
        <CardContent>
          <Typography
            gutterBottom={true}
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            {helper.skills}
          </Typography>
          {/* {skillsData.map((singleSkill, index) => ( */}
          <div key={"index"}>
            <Grid>
              <TextField
                value={skillInputValue}
                label={helper.skills}
                name="skillDiscription"
                onChange={handleSkillChange}
              />
            </Grid>
          </div>
          {/* ))} */}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={actions.skillsAdd}
            >
              {helper.skills}
            </Button>
            {/* {skillsData.length > 1 && ( */}
            <Button
              variant="contained"
              color="error"
              onClick={actions.skillsRemove}
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
export default Skills;
