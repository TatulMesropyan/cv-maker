  /* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';

const sessionName = "SESSION_STORAGE_DATA";
const data = JSON.parse(sessionStorage.getItem(sessionName));

export default function useSessionData() {
	const [sessionData, setSessionData] = useState(JSON.parse(sessionStorage.getItem(sessionName)));

	const removeSession = () => {
		setSessionData(null);
		sessionStorage.setItem(sessionName, null);
	};

    const getValue = (key) => {
		try{
            if (Array.isArray(key))
            {
                let value = sessionData;
                key.forEach((v) => {
                    value = value[v];
                })

                return value;
            }

            return sessionData[key];
        }
        catch{
            return null;
        }
	};

    return [sessionData, removeSession, getValue];
}
