import React from "react";
import {
	Grid,
	Typography,
	Box,
} from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";
import Section from "./Section";
import formatDate from "../../Helpers/utils";

const content = [
	{
		grid: 6,
		name: "education_name",
		label: "Education Institution Name",
		inputType: "input",
	},
	{
		grid: 6,
		name: "education_department",
		label: "Education Department",
		inputType: "input",
	},
	{
		grid: 6,
		name: "education_from",
		label: "From",
		inputType: "date",
	},
	{
		grid: 6,
		name: "education_to",
		label: "To",
		inputType: "date",
	},
];

export default function Education({ getData }) {
	const topic = "Education";

	const handleData = (data) => {
		let val = {
			topic: topic,
			body: data.map((_v) => {
				return {
					subtopic: _v.education_name,
					secondarySubtopic: _v.education_department,
					date: formatDate(_v.education_from, _v.education_to),
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
						<Typography fontSize="20px">Education Info</Typography>
					</Box>
				</Grid>
			</Grid>
			<Section
				topic="Education"
				getData={handleData}
				content={content}
				divisionLine={true}
			/>
		</>
	);
}
