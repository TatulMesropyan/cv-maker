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

const Headercontent = [
	{
		grid: 12,
		name: "fname",
		label: "First Name",
		inputType: "input",
	},
	{
		grid: 12,
		name: "lname",
		label: "Last Name",
		inputType: "input",
	},
];

const Bodycontent = [
	{
		grid: 6,
		name: "email",
		label: "Email Address",
		inputType: "input",
	},
	{
		grid: 6,
		name: "phone",
		label: "Phone Number",
		inputType: "input",
	},
	{
		grid: 6,
		name: "country",
		label: "Country",
		inputType: "input",
	},
	{
		grid: 6,
		name: "city",
		label: "City",
		inputType: "input",
	},
	{
		grid: 6,
		name: "position",
		label: "Position",
		inputType: "input",
	},
	{
		grid: 6,
		name: "birthday",
		label: "Birthday",
		inputType: "date",
	},
];

export default function Personal({ getData }) {
	return (
		<>
			<Grid container columnSpacing={4}>
				<Grid item xs={3}>
					<Box
						sx={{
							borderRadius: "8px",
							width: "100%",
							height: "150px",
							backgroundColor: "gray",
						}}
					></Box>
				</Grid>
				<Grid item xs={9} alignContent="space-around">
					<Section getData={getData} topic="Personal" content={Headercontent} dynamic={false} />
				</Grid>
			</Grid>
			<Box pt={3}>
				<Section getData={getData} topic="Personal" content={Bodycontent} dynamic={false} />
			</Box>
		</>
	);
}
