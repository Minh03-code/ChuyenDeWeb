import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import imgGhep from "./imgs/icon_ghep.png";
import imgRandom from "./imgs/icon_random.png";
import imgRecomment from "./imgs/icon_recomment.png";
import imgVDRoom from "./imgs/img2.jpg";
import { getAllBannerApi } from '../../services/admin/PhucService';
import { baseURL } from '../../services/my-axios';
export default function HeaderNguoiThue(props) {
    const navigation = useNavigate();
    const[listBanner,setListBanner]= useState([]);
    useEffect(() => {
         fetchData();
    }, []);
    const fetchData = async()=>{
        let res = await getAllBannerApi();
        if(res!=null){
         setListBanner(res);
        }
    }
    const chuyenManHinhGoiY = ()=>{
        navigation("/nguoithue/danhsachphonggoiy")
    }
    const scrollAutoImages = () => {
        let quantity = 1;
        const imgContainer = document.querySelector('.image-container');
        const listItemImages = document.querySelectorAll('.item-img');
        const itemImage = document.querySelector('.item-img');
        setInterval(() => {
            if (quantity < listItemImages.length) {
                listItemImages.forEach(element => {
                    element.style.transform = `translateX(-${100 * quantity}%)`;
                });

            }
            else {
                quantity = 0;
                listItemImages.forEach(element => {
                    element.style.transform = `translateX(${100 * quantity}%)`;
                });
                
                
            }
            quantity++;
        }, 2000);
    }
    scrollAutoImages();
    return (
        <>
            <header>
                <div className="image-container">
                    {
                        listBanner&&listBanner.length>0?listBanner.map((item,index)=>{
                            return(
                                <img className="the_img_banner item-img" src={baseURL+item.hinhBanner} alt={baseURL+item.hinhBanner} key={index}/>
                            )
                        })
                        :<>
                        </>
                    }
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