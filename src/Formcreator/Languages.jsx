import helper from "../Components/helper";
import * as actions from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import store from "../redux/store";
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

const Languages = () => {
  const dispatch = useDispatch();

  const languageInputValue = useSelector(
    (state) => state.languageDataReducer.language
  );
  const handleLanguageChange = (e) => {
    dispatch(actions.languageChange(e.target.value));
  };
  const handleSubmit = () => {
    console.log(store.getState());
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
            {helper.language}
          </Typography>
          {/* {languagesData.map((singleLanguage, index) => ( */}
          <div key={"index"}>
            <Grid>
              <TextField
                value={languageInputValue}
                label={helper.language}
                name="language"
                onChange={handleLanguageChange}
              />
            </Grid>
          </div>
          {/* ))} */}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={actions.languageAdd}
            >
              {helper.addButton}
            </Button>
            {/* {languagesData.length > 1 && ( */}
            <Button
              variant="contained"
              color="error"
              onClick={actions.languageRemove}
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
export default Languages;
