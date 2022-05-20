import labels from "../Helpers/labels"
import * as actions from "../redux/Actions/languageActions";
import { useSelector, useDispatch } from "react-redux";
import languageDropdown from "../Helpers/LangDropdown";
import languagePacket from "../Helpers/languages.json";
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


const Languages = ({getData,topic}) => {
  const dispatch = useDispatch();


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
          <LanguageDropdown getData={getData} topic={topic}/>
              <Grid>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleOnRemove}
                >
                  {labels.removeButton}
                </Button>
              </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Languages;
