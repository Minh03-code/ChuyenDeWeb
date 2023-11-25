import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {

    return (
        <>
            <div class="page-heading header-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>{props.tenManHinh}</h3>
                            <span class="breadcrumb"><a>Xin chào: </a>{props.tenChuTro} </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;