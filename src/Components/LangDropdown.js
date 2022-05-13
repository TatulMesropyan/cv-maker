
import React, { useEffect, useState } from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import * as actions from "../redux/Actions/languageActions"
import { useDispatch } from 'react-redux';


const multiLang = {
  useDropdown: (languages) => {
    const [state, setState] = useState(languages.en);
    useEffect(() => {
      console.log(state)
    })
    const id = 'use-dropdown' + Math.random();

    const dispatch = useDispatch()

    const handleSelectedLanguage = (e) => {
      setState(languages[e.target.value])
      dispatch(actions.setLanguageInput(languages[e.target.value].name))
    }

    Object.keys(languages).map(function (key) {
      languages[key] = { ...languages[key], "bcp47": key };
    })
    const Dropdown = () => {
      return (
        <div className='languageDropdown'>
          <Select
            id={id}
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