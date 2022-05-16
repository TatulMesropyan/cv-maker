import React, { useState ,useContext,createContext} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export const SnackbarContext = createContext();

export default function CustomizedSnackbars({ children }) {
	const classes = useStyles();

	const [stateSnackbar, setStateSnackbar] = useState({
		open: false,
		severity: "",
		message: "",
	});

	const setStateSnackbarContext = (open, message, severity) =>
		setStateSnackbar({ ...stateSnackbar, open, message, severity });

	const handleClose = () => setStateSnackbar({ ...stateSnackbar, open: false });

	const { open, severity, message } = stateSnackbar;

	return (
		<SnackbarContext.Provider value={setStateSnackbarContext}>
			<div className={classes.root}>
				<Snackbar
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity={severity}>
						{message}
					</Alert>
				</Snackbar>
			</div>
			{children}
		</SnackbarContext.Provider>
	);
}