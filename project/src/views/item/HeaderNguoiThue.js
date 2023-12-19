import React from 'react';
import { Link } from 'react-router-dom';
export default function HeaderNguoiThue(props) {

    return (
        <>
            <header>
                <div className="image-container">
                    <img src="img2.jpg" alt="" />
                    <img src="img2.jpg" alt="" />
                    <img src="img3.jpg" alt="" />
                    <img src="img.jpg" alt="" />
                </div>
                <div className="container-search">
                    <div className="search">
                        <div className="search-form">
                            <div className="search-city">HCM</div>
                            <div className="search-content">Bạn cần tìm gì...</div>
                        </div>
                    </div>

                    <div className="button-form">
                        <div className="btn-m">
                            <div className="btn-icon">
                                <img src="./icon_ghep.png" />
                            </div>
                            <p>Phòng ghép</p>
                        </div>
                        <div className="btn-m">
                            <div className="btn-icon">
                                <img src="./icon_recomment.png" />
                            </div>
                            <p>Gợi ý</p>
                        </div>
                        <div className="btn-m">
                            <div className="btn-icon">
                                <img src="./icon_random.png" />
                            </div>
                            <p>Ngẫu nhiên</p>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}