
import React, { useState } from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';


const multiLang = {
  useDropdown: (languages) => {
    const [state, setState] = useState(languages.en);

    const handleSelectedLanguage = (e, getData) => {
      setState(languages[e.target.value]);
      getData(e);
    }
 
    Object.keys(languages).map(function (key) {
      languages[key] = { ...languages[key], "bcp47": key };
    })
    const Dropdown = ({getData}) => {
      return (
        <div className='languageDropdown'>
          <Select
            disabled={languages.length === 0}
            value={state.bcp47}
            // onChange={(e) =>getData(languages[e.target.value])}
            // onBlur={(e) =>getData(languages[e.target.value])}
            onChange={(e) => handleSelectedLanguage(e, getData)}
          >
            {Object.keys(languages).map(key => (
              <MenuItem value={languages[key].bcp47} key={languages[key].bcp47} >
                {languages[key].emoji} {languages[key].name}
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