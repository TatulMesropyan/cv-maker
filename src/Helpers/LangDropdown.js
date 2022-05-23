
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
    const Dropdown = ({ getData }) => {
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