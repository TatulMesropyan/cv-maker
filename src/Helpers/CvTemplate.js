import React, { useEffect, useRef, useMemo } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import store from "../redux/store";
import { Article } from "./Article";
import { SectionColumn } from "./SectionColumn";
import { SectionRow } from "./SectionRow";
import useSessionData from "./../Helpers/useSessionData";
import leftSectionPng from "../images/img_2.png";
import logoPng from "../images/img.png";
import textPng from "../images/img_1.png";
import "material-icons/iconfont/material-icons.css";
import "../CV.css";

export default function CvTemplate() {
    const navigate = useNavigate();
    const data = store.getState();
    const pdfRef = useRef();
    const [defaultValues, removeSession, getValue] = useSessionData();

    let header = data.formDataReducer.header || defaultValues.header;
    let main = Object.values(data.formDataReducer.main || defaultValues.main);
    const imagePerson = 'url("' + header.image + '")';

    const [contentRow, contentSection] = useMemo(() => {
        let row = [];
        let section = [];
        main.forEach((itm, index) => {
            let content = [];
            const body = [].concat(itm.body);
            const contentType = ["Projects", "Experience"].includes(itm.topic);
            body.forEach((it, ind) => {
                if (it && Object.values(it).some((v) => v.length)) {
                    content.push(
                        contentType ? (
                            <Grid item xs={6} key={ind}>
                                <Article {...it} />
                            </Grid>
                        ) : (
                            <Article {...it} key={ind} />
                        )
                    );
                }
            });
            if (content.length) {
                if (contentType) {
                    section.push(
                        <SectionColumn
                            article={<Article topic={itm.topic} />}
                            content={content}
                            key={index}
                        />
                    );
                } else {
                    row.push(
                        <SectionRow
                            article={<Article topic={itm.topic} />}
                            content={content}
                            key={index}
                        />
                    );
                }
            }
        });
        return [row, section];
    }, [data]);

    const generateHtml = () => {
        let shadowEffect = pdfRef.current.style.boxShadow;
        pdfRef.current.style.boxShadow = "none";
        html2canvas(pdfRef.current, { scale: 1 }).then((canvas) => {
            const width = canvas.width;
            const height = canvas.height;
            const orientation = width > height ? "l" : "p";
            let doc = new jsPDF(orientation, "px", [width, height]);
            const img = canvas.toDataURL("image/jpeg");
            doc.addImage(img, "JPEG", 0, 0, width, height);
            doc.save(header.fname?`${header.fname}'s CV`:"CV");
        });
        pdfRef.current.style.boxShadow = shadowEffect;

        const jsonString = `data:text/json,${encodeURIComponent(
            JSON.stringify(defaultValues)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = (header.fname?`${header.fname}'s CV`:"CV") + ".json";

        link.click();
    };

    useEffect(() => {
        if (!data.formDataReducer)
            navigate("/");
    })
    return (
        <Box className="CvBackground">
            <Box className="downloadButton">
                <Button
                    onClick={() => generateHtml()}
                    variant="contained"
                    color="primary"
                >
                    <DownloadIcon />
                </Button>
            </Box>
            <Box className="mainContainer" ref={pdfRef}>
                <img src={leftSectionPng} className="header-background" alt="#" />
                <Grid
                    container
                    pt="50px"
                    direction="row"
                    alignItems="top"
                    justifyContent="space-between"
                >
                    <Grid item display="flex" alignItems="center" ml="182px" mt="62px">
                        <Box
                            className="image-container"
                            style={{ backgroundImage: imagePerson }}
                        ></Box>
                        <Box pl="25px" mb="35px">
                            <Box>
                                <Typography
                                    fontSize="36px"
                                    fontWeight="900"
                                    className="header-text textAlignLeft"
                                >
                                    {header.fname + " " + header.lname}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    fontSize="16px"
                                    fontWeight="300"
                                    className="header-text textAlignLeft"
                                >
                                    {header.position}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item mr="50px">
                        <Box display="flex" justifyContent="right" alignItems="center">
                            <Box height="68px" mr="15px">
                                <img src={logoPng} alt="#" height="100%" />
                            </Box>
                            <Box height="30px">
                                <img src={textPng} alt="#" height="100%" />
                            </Box>
                        </Box>
                        <Box pt="30px">
                            <Box>
                                <Typography
                                    fontSize="16px"
                                    className="header-text textAlignRight"
                                >
                                    <span style={{ fontSize: "18px" }} className="material-icons">
                                        location_on
                                    </span>
                                    {header.country + ", " + header.city}
                                </Typography>
                            </Box>
                            <Box mt="10px">
                                <Typography
                                    fontSize="16px"
                                    className="header-text textAlignRight"
                                    fontWeight="500"
                                >
                                    <span
                                        style={{ fontSize: "18px", transform: "rotate(-45deg)" }}
                                        className="material-icons"
                                    >
                                        send
                                    </span>{" "}
                                    <b>Email:</b> {header.email}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    mt="38px"
                    p="0 100px"
                    columnSpacing={{ xs: 6 }}
                    justifyContent="space-between"
                    direction="row"
                    alignItems="top"
                >
                    <Grid item container xs={4} direction="column" rowSpacing={{ xs: 8 }}>
                        {contentRow}
                    </Grid>
                    <Grid item container xs={8} direction="column" rowSpacing={{ xs: 8 }}>
                        {contentSection}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}