import labels from "../Components/labels";
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
            {labels.certAndCourse}
          </Typography>
          <Grid>
            <TextField
              value={inputValue}
              label={labels.certAndCourse}
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
              {labels.addButton}
            </Button>
          </Grid>
          {certificates.map((certificate, index) => (
            <div key={index}>
              <Grid>
                <Grid sx={{ p: 2 }}>
                  <TextField
                    sx={{ p: 0 }}
                    value={certificate}
                    label={labels.certAndCourse}
                    onChange={handleCertificateChange}
                    disabled
                    variant="filled"
                  />
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={actions.certificateRemove}
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
export default Certificates;
