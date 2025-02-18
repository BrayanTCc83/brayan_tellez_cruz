import type { JSX } from "astro/jsx-runtime";
import { useEffect, useState } from "react";
import LightMode from "./icons/LightMode";
import DarkMode from "./icons/DarkMode";

const body = document.getElementById("root");
const LOCAL_STORAGE_MODE_KEY = 'brayantellez_mode';

const ToggleDarkMode = (): JSX.Element => {
    const [ isDarkMode, setDarkMode ] = useState<boolean>(true);

    useEffect(() => {
        const mode = localStorage.getItem(LOCAL_STORAGE_MODE_KEY);
        if(mode === 'dark') {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        const mode = localStorage.getItem(LOCAL_STORAGE_MODE_KEY);
        if(mode === 'dark') {
            body?.classList.add('dark');
            if(body?.classList.contains('light')){
                body?.classList.remove('light');
            }
        } else {
            if(body?.classList.contains('dark')){
                body?.classList.remove('dark');
            }
            body?.classList.add('light');
        }
    }, [ isDarkMode ]);

    const handleToggleMode = () => {
        localStorage.setItem(LOCAL_STORAGE_MODE_KEY, isDarkMode ? 'dark' : 'light');
        setDarkMode(!isDarkMode);
    }

    return <div className="switch" onClick={handleToggleMode}>
        <button className={ !isDarkMode ? 'dark' : 'light' }>
            <LightMode/>
            <DarkMode/>
        </button>
    </div>
}

export default ToggleDarkMode;