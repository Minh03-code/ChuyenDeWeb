import React, {useState} from 'react';
function InputText(props) {
    const [text, setText] = useState('');
    
    const changeText = (e)=>{
        setText(e.target.value)
        props.changeValue(e.target.value);
    }
    return (
        <>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">{props.label}</span>
                <input type={props.type} value={text} onChange={changeText} class="form-control" placeholder={props.placeholder} aria-label={props.placeholder} aria-describedby="basic-addon1" />
            </div>
        </>
    )
}
export default InputText;