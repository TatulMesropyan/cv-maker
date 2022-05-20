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
		name: "skills",
		label: "Skill",
		inputType: "input",
	},
];

export default function Skills({ getData }) {
	const topic = "Skills";

	const handleData = (data) => {
		let val = {
			topic: topic,
			body: [{ secondaryText: data.map((_v) => _v.skills) }],
		};
		getData(val, topic);
	};
	return (
		<>
			<Grid container columnSpacing={2} pt={4}>
				<Grid item xs={12}>
					<Box className="line" pb={2}>
						<Typography fontSize="20px">Skills</Typography>
					</Box>
				</Grid>
			</Grid>
			<Section getData={handleData} content={content} />
		</>
	);
}
