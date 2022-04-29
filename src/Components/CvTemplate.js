import React from "react";
import '../CV.css';
import { Grid, Container, Typography } from '@mui/material';
import 'material-icons/iconfont/material-icons.css';
import logoPng from '../images/img.png'
import textPng from '../images/img_1.png'
import leftSectionPng from '../images/img_2.png'
import watermark from '../images/img_3.png'
import {Article} from "./Article";


export function CvTemplate()
{

    return (
      <div className="mainContainer">
          <div className="watermark">
              <img width="100%" src={watermark} alt="#"/>
          </div>
          <div>
              <img src={leftSectionPng} className="header-background" alt="#"/>
              <Grid container sx={{height: "100%", marginTop: "50px"}} direction="row" alignItems="top"
                    justifyContent="space-between">
                  <Grid item display="flex" alignItems="center" sx={{marginLeft: "178px", marginTop: "56px"}}>
                      <div style={{width: 191, height: 191, borderRadius: "50%", backgroundColor: "blue"}}>
                          {/*<img src="" alt=""/>*/}
                      </div>
                      <div style={{paddingLeft: 25, marginTop: -30}}>
                          <Grid>
                              <p className="header-text textAlignLeft" style={{fontSize: 36, fontWeight: 900}}>Abraham Hayrapetyan</p>
                          </Grid>
                          <Grid sx={{marginTop: "8px"}}>
                              <p className="header-text textAlignLeft" style={{fontWeight: 300}}>Senior Flutter Developer</p>
                          </Grid>
                      </div>
                  </Grid>
                  <Grid item sx={{marginRight: "50px"}}>
                      <Grid display="flex" justifyContent="right" alignItems="center">
                          <div style={{height: 68, marginRight: 15}}>
                              <img src={logoPng} alt="#" height="100%"/>
                          </div>
                          <div style={{height: 30}}>
                              <img src={textPng} alt="#" height="100%"/>
                          </div>
                      </Grid>
                      <Grid sx={{paddingTop: "30px"}}>
                          <Grid>
                              <p className="header-text textAlignRight"><span style={{fontSize: "18px"}}
                                                                              className="material-icons">location_on</span> Armenia, Ghukasavan </p>
                          </Grid>
                          <Grid sx={{marginTop: "10px"}}>
                              <p className="header-text textAlignRight" style={{fontWeight: 500}}><span
                                  style={{fontSize: "18px", transform: "rotate(-45deg)"}}
                                  className="material-icons">send</span> <b>Email</b>: candidate+abrahamyan@start49.com
                              </p>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </div>
          <Grid container sx={{marginTop : "38px", padding : "0 100px"}} columnSpacing={{xs : 6}} justifyContent="space-between" direction="row" alignItems="top">
              <Grid item xs={4}>
                  <h3 className="topic">Summary</h3>
                  <p className="text-secondary">
                      I have been working as a software developer for more than 6 years with about 25 completed projects in my portfolio. The most known of projects in my portfolio are Volterman, Smart push, Qartez, GG, First aid Armenia, Cinema star, FCBank etc. Other big projects are for Hotel and Restaurant Management. Most of my experience is in mobile application development, but I am also experienced in TV application and Backend development.
                  </p>
              </Grid>
              <Grid container alignItems="top" item xs={8}>
                  <Grid item xs={12}>
                      <h3 className="topic">Experience</h3>
                  </Grid>
                  <Grid container item columnSpacing={{xs: 6}}>
                      <Article subtopic="IMEASYSTEMS" secondary_text="I have been working as a software developer for more than 6 years with about 25 completed
                              projects in my portfolio. The most known of projects in my portfolio are Volterman, Smart
                              push, Qartez, GG, First aid Armenia, Cinema star, FCBank etc. Other big projects are for Hotel
                              and Restaurant Management. Most of my experience is in mobile application development, but I
                              am also experienced in TV application and Backend development."/>
                      <Article secondary_text="I have been working as a software developer for more than 6 years with about 25 completed
                              projects in my portfolio. The most known of projects in my portfolio are Volterman, Smart
                              push, Qartez, GG, First aid Armenia, Cinema star, FCBank etc. Other big projects are for Hotel
                              and Restaurant Management. Most of my experience is in mobile application development, but I
                              am also experienced in TV application and Backend development."/>
                  </Grid>
              </Grid>
              {/*<Grid item xs={4}>*/}
              {/*    <h3 className="topic">Summary</h3>*/}
              {/*    <p className="text-secondary">*/}
              {/*        I have been working as a software developer for more than 6 years with about 25 completed projects in my portfolio. The most known of projects in my portfolio are Volterman, Smart push, Qartez, GG, First aid Armenia, Cinema star, FCBank etc. Other big projects are for Hotel and Restaurant Management. Most of my experience is in mobile application development, but I am also experienced in TV application and Backend development.*/}
              {/*    </p>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={4}>*/}
              {/*    <h3 className="topic">Summary</h3>*/}
              {/*    <p className="text-secondary">*/}
              {/*        I have been working as a software developer for more than 6 years with about 25 completed projects in my portfolio. The most known of projects in my portfolio are Volterman, Smart push, Qartez, GG, First aid Armenia, Cinema star, FCBank etc. Other big projects are for Hotel and Restaurant Management. Most of my experience is in mobile application development, but I am also experienced in TV application and Backend development.*/}
              {/*    </p>*/}
              {/*</Grid>*/}
          </Grid>
      </div>
    );
}