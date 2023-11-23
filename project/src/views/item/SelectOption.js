import React, { useState } from 'react';
function SelectOption(props) {

    return (
        <>
            <select class="form-select" aria-label="Default select example">
                {
                    props.list && props.list.length > 0 && props.list.map((item, index) => {
                        return (
                            <option value={item.value}>{item.ten}</option>
                        )
                    })
                }
            </select>
        </>
    )
}
export default SelectOption;