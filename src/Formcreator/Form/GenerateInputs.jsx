import React from "react";
import { Grid, TextField, Box } from "@mui/material";
import languageDropdown from "../../Helpers/LangDropdown";
import languagePacket from "../../Helpers/languages.json";

export default function GenerateInputs({ content, index, inputHandler }) {
	const [language, LanguageDropdown] =
		languageDropdown.useDropdown(languagePacket);

	const processContent = (val, index) => {
		return val.map((itm, i) => {
			let value = null;

			switch (itm.inputType) {
				case "date": {
					value = (
						<TextField
							name={itm.name}
							label={itm.label}
							margin="normal"
							variant="outlined"
							fullWidth
							InputLabelProps={{ shrink: true }}
							type="date"
							onChange={(e) => {
								inputHandler(e, itm.name, index);
							}}
						/>
					);
					break;
				}
				case "input": {
					value = (
						<TextField
							name={itm.name}
							label={itm.label}
							margin="normal"
							variant="outlined"
							fullWidth
							onChange={(e) => {
								inputHandler(e, itm.name, index);
							}}
						/>
					);
					break;
				}
				case "select": {
					value = (
						<Box pt={2} textAlign="center">
							<LanguageDropdown getData={inputHandler} />
						</Box>
					);
					break;
				}
				default:
					break;
			}
			return (
				<Grid item xs={itm.grid} key={i}>
					{value}
				</Grid>
			);
		});
	};
	return <>{processContent(content, index)}</>;
}
