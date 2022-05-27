
import React, { useEffect, useState } from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';


const multiLang = {
  /* eslint-disable no-unused-vars */

  useDropdown: (languages) => {
    const [state, setState] = useState(languages.en);

    const handleSelectedLanguage = (e, getData) => {
      setState(languages[e.target.value]);
    }

    Object.keys(languages).map(function (key) {
      languages[key] = { ...languages[key], "bcp47": key };
    })
    const Dropdown = ({ getData, filter = [] }) => {

      // need's to edit
      const filtered = Object.keys(languages)
				.filter((key) => !filter.includes(key))
				.reduce((obj, key) => {
					obj[key] = languages[key];
					return obj;
				}, {});

      useEffect(() => {
        getData(state.bcp47);
      }, [state]);

      return (
        <div className='languageDropdown'>
          <Select
            disabled={languages.length === 0}
            value={state.bcp47}
            onChange={(e) => handleSelectedLanguage(e, getData)}
            onBlur={(e) => handleSelectedLanguage(e, getData)}
          >
            {Object.keys(filtered).map(key => (
              <MenuItem value={filtered[key].bcp47} key={filtered[key].bcp47} >
                {filtered[key].emoji} {filtered[key].name}
              </MenuItem>
            ))}
          </Select>
        </div>
      )
    }
    return [state, Dropdown, setState];
  }
}

export default multiLang;