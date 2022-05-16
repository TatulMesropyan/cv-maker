import labels from "../Components/labels";
import * as actions from "../redux/Actions/languageActions";
import { useSelector, useDispatch } from "react-redux";
import languageDropdown from "../Components/LangDropdown";
import languagePacket from "../Assets/languages.json";
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
import Checkbox from '@mui/material/Checkbox';


const Languages = () => {
  const dispatch = useDispatch();

  const { languageRedux } = useSelector((state) => state.languageDataReducer);

  const handleAddClick = useCallback(() => {
    dispatch(actions.languageAdd());
  }, [dispatch]);

  const handleOnRemove = (e, index) => {
    dispatch(actions.languageRemove(index));
  };

  const [language, LanguageDropdown] =
    languageDropdown.useDropdown(languagePacket);

  const checkBoxLabel = {
    one:"Low",
    two:"Elementary ",
    three:"Limited ",
    four:"Professional",
    five:"Native",
  }
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
            {labels.language}
          </Typography>
          <LanguageDropdown />
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleAddClick}
            >
              {labels.addButton}
            </Button>
            <Typography
              gutterBottom={true}
              variant="h5"
              align="center"
              sx={{ fontStyle: "italic" }}
            >
              Proficiency level
            </Typography>
            <Grid>
            <Typography
              gutterBottom={true}
              variant="h7"
              align="center"
              sx={{ fontStyle: "italic" }}
            >
              Low Proficiency
            </Typography>
            </Grid>
            <Grid>
            <Checkbox/>
            </Grid>
            <Grid>
            <Typography
              gutterBottom={true}
              variant="h7"
              align="center"
              sx={{ fontStyle: "italic" }}
            >
              Elementary Proficiency
            </Typography>
            </Grid>
            <Grid>
            <Checkbox/>
            </Grid>
            <Grid>
            <Typography
              gutterBottom={true}
              variant="h7"
              align="center"
              sx={{ fontStyle: "italic" }}
            >
              Limited Working Proficiency.
            </Typography>
            </Grid>
            <Grid>
            <Checkbox/>
            </Grid>
            <Grid>
            <Typography
              gutterBottom={true}
              variant="h7"
              align="center"
              sx={{ fontStyle: "italic" }}
            >
              Professional Working Proficiency
            </Typography>
            </Grid>
            <Grid>
            <Checkbox/>
            </Grid>
            <Grid>
            <Typography
              gutterBottom={true}
              variant="h7"
              align="center"
              sx={{ fontStyle: "italic" }}
            >
              Native Proficiency
            </Typography>
            </Grid>
            <Grid>
            <Checkbox/>
            </Grid>
          </Grid>
          {languageRedux.map((name, index) => (
            <div key={index}>
              <Grid sx={{ p: 2 }}>
                <TextField
                  disabled
                  variant="filled"
                  // value={language.emoji ? ` ${language.emoji}  ${name}` : name}
                  value={name}
                />
                <Grid></Grid>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleOnRemove}
                >
                  {labels.removeButton}
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
