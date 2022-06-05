import React from "react";
import {
	Grid,
	Typography,
	Box,
} from "@mui/material";
import Section from "./SectionGenerator";
import formatDate from "../../Helpers/utils";
import useSessionData from "../../Helpers/useSessionData";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";

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
		textType : "date_from",
	},
	{
		grid: 6,
		name: "education_to",
		label: "To",
		inputType: "date",
		textType : "date_to",
	},
];

export default function Education({ getData }) {
	  /* eslint-disable no-unused-vars */
	const [defaultValues, setDefaultValues, getValue] = useSessionData();
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
				sizeLimit={10}
				divisionLine={true}
			/>
		</>
	);
}
