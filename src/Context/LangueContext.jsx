import React, {createContext, useState} from "react";
export const monContexte = createContext();

export default function LangueContext(props) {
    const languageOption = ["FR", "EN", "ES"];
    let navLang = navigator.language.substring(0,2).toUpperCase();
    if (languageOption.indexOf(navLang) === -1) {
        navLang = "EN"
    }
    const [choiceLangue, setChoiceLangue] = useState(navLang);
    const modifyLanguage = (newLangue) => {
        setChoiceLangue(newLangue)
    }
    return (
        <monContexte.Provider value={{choiceLangue, modifyLanguage}}>
            {props.children}
        </monContexte.Provider>
    )
}