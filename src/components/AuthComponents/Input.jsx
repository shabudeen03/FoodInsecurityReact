import { useState } from 'react';

function Input({ cssClass, inputType="text", inputId, inputName, inputPlaceholder="", inputValue="" }) {
    const [userInput, setUserInput] = useState(inputValue);    
    
    if(inputType === "submit") {
        return (
            <input className={cssClass} type={inputType} value={userInput} onChange={(event) => setUserInput(event.target.value)} />
        );
    }

    return (
        <input className={cssClass} type={inputType} id={inputId} name={inputName} placeholder={userInput} onChange={(event) => setUserInput(event.target.value)} />
    );
}

export default Input;