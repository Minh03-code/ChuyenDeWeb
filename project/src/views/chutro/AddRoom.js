import React, { useState, useEffect } from 'react';
import { baseURL } from '../../services/my-axios';
import InputText from '../item/InputText';
import Header from '../item/Header';
import SelectOption from '../item/SelectOption';
import Button from '../item/Button';
import InputMultipleFile from '../item/InputMultipleFile';
import CheckBox from '../item/CheckBox';
import { layTatCaQuanHoatDong, layTatCaPhuongThuocQuanHoatDong, layTatCaTienIchHoatDong } from '../../services/chutro/MinhService.js';
function AddRoom() {
    const [listQuan, setListQuan] = useState([]);
    const [listPhuong, setListPhuong] = useState([]);
    const [listTienIch, setListTienIch] = useState([]);
    const [soPhong, setSoPhong] = useState('');
    const [gia, setGia] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [mota, setMoTa] = useState('');
    const [diaChiChiTiet, setDiaChiChiTiet] = useState('');
    const [soLuong, setSoLuong] = useState('');
    const [tienCoc, setTienCoc] = useState('');
    const [tienDien, setTienDien] = useState('');
    const [tienNuoc, setTienNuoc] = useState('');
    const [listGioiTinh, setListGioiTinh] = useState([{ id: 0, value: "Tất cả" }, { id: 1, value: "Nam" }, { id: 2, value: "Nữ" }]);
    const [gioiTinh, setGioiTinh] = useState();
    const [quan, setQuan] = useState();
    const [phuong, setPhuong] = useState();
    const [tienIch, setTienIch] = useState([]);
    const [files, setFiles] = useState();
    const fetchDataQuan = async () => {
        try {
            const res = await layTatCaQuanHoatDong();
            setListQuan(res);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    const fetchDataTienIch = async () => {
        try {
            const res = await layTatCaTienIchHoatDong();
            setListTienIch(res);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    const fetchDataPhuong = async (idQuan) => {
        try {
            const res = await layTatCaPhuongThuocQuanHoatDong(idQuan);
            setListPhuong(res);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataQuan();
        fetchDataTienIch();
    }, []);

    const onChangeSoPhong = (text) => {
        setSoPhong(text);
    }
    const onChangeGia = (text) => {
        setGia(text);
    }
    const onChangeDienTich = (text) => {
        setDienTich(text);
    }
    const onChangeMoTa = (text) => {
        setMoTa(text);
    }
    const onChangeDiaChiChiTiet = (text) => {
        setDiaChiChiTiet(text);
    }
    const onChangeSoLuong = (text) => {
        setSoLuong(text);
    }
    const onChangeTienCoc = (text) => {
        setTienCoc(text);
    }
    const onChangeDien = (text) => {
        setTienDien(text);
    }
    const onChangeNuoc = (text) => {
        setTienNuoc(text);
    }
    const onChangeGioiTinh = (e) => {
        setGioiTinh(e.target.value);
    }
    const onChangeQuan = (e) => {
        fetchDataPhuong(e.target.value);
        setQuan(e.target.value);
    }
    const onChangePhuong = (e) => {
        setPhuong(e.target.value);
    }
    const onChangeTienIch = (e) => {
        let value = Array.from(e.target.selectedOptions, option => parseInt(option.value));
        setTienIch(value);
        console.log(value);
    }
    const onChangeImages = (files) => {
        setFiles(files);
    }
    const onClickButtonAdd = () => {
        alert(tienDien + " dc: " + diaChiChiTiet + " gt: " + gioiTinh);
    }
    return (
        <>
            <Header
                tenManHinh={"Màn hình thêm phòng"}
                tenChuTro={"Nguyễn Đức Minh"}
            />
            <div className="section trending">
                <div className="container">
                    <form>
                        <InputText
                            label={"Số phòng:"}
                            type={"number"}
                            placeholder={"Nhập số phòng"}
                            changeValue={onChangeSoPhong}
                        />
                        <InputText
                            label={"Giá:"}
                            type={"number"}
                            placeholder={"Nhập giá"}
                            changeValue={onChangeGia}
                        />
                        <InputText
                            label={"Diện tích:"}
                            type={"number"}
                            placeholder={"Nhập diện tích"}
                            changeValue={onChangeDienTich}
                        />
                        <InputText
                            label={"Mô Tả:"}
                            type={"text"}
                            placeholder={"Nhập mô tả"}
                            changeValue={onChangeMoTa}
                        />
                        <InputText
                            label={"Địa chỉ chi tiết:"}
                            type={"text"}
                            placeholder={"Nhập địa chỉ chi tiết"}
                            changeValue={onChangeDiaChiChiTiet}
                        />
                        <InputText
                            label={"Số lượng tối đa:"}
                            type={"number"}
                            placeholder={"Nhập số lượng tối đa"}
                            changeValue={onChangeSoLuong}
                        />
                        <InputText
                            label={"Tiền cọc:"}
                            type={"number"}
                            placeholder={"Nhập tiền cọc"}
                            changeValue={onChangeTienCoc}
                        />
                        <InputText
                            label={"Tiền điện:"}
                            type={"number"}
                            placeholder={"Nhập tiền điện"}
                            changeValue={onChangeDien}
                        />
                        <InputText
                            label={"Tiền nước:"}
                            type={"number"}
                            placeholder={"Nhập tiền nước"}
                            changeValue={onChangeNuoc}
                        />
                        <div className="form-floating">
                            <select value={gioiTinh} onChange={onChangeGioiTinh} className="form-select" aria-label="Default select example">
                                {
                                    listGioiTinh && listGioiTinh.length > 0 && listGioiTinh.map((item, index) => {
                                        return (
                                            <option value={item.id}>{item.value}</option>
                                        )
                                    })
                                }
                            </select>
                            <label for="floatingSelect">Chọn giới tính</label>
                        </div>
                        <div className="form-floating">
                            <select value={quan} onChange={onChangeQuan} className="form-select" aria-label="Default select example">
                            <option value={0} selected>Chọn quận</option>
                                {
                                    listQuan && listQuan.length > 0 && listQuan.map((item, index) => {
                                        return (
                                            <option value={item.id}>{item.tenQuan}</option>
                                        )
                                    })
                                }
                            </select>
                            <label for="floatingSelect">Chọn quận</label>
                        </div>
                        <div className="form-floating">
                            <select value={phuong} onChange={onChangePhuong} className="form-select" aria-label="Default select example">
                                {
                                    listPhuong && listPhuong.length > 0 && listPhuong.map((item, index) => {
                                        return (
                                            <option value={item.id}>{item.tenPhuong}</option>
                                        )
                                    })
                                }
                            </select>
                            <label for="floatingSelect">Chọn phường</label>
                        </div>
                        <label for="floatingSelect">Chọn tiện ích</label>
                        <select className="form-select" onChange={onChangeTienIch} multiple aria-label="Multiple select example">
                            {
                                listTienIch && listTienIch.length > 0 && listTienIch.map((item, index) => {
                                    return (
                                        <option value={item.id}>{item.ten}</option>
                                    )
                                })
                            }
                        </select>
                        <InputMultipleFile
                            label={"Chọn hình:"}
                            onChangeFile={onChangeImages}
                        />
                        <CheckBox />
                        <div className="d-grid gap-2">
                            <Button
                                label={"Thêm phòng"}
                                onClickButton={onClickButtonAdd}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddRoom;