import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    const {title,name, phoneNumber, email} = props;
    return (
        <>
            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p><h4>{title}</h4></p>
                        <p>{name}</p>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;