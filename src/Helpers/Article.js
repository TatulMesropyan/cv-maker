import React from "react";
import { Box } from '@mui/material';
import LanguagePacket from "./languages.json";
import '../CV.css';


export function Article({ topic, subtopic, secondarySubtopic, date, languages, secondaryText, location }) {
	let secText;

	if (secondaryText) {
		if (Array.isArray(secondaryText)) {
			secText = secondaryText.map((itm, index) => {
				return (
					<ul classme="text-list" key={index}>
						<li>{itm}</li>
					</ul>
				);
			});
		} else {
			secText = <p className="text-secondary">{secondaryText}</p>;
		} 
	}

	return (
		<>
			{topic && <h3 className="topic">{topic}</h3>}
			{subtopic && <h3 className="sub-topic">{subtopic}</h3>}
			{secondarySubtopic && (
				<Box className="sub-topic-secondary">
					<h2>{secondarySubtopic}</h2>
					{date && <h3>{date}</h3>}
				</Box>
			)}
			{secondaryText && secText}
			{languages &&
				languages.map((v, i) => {
					if (v) {
						return (
							<Box key={i} className="Languages">
								<span style={{ marginRight: "12px" }}>
									{LanguagePacket[v].emoji}
								</span>
									{LanguagePacket[v].name}
							</Box>
						);
					}
				})}
			{location && (
				<Box className="location">
					<span className="material-icons">location_on</span>
					<h3>{location}</h3>
				</Box>
			)}
		</>
	);
}