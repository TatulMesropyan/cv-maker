import helper from "../Components/helper";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/Actions/certificateActions";
import certificateDataReducer from "../redux/Reducers/certificateDataReducer";
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

const Certificates = () => {
  const dispatch = useDispatch();

  const { certificates, inputValue } = useSelector(
    (state) => state.certificateDataReducer
  );

  const handleCertificateChange = (e) => {
    dispatch(actions.setCertificateInput(e.target.value));
  };

  const handleAddClick = useCallback(() => {
    dispatch(actions.certificateAdd());
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
            {helper.certAndCourse}
          </Typography>
          <Grid>
            <TextField
              value={inputValue}
              label={helper.certAndCourse}
              name="certificate"
              onChange={(e) => handleCertificateChange(e)}
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
          {certificates.map((certificate,index) =>(
          <div key={index}>
            <Grid>
              <Grid sx={{p:2}}>
            <TextField
            sx={{p:0}}
            value={certificate}
            onChange={handleCertificateChange}
            disabled="true"
            />
            </Grid>
            <Grid>
          <Button
              variant="contained"
              color="error"
              onClick={actions.certificateRemove}
            >
              {helper.removeButton}
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
export default Certificates;
