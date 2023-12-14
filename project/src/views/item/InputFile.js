import React, { useState } from 'react';
function InputFile(props) {
    const { label, onChangeFile } = props;
    const handleImageChange = (e) => {
        onChangeFile(e.target.files[0]);
        
    };
    return (
        <>
            <div className="mb-3">
                <label for="formFile" className="form-label">{label}</label>
                <input className="form-control" type="file" id="formFile" onChange={handleImageChange} />
            </div>
        </>
    )
}
export default InputFile;