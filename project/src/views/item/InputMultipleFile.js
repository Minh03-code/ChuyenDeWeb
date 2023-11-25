import React, { useState } from 'react';
function InputMultipleFile(props) {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        // Get selected files from the input element
        const files = Array.from(e.target.files);
        setSelectedImages(files);
        props.onChangeFile(files);
    };
    return (
        <>
            <div className="mb-3">
                <label for="formFile" className="form-label">{props.label}</label>
                <input className="form-control" type="file" id="formFile" multiple onChange={handleImageChange} />
            </div>
            <div className='row'>

                {selectedImages.map((image, index) => (
                    <div className="col-md-3">
                        <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default InputMultipleFile;