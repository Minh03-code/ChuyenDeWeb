import React, { useEffect, useState } from 'react';
import HeaderNguoiThue from '../item/HeaderNguoiThue';
import imgBinhLuan from "./imgs/icon_comment.png";
import imgVDRoom from "./imgs/img2.jpg";
export default function Home() {
    return (
        <>
            <HeaderNguoiThue />
            <div className="main-content-m">
                <div className="container">
                    <b className='title-m'>Danh sách quận</b>
                    <div className="quan-m">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="item-quan">
                                    <img className="image-quan" src={imgVDRoom} alt="Overlay Image" />
                                    <div className="quan-gradient"></div>
                                    <div className="quan-name">Quận 1</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="item-quan">
                                    <img className="image-quan" src={imgVDRoom} alt="Overlay Image" />
                                    <div className="quan-gradient"></div>
                                    <div className="quan-name">Quận 1</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="item-quan">
                                    <img className="image-quan" src={imgVDRoom} alt="Overlay Image" />
                                    <div className="quan-gradient"></div>
                                    <div className="quan-name">Quận 1</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="item-quan">
                                    <img className="image-quan" src={imgVDRoom} alt="Overlay Image" />
                                    <div className="quan-gradient"></div>
                                    <div className="quan-name">Quận 1</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="item-quan">
                                    <img className="image-quan" src={imgVDRoom} alt="Overlay Image" />
                                    <div className="quan-gradient"></div>
                                    <div className="quan-name">Quận 1</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="item-quan">
                                    <img className="image-quan" src={imgVDRoom} alt="Overlay Image" />
                                    <div className="quan-gradient"></div>
                                    <div className="quan-name">Quận 1</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <b className='title-m'>Danh sách phòng</b>
                    <div className="phong-m">
                        <div className="item-room-m">
                            <img className="img-room-m" src={imgVDRoom} alt="" />
                            <div className="description-item-room-m">
                                <p className="address-m">104 Nguyễn Văn A Phường A Thành phố A</p>
                                <div className="row">
                                    <div className="col-md-10">
                                        <p className="color-text-item-room">Giới tính: Nam</p>
                                        <p className="color-text-item-room">Diện tích: 30m²</p>
                                        <div className="list-item-button">
                                            <div className="item-button">
                                                <img className="icon-button" src={imgBinhLuan} alt="" />
                                                <span>20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="price-room-m">
                                            4,5Tr
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="item-room-m">
                            <img className="img-room-m" src={imgVDRoom} alt="" />
                            <div className="description-item-room-m">
                                <p className="address-m">104 Nguyễn Văn A Phường A Thành phố A</p>
                                <div className="row">
                                    <div className="col-md-10">
                                        <p className="color-text-item-room">Giới tính: Nam</p>
                                        <p className="color-text-item-room">Diện tích: 30m²</p>
                                        <div className="list-item-button">
                                            <div className="item-button">
                                                <img className="icon-button" src={imgBinhLuan} alt="" />
                                                <span>20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="price-room-m">
                                            4,5Tr
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="item-room-m">
                            <img className="img-room-m" src={imgVDRoom} alt="" />
                            <div className="description-item-room-m">
                                <p className="address-m">104 Nguyễn Văn A Phường A Thành phố A</p>
                                <div className="row">
                                    <div className="col-md-10">
                                        <p className="color-text-item-room">Giới tính: Nam</p>
                                        <p className="color-text-item-room">Diện tích: 30m²</p>
                                        <div className="list-item-button">
                                            <div className="item-button">
                                                <img className="icon-button" src={imgBinhLuan} alt="" />
                                                <span>20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="price-room-m">
                                            4,5Tr
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
