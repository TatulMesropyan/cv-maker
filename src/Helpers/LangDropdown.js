
import React, { useState } from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { getDate } from 'date-fns';

const multiLang = {
  useDropdown: (languages) => {
    const [state, setState] = useState(languages.en);

    const handleSelectedLanguage = (e) => {
      console.log(languages);
      setState(languages[e.target.value]);
    }

    Object.keys(languages).map(function (key) {
      languages[key] = { ...languages[key], "bcp47": key };
    })
    const Dropdown = ({getDATA}) => {
      return (
        <div className='languageDropdown'>
          <Select
            disabled={languages.length === 0}
            value={state.bcp47}
            onChange={(e) => handleSelectedLanguage(e)}
            onBlur={e => handleSelectedLanguage(e)}
          >
            {Object.keys(languages).map(key => (
              <MenuItem value={languages[key].bcp47} key={languages[key].bcp47} >
                {languages[key]?.emoji} {languages[key].name}
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