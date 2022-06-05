import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Section from "./SectionGenerator";
import useSessionData from "../../Helpers/useSessionData";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";

const content = [
	{
		grid: 12,
		name: "summary",
		label: "Summary",
		inputType: "input",
		multiline: true,
	},
];

export default function Summary({ getData }) {
	  /* eslint-disable no-unused-vars */
	const [defaultValues, setDefaultValues, getValue] = useSessionData();
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
		getData(val, topic, data);
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
				defaultValues={getValue(["main", topic])}
				sizeLimit={1}
				divisionLine={false}
			/>
		</>
	);
}
