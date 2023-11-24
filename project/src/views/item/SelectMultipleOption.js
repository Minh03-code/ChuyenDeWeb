import React, { useState } from 'react';
function SelectOption(props) {
    const [text, setText] = useState();
    const changeText = (e) => {
        setText(e.target.value);
        props.changeValue(e.target.value);
    }
    return (
        <>
            <select className="form-select" multiple aria-label="Multiple select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </>
    )
}
export default SelectOption;