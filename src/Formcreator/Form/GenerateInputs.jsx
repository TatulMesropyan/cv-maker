import React, { useState, useCallback } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import languageDropdown from "../../Helpers/LangDropdown";
import languagePacket from "../../Helpers/languages.json";

export default function GenerateInputs({ content, index, inputHandler }) {
  /* eslint-disable no-unused-vars */
  const [language, LanguageDropdown] = languageDropdown.useDropdown(
    languagePacket
  );

  const [inputValue, setInputValue] = useState({});

  const inputValidatior = (e, index, itmName, type) => {
		switch (type) {
			case "fname": {
				if (!/[^a-z]/i.test(e.target.value)) {
					setInputValue((v) => ({ ...v, [itmName]: e.target.value }));
					inputHandler(e.target.value, itmName, index);
				}

				break;
			}
      case "lname": {
				if (!/[^a-z-]/i.test(e.target.value)) {
					setInputValue((v) => ({ ...v, [itmName]: e.target.value }));
					inputHandler(e.target.value, itmName, index);
				}

				break;
			}
			case "noNumber": {
				if (!/[0-9]/i.test(e.target.value)) {
					setInputValue((v) => ({ ...v, [itmName]: e.target.value }));
					inputHandler(e.target.value, itmName, index);
				}

				break;
			}
			default: {
				setInputValue((v) => ({ ...v, [itmName]: e.target.value }));
				inputHandler(e.target.value, itmName, index);
				break;
			}
		}
	};

  const processContent = useCallback((val, index) => {
    return val.map((itm, i) => {
      let value = null;

      switch (itm.inputType) {
        case "date": {
          if (inputValue[itm.name] === undefined)
            setInputValue((v) => ({...v, [itm.name] : new Date()}));
          value = (
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								maxDate={new Date()}
								label={itm.label}
								value={inputValue[itm.name]}
								onChange={(e) => {
									inputValidatior(
										{ target: { value: e } },
										index,
										itm.name,
										itm.textType
									);
								}}
								renderInput={(params) => {
									params.fullWidth = true;
									params.margin = "normal";

									return <TextField {...params} />;
								}}
							/>
						</LocalizationProvider>
					);
          break;
        }
        case "input": {
          if (inputValue[itm.name] === undefined)
            setInputValue((v) => ({...v, [itm.name] : ""}));

          value = (
            <TextField
              name={itm.name}
              label={itm.label}
              multiline={itm.multiline}
              margin="normal"
              variant="outlined"
              value={inputValue[itm.name]}
              required
              fullWidth
              onChange={(e) => {
                inputValidatior(e, index, itm.name, itm.textType)
                // setVal((v) => v + 1);
                // inputHandler(inputValue[i], itm.name, index);
              }}
            />
          );
          break;
        }
        case "select": {
          value = (
            <Box pt={2} textAlign="center">
              <LanguageDropdown
                getData={(e) => inputHandler(e, itm.name, index)}
              />
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
  });
  return <>{processContent(content, index)}</>;
}
