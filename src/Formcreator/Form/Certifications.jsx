import React from "react";
import {
	Grid,
	Typography,
	Box,
} from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";
import Section from "./SectionGenerator";

const content = [
	{
		grid: 12,
		name: "certifications",
		label: "Certification Or Course",
		inputType: "input",
	},
];

export default function Certifications({ getData }) {
	const topic = "Certifications & Courses";

	const handleData = (data) => {
		let val = {
			topic: topic,
			body: [{ secondaryText: data.map((_v) => _v.certifications) }],
		};
		getData(val, topic);
	};
	return (
		<>
			<Grid container columnSpacing={2} pt={4}>
				<Grid item xs={12}>
					<Box className="line" pb={2}>
						<Typography fontSize="20px">Certifications & Courses</Typography>
					</Box>
				</Grid>
			</Grid>
			<Section
				topic="Certifications & Courses"
				getData={handleData}
				content={content}
			/>
		</>
	);
}
