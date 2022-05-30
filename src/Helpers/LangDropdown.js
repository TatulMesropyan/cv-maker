import React, { useEffect, useState } from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function Dropdown({languages, getData, defaultValue = null}) {
	const [state, setState] = useState(defaultValue ? languages[defaultValue] : languages.en);

	const handleSelectedLanguage = (e) => {
		setState(languages[e.target.value]);
	};

  useEffect(() => {
    getData(state.bcp47);
  }, [state]);
	
	return (
    <div className="languageDropdown">
      <Select
        disabled={languages.length === 0}
        value={state.bcp47}
        onChange={(e) => handleSelectedLanguage(e)}
        onBlur={(e) => handleSelectedLanguage(e)}
      >
        {Object.keys(languages).map((key) => (
          <MenuItem value={languages[key].bcp47} key={languages[key].bcp47}>
            {languages[key].emoji} {languages[key].name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}