import helper from "../Components/helper";
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
							label={helper.projectName}
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
							{helper.description}
						</Typography>
						<TextareaAutosize
							value={descriptions[i]}
							label={helper.description}
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
							{helper.responsibilities}
						</Typography>
						<TextareaAutosize
							value={responsibilities[i]}
							label={helper.responsibilities}
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
					{helper.removeButton}
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
							{helper.projects}
						</Typography>
					</Box>
					<Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
						<Grid>
							<TextField
								value={nameInputValue}
								label={helper.projectName}
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
								{helper.description}
							</Typography>
							<TextareaAutosize
								value={descriptionInputValue}
								label={helper.description}
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
								{helper.responsibilities}
							</Typography>
							<TextareaAutosize
								value={responsibilitiesInputValue}
								label={helper.responsibilities}
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
							{helper.addButton}
						</Button>
					</Grid>

					{content}
				</CardContent>
			</Card>
		</Box>
	);
};
export default Project;
