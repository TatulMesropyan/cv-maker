import React, { useEffect, useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import store from "../redux/store";
import { dataTest } from "./dataForTest";
import "../CV.css";
import { Article } from "./Article";
import logoPng from "../images/img.png";
import textPng from "../images/img_1.png";
import leftSectionPng from "../images/img_2.png";
import { SectionColumn } from "./SectionColumn";
import { SectionRow } from "./SectionRow";

export default function CvTemplate() {
	// const data = store.getState();
	// let header = data.formDataReducer.header;
	// let main = data.formDataReducer.main;
	// header.image = dataTest.header.image;
	const pdfRef = useRef();

	const header = dataTest.header;
	const main = dataTest.main;

	const imagePerson = 'url("data:image/png;base64,' + header.image + '")';

	let contentRow = [];
	let contentSection = [];

	function generateHtml() {
		html2canvas(pdfRef.current, { scale: 2 }).then((canvas) => {
			const width = canvas.width;
			const height = canvas.height;
			let doc = new jsPDF("p", "px", [width, height]);
			const img = canvas.toDataURL("image/jpeg");
			doc.addImage(img, "JPEG", 0, 0, width, height);
			doc.save("CV");
		});

		return true;
	}

	main.forEach((itm, index) => {
		let content = [];
		const body = [].concat(itm.body);
		const contentType = itm.body.length > 2;

		body.forEach((it, ind) => {
			content.push(
				contentType ? (
					<Grid item xs={6} key={ind}>
						<Article {...it} />
					</Grid>
				) : (
					<Article {...it} key={ind} />
				)
			);
		});

		if (contentType) {
			contentSection.push(
				<SectionColumn
					article={<Article topic={itm.topic} />}
					content={content}
					key={index}
				/>
			);
		} else {
			contentRow.push(
				<SectionRow
					article={<Article topic={itm.topic} />}
					content={content}
					key={index}
				/>
			);
		}
	});

	useEffect(() => {
		// generateHtml();
	}, []);

	return (
		<Box className="CvBackground">
			<Box className="mainContainer" ref={pdfRef}>
				{/* <Box> */}
				<img src={leftSectionPng} className="header-background" alt="#" />
				<Grid
					container
					pt="50px"
					direction="row"
					alignItems="top"
					justifyContent="space-between"
				>
					<Grid item display="flex" alignItems="center" ml="182px" mt="62px">
						<Box
							className="image-container"
							style={{ backgroundImage: imagePerson }}
						></Box>
						<Box pl="25px" mb="35px">
							<Box>
								<Typography
									fontSize="36px"
									fontWeight="900"
									className="header-text textAlignLeft"
								>
									{header.fname + " " + header.lname}
								</Typography>
							</Box>
							<Box>
								<Typography
									fontSize="16px"
									fontWeight="300"
									className="header-text textAlignLeft"
								>
									{header.position}
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item mr="50px">
						<Box display="flex" justifyContent="right" alignItems="center">
							<Box height="68px" mr="15px">
								<img src={logoPng} alt="#" height="100%" />
							</Box>
							<Box height="30px">
								<img src={textPng} alt="#" height="100%" />
							</Box>
						</Box>
						<Box pt="30px">
							<Box>
								<Typography className="header-text textAlignRight">
									<span style={{ fontSize: "18px" }} className="material-icons">
										location_on
									</span>
									{header.location}
								</Typography>
							</Box>
							<Box mt="10px">
								<Typography
									className="header-text textAlignRight"
									fontWeight="500"
								>
									<span
										style={{ fontSize: "18px", transform: "rotate(-45deg)" }}
										className="material-icons"
									>
										send
									</span>{" "}
									<b>Email:</b> {header.email}
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
				{/* </Box> */}

				<Grid
					container
					mt="38px"
					p="0 100px"
					columnSpacing={{ xs: 6 }}
					justifyContent="space-between"
					direction="row"
					alignItems="top"
				>
					<Grid item container xs={4} direction="column" rowSpacing={{ xs: 8 }}>
						{contentRow}
					</Grid>
					<Grid item container xs={8} direction="column" rowSpacing={{ xs: 8 }}>
						{contentSection}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
