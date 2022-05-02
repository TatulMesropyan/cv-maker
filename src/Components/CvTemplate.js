import React from "react";
import '../CV.css';
import { Grid, Container, Typography, Box } from '@mui/material';
import 'material-icons/iconfont/material-icons.css';
import logoPng from '../images/img.png'
import textPng from '../images/img_1.png'
import leftSectionPng from '../images/img_2.png'
import {Article} from "./Article";

import {dataTest} from "./dataForTest";


export function CvTemplate()
{
    const header = dataTest.header;
    const main = dataTest.main.content;

    let contentRow = [];
    let contentSection = [];

    main.forEach((itm, index) => {
        let content = [];
        const body = [].concat(itm.body);
        let contentType = itm.body.length > 2;

        body.forEach((it, ind) => {
            content.push(contentType ? <Grid item xs={6} key={ind}><Article {...it}/></Grid> : <Article {...it} key={ind}/>);
        });

        if (contentType){
            contentSection.push(
                <Grid item key={index}>
                    <Grid item xs={12}>
                        <Box>
                            <Article topic={itm.topic}/>
                        </Box>
                    </Grid>
                    <Grid container item columnSpacing={{xs: 6}}>
                        {content}
                    </Grid>
                </Grid>
            );
        }else{
            contentRow.push(
                <Grid item key={index}>
                    <Article topic={itm.topic}/>
                    {content}
                </Grid>
            );
        }
    });

    const imagePerson = "url(\"data:image/png;base64," + header.image + "\")";

    return (
      <Box className="mainContainer">
          <Box>
              <img src={leftSectionPng} className="header-background" alt="#"/>
              <Grid container mt="50px" direction="row" alignItems="top"
                    justifyContent="space-between">
                  <Grid item display="flex" alignItems="center" ml="182px" mt="62px">
                      <Box className="image-container" style={{backgroundImage : imagePerson}}>
                      </Box>
                      <Box pl="25px" mb="35px">
                          <Box>
                              <Typography fontSize="36px" fontWeight="900" className="header-text textAlignLeft" >{header.fname + " " + header.lname}</Typography>
                          </Box>
                          <Box>
                              <Typography fontSize="16px" fontWeight="300" className="header-text textAlignLeft">{header.position}</Typography>
                          </Box>
                      </Box>
                  </Grid>
                  <Grid item mr="50px">
                      <Box display="flex" justifyContent="right" alignItems="center">
                          <Box height="68px" mr="15px">
                              <img src={logoPng} alt="#" height="100%"/>
                          </Box>
                          <Box height="30px">
                              <img src={textPng} alt="#" height="100%"/>
                          </Box>
                      </Box>
                      <Box pt="30px">
                          <Box>
                              <Typography className="header-text textAlignRight"><span style={{fontSize: "18px"}} className="material-icons">location_on</span>{header.location}</Typography>
                          </Box>
                          <Box mt="10px">
                              <Typography className="header-text textAlignRight" fontWeight="500"><span
                                  style={{fontSize: "18px", transform: "rotate(-45deg)"}}
                                  className="material-icons">send</span> <b>Email:</b> {header.email}
                              </Typography>
                          </Box>
                      </Box>
                  </Grid>
              </Grid>
          </Box>

          {/*----------------------Content----------------------*/}

          <Grid container mt="38px" p="0 100px" columnSpacing={{xs : 6}} justifyContent="space-between" direction="row" alignItems="top">
              <Grid item container xs={4} direction="column" rowSpacing={{xs:8}}>
                  {contentRow}
              </Grid>
              {/*-----------------*/}
              <Grid item container xs={8} direction="column" rowSpacing={{xs:8}}>
                  {contentSection}
              </Grid>
          </Grid>
      </Box>


    // <Grid item>
    //     <Grid item xs={12}>
    //         <Box>
    //             <h3 className="topic">Experience</h3>
    //         </Box>
    //     </Grid>
    //     <Grid container item columnSpacing={{xs: 6}}>
    //         <Grid item xs={6}>
    //             <h3 className="sub-topic">subtopic</h3>
    //             <Box className="sub-topic-secondary">
    //                 <h2>Mobile Team Lead (Flutter Developer)</h2>
    //                 <h3>2021 May - Present</h3>
    //             </Box>
    //             <p className="text-secondary">
    //                 I have been working as a software developer for more than 6 years with about 25 completed
    //                 projects in my portfolio. The most known of projects in my portfolio are Volterman, Smart
    //                 push, Qartez, GG, First aid Armenia, Cinema star, FCBank etc. Other big projects are for
    //                 Hotel and Restaurant Management. Most of my experience is in mobile application
    //                 development, but I am also experienced in TV application and Backend development.
    //             </p>
    //             <ul className="text-list">
    //                 <li>Formal Verification of partitioned netlists represented in Xilinx EDIF format. </li>
    //             </ul>
    //             <Box className="location">
    //                 <span className="material-icons">location_on</span>
    //                 <h3>Yerevan, Armenia</h3>
    //             </Box>
    //         </Grid>
    //         <Grid item xs={6}>
    //             <h3 className="sub-topic">subtopic</h3>
    //             <Box className="sub-topic-secondary">
    //                 <h2>Mobile Team Lead (Flutter Developer)</h2>
    //                 <h3>2021 May - Present</h3>
    //             </Box>
    //             <p className="text-secondary">
    //                 I have been working as a software developer for more than 6 years with about 25 completed
    //                 projects in my portfolio. The most known of projects in my portfolio are Volterman, Smart
    //                 push, Qartez, GG, First aid Armenia, Cinema star, FCBank etc. Other big projects are for
    //                 Hotel and Restaurant Management. Most of my experience is in mobile application
    //                 development, but I am also experienced in TV application and Backend development.
    //             </p>
    //             <ul className="text-list">
    //                 <li>Formal Verification of partitioned netlists represented in Xilinx EDIF format. </li>
    //             </ul>
    //             <Box className="location">
    //                 <span className="material-icons">location_on</span>
    //                 <h3>Yerevan, Armenia</h3>
    //             </Box>
    //         </Grid>
    //     </Grid>
    // </Grid>
    );
}