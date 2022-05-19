import React from "react";
import {Grid} from "@mui/material";

export function SectionRow({article, content}) {
    return (
        <Grid item>
            {article}
            {content}
        </Grid>
    );
}