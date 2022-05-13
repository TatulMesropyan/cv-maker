import helper from "../Components/helper";
import * as actions from "../redux/Actions/languageActions";
import { useSelector, useDispatch } from "react-redux";
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
import { useCallback } from "react";

const Languages = () => {
  const dispatch = useDispatch();

  const { languages, inputValue } = useSelector(
    (state) => state.languageDataReducer
  );

  const handleLanguageChange = (e) => {
    dispatch(actions.setLanguageInput(e.target.value));
  };

  const handleAddClick = useCallback(() => {
    dispatch(actions.languageAdd());
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
            {helper.language}
          </Typography>
          <Grid>
            <TextField
              value={inputValue}
              label={helper.language}
              name="language"
              onChange={(e) => handleLanguageChange(e)}
            />
          </Grid>
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleAddClick}
            >
              {helper.addButton}
            </Button>
          </Grid>
          {languages.map((language, index) => (
            <div key={index}>
              <Grid sx={{ p: 2 }}>
                <TextField
                  value={language}
                  label={helper.language}
                  name="language"
                  disabled
                  onChange={handleLanguageChange}
                />
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  color="error"
                  onClick={actions.languageRemove}
                >
                  {helper.removeButton}
                </Button>
              </Grid>
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};
export default Languages;
