import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ImagesBanner from './ImagesBanner';
import imgGhep from "./imgs/icon_ghep.png";
import imgRandom from "./imgs/icon_random.png";
import imgRecomment from "./imgs/icon_recomment.png";
import imgVDRoom from "./imgs/img2.jpg";

export default function HeaderNguoiThue(props) {
    const navigation = useNavigate();
    
    
    const chuyenManHinhGoiY = ()=>{
        navigation("/nguoithue/danhsachphonggoiy")
    }
    
    return (
        <>
            <header>
                <ImagesBanner/>
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
                        <div className="btn-m" onClick={chuyenManHinhGoiY}>
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