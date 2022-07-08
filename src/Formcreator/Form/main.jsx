import React from "react";
import {Grid, Typography, Box, Container, Button} from "@mui/material";
import {useDispatch} from "react-redux";
import useSessionData from "./../../Helpers/useSessionData";
import {useNavigate} from "react-router-dom";
import * as actions from "../../redux/Actions/templateAction";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";

export default function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [defaultValues, removeSession, getValue] = useSessionData();

    const WithDataHandler = (e) => {
        const file = document.getElementById("file");
        file.click();
    }

    const UploadHandler = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            const data = JSON.parse(e.target.result);

            let uploadPromise = new Promise((resolve, reject) => {
                dispatch(actions.updateTemplateData(data));
                // removeSession();
                resolve();
            });

            uploadPromise.then(() => {
                navigate("/main");
            });
        };
    };

    const WithOutDataHandler = (e) => {
        e.preventDefault();
        navigate("/main");
    }

    return (
        <Box className="mainContent">
            <Container>
                <Grid pt="3rem" pb="5rem" container justifyContent="center">
                    <Box item>
                        <Typography fontSize="30px" fontWeight="Bold" color="white">
                            CV Maker
                        </Typography>
                    </Box>
                </Grid>
            </Container>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={6}>
                        <Box className="formContent">
                            <Box className="sectionName line">
                                <Typography fontSize="20px">Continue</Typography>
                            </Box>
                            <Grid container>
                                <Grid item xs={12} textAlign="center">
                                    <Box pt={1}>
                                        <Button
                                            size="large"
                                            variant="contained"
                                            fullWidth
                                            onClick={WithDataHandler}
                                        >
                                            <input onChange={UploadHandler} type="file" id="file" hidden/>
                                            With Data
                                        </Button>
                                    </Box>
                                    <Box pt={4}>
                                        <Button
                                            size="large"
                                            variant="outlined"
                                            fullWidth
                                            onClick={WithOutDataHandler}
                                        >
                                            Without Data
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}