import * as actions from "../redux/Actions/educationActions";
import helper from "../Components/helper";
import "../App.css";
import {
	TextField,
	Button,
	Input,
	Typography,
	Grid,
	Box,
	Card,
	CardContent
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const Education = () => {
	const dispatch = useDispatch();

	const { names, nameInputValue } = useSelector(
		(state) => state.educationDataReducer
	);
	const { departments, departmentInputValue } = useSelector(
		(state) => state.educationDataReducer
	);
	const { earlyYears, earlyInputValue } = useSelector(
		(state) => state.educationDataReducer
	);
	const { lateYears, lateInputValue } = useSelector(
		(state) => state.educationDataReducer
	);

	const handleNameChange = (e) => {
		dispatch(actions.setEducationName(e.target.value));
	};
	const handleDepartmentChange = (e) => {
		dispatch(actions.setEducationDepartment(e.target.value));
	};
	const handleEarlyChange = (e) => {
		dispatch(actions.setEducationEarly(e.target.value));
	};
	const handleLateChange = (e) => {
		dispatch(actions.setEducationLate(e.target.value));
	};

	const handleAddClick = useCallback(() => {
		dispatch(actions.educationAdd());
	}, [dispatch]);

	let content = [];

	for (let i = 0; i < names.length; i++) {
		content.push(
			<Box key={i} sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
				<div className="menuWrapper">
					<Grid
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 2 }}
						item
						xs={4}
					>
						<TextField
							name="name"
							label={helper.eduLabel}
							onChange={handleNameChange}
							disabled
							value={names[i]}
						/>
					</Grid>
				</div>
				<div>
					<Grid item xs={6}>
						<TextField
							name="department"
							label={helper.departmentLabel}
							onChange={handleDepartmentChange}
							disabled
							value={departments[i]}
						/>
					</Grid>
				</div>
				<div>
					<Grid>
						<Typography
							gutterBottom={true}
							variant="h6"
							align="center"
							sx={{ fontStyle: "italic" }}
						>
							{helper.years}
						</Typography>
					</Grid>
					<Input
						type="number"
						label={helper.labelEarly}
						placeholder="2014"
						name="earlyYear"
						margin="dense"
						min="1900"
						max="2099"
						variant="contained"
						step="1"
						onChange={(e) => handleEarlyChange(e)}
						value={earlyYears[i]}
					/>
					-
					<Input
						type="number"
						label={helper.labelEarly}
						name="lateYear"
						min="1900"
						placeholder="2022"
						max="2099"
						step="1"
						onChange={(e) => handleLateChange(e)}
						value={lateYears[i]}
					/>
				</div>
				<div>
					<Grid pt={2}>
						<Button
							variant="contained"
							color="error"
							onClick={actions.educationRemove}
						>
							{helper.removeButton}
						</Button>
					</Grid>
				</div>
			</Box>
		);
	}

	return (
		<Box component="form" noValidate sx={{ pt: 3, pb: 4 }}>
			<Card sx={{ mt: 4 }} raised={true}>
				<CardContent>
					<Typography
						gutterBottom={true}
						variant="h5"
						align="center"
						sx={{ fontWeight: "bold" }}
					>
						{helper.eduInfo}
					</Typography>
					<Box sx={{ p: 4, border: 0.5, borderRadius: 10 }}>
						<Grid
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 2, md: 2 }}
							item
							xs={4}
						>
							<TextField
								name="name"
								label={helper.eduLabel}
								onChange={(e) => handleNameChange(e)}
								value={nameInputValue}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								name="department"
								label={helper.departmentLabel}
								onChange={(e) => handleDepartmentChange(e)}
								value={departmentInputValue}
							/>
						</Grid>
						<Grid>
							<Grid>
								<Typography
									gutterBottom={true}
									variant="h6"
									align="center"
									sx={{ fontStyle: "italic" }}
								>
									{helper.years}
								</Typography>
							</Grid>
							<Input
								type="number"
								label={helper.labelEarly}
								placeholder="2014"
								name="earlyYear"
								margin="dense"
								min="1900"
								max="2099"
								variant="contained"
								step="1"
								onChange={(e) => handleEarlyChange(e)}
								value={earlyInputValue}
							/>
							-
							<Input
								type="number"
								label={helper.labelEarly}
								name="lateYear"
								min="1900"
								placeholder="2022"
								max="2099"
								step="1"
								onChange={(e) => handleLateChange(e)}
								value={lateInputValue}
							/>
						</Grid>
						<Grid item xs={3} sx={{ p: 2 }}>
							<Button
								variant="contained"
								color="success"
								onClick={handleAddClick}
							>
								{helper.addButton}
							</Button>
						</Grid>
					</Box>
					{content}
				</CardContent>
			</Card>
		</Box>
	);
};
export default Education;
