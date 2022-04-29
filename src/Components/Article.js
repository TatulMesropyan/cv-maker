import React from "react";
import '../CV.css';
import { Grid, Container, Typography } from '@mui/material';


export function Article({topic, subtopic, secondary_text}) {
    return (
        <Grid item xs={6}>
            {subtopic !== undefined && <h3 className="sub-topic">{subtopic}</h3>}
            {secondary_text !== undefined && <p className="text-secondary">{secondary_text}</p>}
        </Grid>
    );
}