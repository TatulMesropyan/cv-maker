import React from "react";
import '../CV.css';
import { Grid, Container, Typography, Box } from '@mui/material';


export function Article({topic, subtopic, secondarySubtopic, date, secondaryText, location}) {
    let secText;

    if (secondaryText !== undefined)
        if (Array.isArray(secondaryText)){
            secText = secondaryText.map((itm, index) => {
                return (
                    <ul className="text-list" key={index}>
                        <li>{itm}</li>
                    </ul>
                );
            });
        }else{
            secText = <p className="text-secondary">{secondaryText}</p>;
        }

    return (
        <>
            {topic !== undefined && <h3 className="topic">{topic}</h3>}
            {subtopic !== undefined && <h3 className="sub-topic">{subtopic}</h3>}
            {secondarySubtopic !== undefined &&
                <Box className="sub-topic-secondary">
                    <h2>{secondarySubtopic}</h2>
                    {date !== undefined && <h3>{date}</h3>}
                </Box>}
            {secondaryText !== undefined && secText}
            {location !== undefined &&
                <Box className="location">
                    <span className="material-icons">location_on</span>
                    <h3>{location}</h3>
                </Box>
            }
        </>
    );
}