import React, { useState, useCallback, useEffect } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dropdown from "../../Helpers/LangDropdown";
import languagePacket from "../../Helpers/languages.json";

export default function GenerateInputs({ content, index, inputHandler, values }) {
  /* eslint-disable no-unused-vars */
  const [inputValue, setInputValue] = useState({});

  const inputValidatior = (e, index, itmName, type) => {
    let value = e.target.value;

		switch (type) {
			case "fname": {
				if (/(^\W|[0-9])/i.test(value)) return;
        value = value.charAt(0).toUpperCase() + value.slice(1);
				break;
			}
      case "lname": {
        if (/(^\W|[0-9])/i.test(value)) return;
        value = value.charAt(0).toUpperCase() + value.slice(1);
				break;
			}
			case "noNumber": {
				if (/(^\W|[0-9])/i.test(value)) return;
				break;
			}
			default: {
				break;
			}
		}

    setInputValue((v) => ({ ...v, [itmName]: value }));
    inputHandler(value, itmName, index);
	};

  useEffect(() => {
		Object.keys(inputValue).map((v) => {
			inputHandler(inputValue[v], v, index);
		});
	}, []);

  const processContent = useCallback((val, index) => {
    return val.map((itm, i) => {
      let value = null;

      let inputProps = {
        label : itm.label,
        fullWidth : true,
        multiline : itm.multiline,
        type : itm.inputType,
        margin : "normal",
      }

      switch (itm.inputType) {
				case "date": {
					if (inputValue[itm.name] === undefined) {
						let val = new Date();
						if (values && values[itm.name]) {
							val = new Date(values[itm.name]);
						}
						setInputValue((v) => ({ ...v, [itm.name]: val }));
					}
					value = (
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								value={inputValue[itm.name]}
								maxDate={new Date()}
								onChange={(e) =>
									inputValidatior(
										{ target: { value: e } },
										index,
										itm.name,
										itm.textType
									)
								}
								renderInput={(params) => {
									let par = { ...params, ...inputProps };

									return <TextField {...par} />;
								}}
							/>
						</LocalizationProvider>
					);
					break;
				}
				case "select": {
					let props = {};
					if (values && values[itm.name])
						props = { defaultValue: values[itm.name] };

					value = (
						<Box pt={2} textAlign="center">
							<Dropdown
								{...props}
								languages={languagePacket}
								getData={(e) => inputHandler(e, itm.name, index)}
							/>
						</Box>
					);
					break;
				}
				default: {
					if (inputValue[itm.name] === undefined) {
						let val = "";
						if (values && values[itm.name]) {
							val = values[itm.name];
						}
						setInputValue((v) => ({ ...v, [itm.name]: val }));
					}

					value = (
						<TextField
							{...inputProps}
							value={inputValue[itm.name]}
							variant="outlined"
							required
							onChange={(e) =>
								inputValidatior(e, index, itm.name, itm.textType)
							}
						/>
					);
					break;
				}
			}
      return (
        <Grid item xs={itm.grid} key={i}>
          {value}
        </Grid>
      );
    });
  });
  return <>{processContent(content, index)}</>;
}
