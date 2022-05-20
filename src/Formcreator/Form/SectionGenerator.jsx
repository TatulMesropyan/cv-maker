import React, { useEffect, useState, useMemo } from "react";
import { Grid, Box } from "@mui/material";
import "./Form.css";
import Buttons from "./Buttons";
import GenerateInputs from "./GenerateInputs";

export default function Section({ getData, content, divisionLine = false, dynamic = true }) {
	const inputs = useMemo(() => Object.fromEntries(content.map((itm) => [itm.name, ""])), [content]);

	const [contents, setContents] = useState([]);
	const [inputValues, setInputValues] = useState([]);

	const handleInputs = (e, name, index) => {
		setInputValues((v) => {
			let value = [...v];
			value[index][name] = e.target.value;
			return value;
		});
	};

	const AddContent = (e) => {
		setInputValues((v) => [...v, { ...inputs }]);
		setContents((v) => {
			return [
				...v,
				<Grid container pt={0} columnSpacing={2} key={v.length}>
					<GenerateInputs
						content={content}
						index={v.length}
						inputHandler={handleInputs}
					/>
					{divisionLine && (
						<Grid item xs={12}>
							<Box pt={1} className="line"></Box>
						</Grid>
					)}
				</Grid>,
			];
		});
	};

	const RemoveContent = () => {
		setInputValues((v) => v.filter((vl, i) => i !== v.length - 1));
		setContents((v) => v.filter((vl, i) => i !== v.length - 1));
	};

	useEffect(() => {
		getData(inputValues);
	}, [inputValues]);

	useEffect(() => {
		if (!dynamic && contents.length === 0) AddContent();
	}, []);

	return (
		<>
			{contents}
			{dynamic && (
				<Buttons
					removeClbck={RemoveContent}
					addClbck={AddContent}
					removeButton={contents.length > 0}
				/>
			)}
		</>
	);
}
