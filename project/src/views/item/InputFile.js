import React, { useState } from 'react';
function InputFile(props) {
    const [text, setText] = useState(props.value !== "" ? props.value : "");
    if (text !== "") {
        props.changeValue(text);
    }
    const changeText = (e) => {
        setText(e.target.value)
        props.changeValue(e.target.value);
    }
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">{props.label}</span>
                <input type={props.type} value={text} onChange={changeText} className="form-control" placeholder={props.placeholder} aria-label={props.placeholder} aria-describedby="basic-addon1" />
            </div>
        </>
    )
}
export default InputFile;