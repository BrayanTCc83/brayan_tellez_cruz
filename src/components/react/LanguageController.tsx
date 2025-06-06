import React, { useState } from "react";
import World from "/assets/icons/World.svg?raw";
import CH from "/assets/flags/ch.svg?raw";


import type { ILangSupport } from "../../interface/LangSupport";

const LanguageController = ({ lang }: ILangSupport): React.JSX.Element => {
    const [ hidden, setHidden ] = useState<boolean>(true);

    return <div className="language-controller">
        <ul className={`langs-container ${hidden ? 'hide' : ''}`}>
            <li>
                <a className="tag">
                    <CH/>
                    <span>Español</span>
                </a>
            </li>
            <li>
                <a className="tag">
                    <CH/>
                    <span>English</span>
                </a>
            </li>
            <li>
                <a className="tag">
                    <CH/>
                    <span>汉语</span>
                </a>
            </li>
        </ul>
        <button className={`tag`} onClick={() => setHidden(!hidden)}>
            <World/>
            <span>{lang}</span>
        </button>
    </div>
};

export default LanguageController;