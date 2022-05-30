import React from "react";
import {
	Grid,
	Typography,
	Box,
} from "@mui/material";
import Section from "./SectionGenerator";
import useSessionData from "../../Helpers/useSessionData";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";

const content = [
	{
		grid: 12,
		name: "skills",
		label: "Skill",
		inputType: "input",
	},
];

export default function Skills({ getData }) {
	const [defaultValues, setDefaultValues, getValue] = useSessionData();
	const topic = "Skills";

	const handleData = (data) => {
		let val = {
			topic: topic,
			body: [{ secondaryText: data.map((_v) => _v.skills) }],
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
				defaultValues={getValue(["main", topic])}
				sizeLimit={40}
				content={content}
			/>
		</>
	);
}
