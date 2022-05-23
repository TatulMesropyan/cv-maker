import React from "react";
import { Grid, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Buttons({
	removeClbck,
	addClbck,
	addButton = true,
	removeButton = false,
}) {
	return (
		<Grid container>
			<Grid item xs={12} pt={2} textAlign="center">
				{removeButton && (
					<>
						<Box display="inline-block" p={1}>
							<Button
								onClick={() => removeClbck()}
								variant="contained"
								color="error"
								startIcon={<DeleteIcon />}
							>
								Del
							</Button>
						</Box>

						{addButton && <Box display="inline-block" p={1}>
							<Button
								onClick={addClbck}
								variant="contained"
								color="success"
								startIcon={<AddIcon />}
							>
								Add
							</Button>
						</Box>}
					</>
				)}

				{!removeButton && (
					<Box>
						<Button
							fullWidth
							size="large"
							onClick={addClbck}
							variant="outlined"
							startIcon={<AddIcon />}
						>
							Add Section
						</Button>
					</Box>
				)}
			</Grid>
		</Grid>
	);
}
