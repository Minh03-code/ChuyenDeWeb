import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Loading from '../loading/Loading';
import { layTatCaPhongCuaChuTro } from '../../services/chutro/MinhService';
import { baseURL } from '../../services/my-axios';
import PhongItem from '../item/PhongItem';
import Header from '../item/Header';
import Comment from '../item/Comment';
import { Button, Modal } from 'react-bootstrap';

function QuanLyPhong() {
    const [list, setList] = useState([]);
    const [idPhong, setIdPhong] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetchDataPhong();
    }, []);
    const fetchDataPhong = async () => {
        try {
            const res = await layTatCaPhongCuaChuTro(sessionStorage.getItem('idNguoiDung'));
            if (res != null) {
                setList(res);
                setLoading(true);
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    const onClickComment = (text) => {
        setIdPhong(text);
        setShow(true);
    }
    const onClickXemNguoiThue = (idPhong) => {
    }
    const onClickXoaPhong = (idPhong) => {
    }
    const onCloseComment = () => {
        setShow(false);
    }

    return (
        loading == true ?
            <>
                <Header
                    tenManHinh={"Màn hình danh sách phòng"}
                    tenChuTro={"Nguyễn Đức Minh"}
                />
                <div className="section trending">
                    <div className="container">
                        <Link to={`/chutro/themphong`} className="btn btn-primary">Thêm phòng</Link>
                        {list != null ?
                            <div className="row trending-box">
                                {
                                    list && list.length > 0 && list.map((item, index) => {
                                        return (
                                            <PhongItem
                                                idPhong={item.phongTro != null ? item.phongTro.id : -1}
                                                hinh={item.hinhAnh.length > 0 ? baseURL + item.hinhAnh[0].hinh : ""}
                                                gia={item.phongTro != null ? item.phongTro.gia : 0}
                                                gioiTinh={item.phongTro != null ? (item.phongTro.gioiTinh == 0 ? "Tất cả giới tính" : item.phongTro.gioiTinh == 1 ? "Nam" : "Nữ") : "Rỗng"}
                                                soPhong={item.phongTro != null ? item.phongTro.soPhong : "Rỗng"}
                                                linkEdit={`/chutro/editroom/id=${item.phongTro != null ? item.phongTro.id : -1}`}
                                                linkDelete={`/chutro/deleteroom/id=${item.phongTro != null ? item.phongTro.id : -1}`}
                                                linkDSNguoiThue={`/chutro/danhsachnguoithue/idPhong=${item.phongTro != null ? item.phongTro.id : -1}`}
                                                binhLuan={onClickComment}
                                                xemNguoiThue={onClickXemNguoiThue}
                                                xoaPhong={onClickXoaPhong}
                                                linkVideoReview={`/chutro/videoreview?idPhong=${item.phongTro.id != null ? item.phongTro.id : -1}`}
                                            />
                                        )
                                    })
                                }

                            </div>
                            :
                            <h1>Rỗng</h1>
                        }


                    </div>
                </div>
                <Comment
                idPhong={idPhong}
                show={show}
                onHide={onCloseComment}/>
            </>
            :
            <Loading />
    )
}
export default QuanLyPhong;