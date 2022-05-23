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
		name: "summary",
		label: "Summary",
		inputType: "input",
	},
];

export default function Summary({ getData }) {
	const topic = "Summary";

	const handleData = (data) => {
		let val = {
			topic: topic,
			body: data.map((_v) => {
				return {
					secondaryText: _v.summary,
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
						<Typography fontSize="20px">{topic}</Typography>
					</Box>
				</Grid>
			</Grid>
			<Section
				getData={handleData}
				content={content}
                sizeLimit={1}
				divisionLine={false}
			/>
		</>
	);
}