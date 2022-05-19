import React from "react";
import { Grid, TextField } from "@mui/material";

export default function GenerateInputs({ content, index, inputHandler }) {
	const processContent = (val, index) => {
		return val.map((itm, i) => {
			let props = {};
			switch (itm.inputType) {
				case "date":
					props = { InputLabelProps: { shrink: true }, type: "date" };
					break;
				default:
					break;
			}
			return (
				<Grid item xs={itm.grid} key={i}>
					<TextField
						{...props}
						name={itm.name}
						label={itm.label}
						margin="normal"
						variant="outlined"
						fullWidth
						onChange={(e) => {
							inputHandler(e, itm.name, index);
						}}
					/>
				</Grid>
			);
		});
	};
	return <>{processContent(content, index)}</>;
}