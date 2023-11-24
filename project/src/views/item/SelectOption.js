import React, { useState } from 'react';
function SelectOption(props) {
    const [text, setText] = useState();
    const changeText = (e) => {
        setText(e.target.value);
        props.changeValue(e.target.value);
    }
    return (
        <>
            <div className="form-floating">
                <select value={text} onChange={changeText} className="form-select" aria-label="Default select example">
                    {
                        props.list && props.list.length > 0 && props.list.map((item, index) => {
                            return (
                                <option value={item.value}>{item.ten}</option>
                            )
                        })
                    }
                </select>
                <label for="floatingSelect">{props.label}</label>
            </div>
        </>
    )
}
export default SelectOption;