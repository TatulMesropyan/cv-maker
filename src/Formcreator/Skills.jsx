import labels from "../Components/labels";
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
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/Actions/skillsActions";
import { useCallback } from "react";
const Skills = () => {
  const dispatch = useDispatch();
  const { skills, inputValue } = useSelector(
    (state) => state.skillsDataReducer
  );
  const handleSkillChange = (e) => {
    dispatch(actions.setSkillsInput(e.target.value));
  };
  const addSkillList = useCallback(() => {
    dispatch(actions.skillsAdd());
  }, [dispatch]);
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
            {labels.skills}
          </Typography>
          <Grid>
            <TextField
              value={inputValue}
              label={labels.skills}
              name="skill"
              onChange={(e) => handleSkillChange(e)}
            />
          </Grid>
          <Grid sx={{ p: 2 }}>
            <Button variant="contained" color="success" onClick={addSkillList}>
              {labels.addButton}
            </Button>
          </Grid>
          {skills.map((skill, index) => (
            <div key={index}>
              <Grid >
                <Grid sx={{p:2}}>
                  <TextField
                    value={skill}
                    label={labels.skills}
                    name="skill"
                    variant="filled"
                    disabled
                    onChange={handleSkillChange}
                  />
                </Grid>
                <Grid >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={actions.skillsRemove}
                  >
                    {labels.removeButton}
                  </Button>
                </Grid>
              </Grid>
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};
export default Skills;
