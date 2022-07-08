/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const sessionName = "SESSION_STORAGE_DATA";

export default function useSessionData() {
    const data = useSelector(state => state.templateDataReducer);
    const [sessionData, setSessionData] = useState(JSON.parse(sessionStorage.getItem(sessionName)));

    const removeSession = () => {
        setSessionData(null);
        sessionStorage.setItem(sessionName, null);
    };

    const getValue = (key) => {
        try {
            if (Array.isArray(key)) {
                let value = sessionData || {...data};
                key.forEach((v) => {
                    value = value[v];
                });

                return value;
            }

            if (sessionData)
                return sessionData[key];
            return data[key];

        } catch {
            return null;
        }
    };

    return [sessionData, removeSession, getValue];
}
