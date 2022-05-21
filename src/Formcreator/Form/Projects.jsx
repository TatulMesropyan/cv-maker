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
		grid: 6,
		name: "project_name",
		label: "Project Name",
		inputType: "input",
	},
	{
		grid: 6,
		name: "project_responsibilities",
		label: "Responsibilities",
		inputType: "input",
	},
	{
		grid: 12,
		name: "project_description",
		label: "Description",
		inputType: "input",
	},
];

export default function Projects({ getData }) {
	const topic = "Projects";

	const handleData = (data) => {
		let val = {
			topic: topic,
			body: data.map((_v) => {
				return {
					subtopic: _v.project_name,
					secondarySubtopic: _v.project_responsibilities,
					secondaryText: _v.project_description,
				};
			}),
		};
		getData(val, topic);
	};
	return (
		<>
			<Grid container columnSpacing={2} pt={4}>
				<Grid item xs={12}>
					<Box className="line" pb={2}>
						<Typography fontSize="20px">Projects</Typography>
					</Box>
				</Grid>
			</Grid>
			<Section
				getData={handleData}
				content={content}
				divisionLine={true}
			/>
		</>
	);
}