import helper from "../Components/helper";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
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

const Certificates = () => {
  const dispatch = useDispatch();

  const certificateInputValue = useSelector(
    (state) => state.certificateDataReducer.certificate
  );
  const handleCertificateChange = (e) => {
    dispatch(actions.certificateChange(e.target.value));
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
            {helper.certAndCourse}
          </Typography>
          {/* {certificate.map((singleCerteficate, index) => ( */}
          <div key={"index"}>
            <Grid>
              <TextField
                value={certificateInputValue}
                label={helper.certAndCourse}
                name="certificate"
                onChange={handleCertificateChange}
              />
            </Grid>
          </div>
          {/* ))} */}
          <Grid sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={actions.certificateAdd}
            >
              {helper.addButton}
            </Button>
            {/* {certificate.length > 1 && ( */}
            <Button
              variant="contained"
              color="error"
              onClick={actions.certificateRemove}
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
export default Certificates;
