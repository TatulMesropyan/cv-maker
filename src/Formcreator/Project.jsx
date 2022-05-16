import labels from "../Components/labels";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
	TextField,
	Button,
	TextareaAutosize,
	Typography,
	Grid,
	Box,
	Card,
	CardContent,
} from "@mui/material";
import * as actions from "../redux/Actions/projectActions";
import { useCallback } from "react";

const Project = () => {
	const dispatch = useDispatch();

	const { names, nameInputValue } = useSelector(
		(state) => state.projectDataReducer
	);
	const { descriptions, descriptionInputValue } = useSelector(
		(state) => state.projectDataReducer
	);
	const { responsibilities, responsibilitiesInputValue } = useSelector(
		(state) => state.projectDataReducer
	);
	const handleNameChange = (e) => {
		dispatch(actions.setProjectName(e.target.value));
	};
	const handleDescriptionChange = (e) => {
		dispatch(actions.setProjectDescription(e.target.value));
	};
	const handleResponseChange = (e) => {
		dispatch(actions.setProjectResponse(e.target.value));
	};
	const handleAddClick = useCallback(() => {
		dispatch(actions.projectAdd());
	}, [dispatch]);

	let content = [];

	for (let i = 0; i < names.length; i++) {
		content.push(
			<Box key={i} pt={2} pb={2}>
				<Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
					<Grid>
						<TextField
							value={names[i]}
							label={labels.projectName}
							name="name"
							onChange={handleNameChange}
						/>
					</Grid>
					<Grid>
						<Typography
							gutterBottom={true}
							variant="h6"
							align="center"
							sx={{ fontStyle: "italic" }}
						>
							{labels.description}
						</Typography>
						<TextareaAutosize
							value={descriptions[i]}
							label={labels.description}
							name="description"
							onChange={(e) => handleDescriptionChange(e)}
						/>
					</Grid>
					<Grid>
						<Typography
							gutterBottom={true}
							variant="h6"
							align="center"
							sx={{ fontStyle: "italic" }}
						>
							{labels.responsibilities}
						</Typography>
						<TextareaAutosize
							value={responsibilities[i]}
							label={labels.responsibilities}
							name="responsibilities"
							onChange={(e) => handleResponseChange(e)}
						/>
					</Grid>
				</Box>
				<Button
					variant="contained"
					color="error"
					onClick={actions.projectRemove}
				>
					{labels.removeButton}
				</Button>
			</Box>
		);
	}

	return (
		<Box component="form" noValidate sx={{ pt: 3 }}>
			<Card sx={{ mt: 4 }} raised={true}>
				<CardContent>
					<Box>
						<Typography
							gutterBottom={true}
							variant="h5"
							align="center"
							sx={{ fontWeight: "bold" }}
						>
							{labels.projects}
						</Typography>
					</Box>
					<Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
						<Grid>
							<TextField
								value={nameInputValue}
								label={labels.projectName}
								name="name"
								onChange={(e) => handleNameChange(e)}
							/>
						</Grid>
						<Grid>
							<Typography
								gutterBottom={true}
								variant="h6"
								align="center"
								sx={{ fontStyle: "italic" }}
							>
								{labels.description}
							</Typography>
							<TextareaAutosize
								value={descriptionInputValue}
								label={labels.description}
								name="description"
								onChange={(e) => handleDescriptionChange(e)}
							/>
						</Grid>
						<Grid>
							<Typography
								gutterBottom={true}
								variant="h6"
								align="center"
								sx={{ fontStyle: "italic" }}
							>
								{labels.responsibilities}
							</Typography>
							<TextareaAutosize
								value={responsibilitiesInputValue}
								label={labels.responsibilities}
								name="responsibilities"
								onChange={(e) => handleResponseChange(e)}
							/>
						</Grid>
					</Box>
					<Grid sx={{ p: 2 }}>
						<Button
							variant="contained"
							color="success"
							onClick={handleAddClick}
						>
							{labels.addButton}
						</Button>
					</Grid>

					{content}
				</CardContent>
			</Card>
		</Box>
	);
};
export default Project;
