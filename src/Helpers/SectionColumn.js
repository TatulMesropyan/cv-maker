import React from "react";
import {Box, Grid} from "@mui/material";


export function SectionColumn({article, content}) {
    return (
        <Grid item>
            <Grid item xs={12}>
                <Box>
                    {article}
                </Box>
            </Grid>
            <Grid container item columnSpacing={{xs: 6}}>
                {content}
            </Grid>
        </Grid>
    );
}