import React from 'react';
import { Link } from 'react-router-dom';
import imgGhep from "./imgs/icon_ghep.png";
import imgRandom from "./imgs/icon_random.png";
import imgRecomment from "./imgs/icon_recomment.png";
import imgVDRoom from "./imgs/img2.jpg";
export default function HeaderNguoiThue(props) {

    return (
        <>
            <header>
                <div className="image-container">
                    <img src={imgVDRoom} alt="" />
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
                                <img src={imgGhep} />
                            </div>
                            <p>Phòng ghép</p>
                        </div>
                        <div className="btn-m">
                            <div className="btn-icon">
                                <img src={imgRecomment} />
                            </div>
                            <p>Gợi ý</p>
                        </div>
                        <div className="btn-m">
                            <div className="btn-icon">
                                <img src={imgRandom} />
                            </div>
                            <p>Ngẫu nhiên</p>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}