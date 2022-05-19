import React, { useState } from "react";
import {
	Grid,
	Typography,
	Box,
	Container,
	TextField,
	Button,
	Input,
} from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";
import Section from "./Section";

const content = [
	{
		grid: 12,
		name: "languages",
		label: "language",
		inputType: "input",
	},
];

export default function Languages({ getData }) {
	const topic = "Languages";

	const handleData = (data) => {
		let val = {
			topic: topic,
			body: [{ secondaryText: data.map((_v) => _v.languages) }],
		};
		getData(val, topic);
	};
	return (
		<>
			<Grid container columnSpacing={2} pt={4}>
				<Grid item xs={12}>
					<Box className="line" pb={2}>
						<Typography fontSize="20px">Languages</Typography>
					</Box>
				</Grid>
			</Grid>
			<Section getData={handleData} topic="Languages" content={content} />
		</>
	);
}
