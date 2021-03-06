import React, {useEffect, useState} from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../redux/Actions/formAction";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Summary from "./Summary";
import Workplace from "./Workplace";
import Personal from "./Personal";
import Languages from "./Languages";
import "material-icons/iconfont/material-icons.css";
import axios from "axios";
import "./Form.css";

export default function Form() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [data, setData] = useState({ header: {}, main: {} });
	const [localData, setLocalData] = useState({ header: {}, main: {} });

	const getData = (data, _topic, local = null) => {
		if (data.length === 0) return;

		switch (_topic) {
			case "Personal": {
				let val = data[0];
				setData((v) => ({ ...v, header: { ...v.header, ...val } }));
				if (local) {
					let localVal = local[0];
					setLocalData((v) => ({ ...v, header: { ...v.header, ...localVal } }));
				}
				break;
			}

			default: {
				setData((v) => ({ ...v, main: { ...v.main, [_topic]: data } }));
				if (local)
					setLocalData((v) => ({ ...v, main: { ...v.main, [_topic]: local } }));
				break;
			}
		}
	};

	const HandleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(actions.updateFormData(data));
		sessionStorage.setItem("SESSION_STORAGE_DATA", JSON.stringify(localData));
		navigate("/cv");
		axios.post("http://localhost:3000/",data)
		.then(response => console.log(response.data))
	};

	return (
		<Box className="mainContent">
			<Container>
				<Grid pt="3rem" pb="5rem" container justifyContent="center">
					<Box item>
						<Typography fontSize="30px" fontWeight="Bold" color="white">
							CV Maker
						</Typography>
					</Box>
				</Grid>
			</Container>
			<Container>
				<form onSubmit={HandleOnSubmit} name="main">
					<Grid container justifyContent="center">
						<Grid item xs={10}>
							<Box className="formContent">
								<Box className="sectionName line">
									<Typography fontSize="20px">Personal Details</Typography>
								</Box>
								<Grid container>
									<Personal getData={getData} />
									<Summary getData={getData} />
									<Education getData={getData} />
									<Workplace getData={getData} />
									<Projects getData={getData} />
									<Certifications getData={getData} />
									<Skills getData={getData} />
									<Languages getData={getData} />
								</Grid>
							</Box>
						</Grid>
						<Grid item xs={3} textAlign="center">
							<Box pt={6}>
								<Button
									type="submit"
									size="large"
									variant="contained"
									endIcon={<SendIcon />}
									fullWidth
								>
									Submit
								</Button>
							</Box>
						</Grid>
					</Grid>
				</form>
			</Container>
		</Box>
	);
}
