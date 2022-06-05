import React from "react";
import { Grid } from "@mui/material";
import Section from "./SectionGenerator";
import RenderAvatar from "./Avatar";
import useSessionData from "../../Helpers/useSessionData";
import "material-icons/iconfont/material-icons.css";
import "./Form.css";

const Headercontent = [
	{
		grid: 12,
		name: "fname",
		label: "First Name",
		inputType: "input",
		textType: "fname",
	},
	{
		grid: 12,
		name: "lname",
		label: "Last Name",
		inputType: "input",
		textType: "lname",
	},
];

const Bodycontent = [
	{
		grid: 6,
		name: "country",
		label: "Country",
		inputType: "input",
		textType: "noNumber",
	},
	{
		grid: 6,
		name: "city",
		label: "City",
		inputType: "input",
		textType: "noNumber",
	},
	{
		grid: 6,
		name: "email",
		label: "Email Address",
		inputType: "email",
	},
	{
		grid: 6,
		name: "position",
		label: "Position",
		inputType: "input",
		textType: "noNumber",
	},
];

export default function Personal({ getData }) {
	  /* eslint-disable no-unused-vars */
	const [defaultValues, setDefaultValues, getValue] = useSessionData();
	const topic = "Personal";

	return (
		<>
			<Grid container alignItems="center" columnSpacing={3}>
				<Grid item xs={12} lg={3} textAlign="center">
					<RenderAvatar getData={getData} topic="Personal" />
				</Grid>
				<Grid item sm={12} lg={9} alignContent="space-around">
					<Section
						getData={(e) => getData(e, topic, e)}
						content={Headercontent}
						defaultValues={getValue("header")}
						dynamic={false}
					/>
				</Grid>
			</Grid>
			<Grid container alignContent="space-around">
				<Grid item xs={12}>
					<Section
						getData={(e) => getData(e, topic, e)}
						content={Bodycontent}
						defaultValues={getValue("header")}
						dynamic={false}
					/>
				</Grid>
			</Grid>
		</>
	);
}
