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
