import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../services/my-axios';
import InputText from '../item/InputText';
import Header from '../item/Header';
import SelectOption from '../item/SelectOption';
import Button from '../item/Button';
import InputMultipleFile from '../item/InputMultipleFile';
import CheckBox from '../item/CheckBox';
import { layTatCaQuanHoatDong, layTatCaPhuongThuocQuanHoatDong, layTatCaTienIchHoatDong, themPhong, layThongTinPhongTheoID, xoaItemInListTienIchSeleted, layTatCaTienIchDaChonCuaPhong } from '../../services/chutro/MinhService.js';
import SelectMultipleOption from '../item/SelectMultipleOption';
import InputFile from '../item/InputFile';
import QuanItem from '../item/QuanItem';
import Item1 from '../item/Item1';
function UpdateRoom() {
    let params = useParams();
    console.log(params.idPhong);
    const [listQuan, setListQuan] = useState([]);
    const [listPhuong, setListPhuong] = useState([]);
    const [listTienIch, setListTienIch] = useState([]);
    const [room, setRoom] = useState();
    const [loadingRoom, setLoadingRoom] = useState(false);
    const [soPhong, setSoPhong] = useState('');
    const [gia, setGia] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [moTa, setMoTa] = useState('');
    const [diaChiChiTiet, setDiaChiChiTiet] = useState('');
    const [soLuong, setSoLuong] = useState('');
    const [tienCoc, setTienCoc] = useState('');
    const [tienDien, setTienDien] = useState('');
    const [tienNuoc, setTienNuoc] = useState('');
    const [listGioiTinh, setListGioiTinh] = useState([{ id: 0, value: "Tất cả" }, { id: 1, value: "Nam" }, { id: 2, value: "Nữ" }]);
    const [gioiTinh, setGioiTinh] = useState('');
    const [quan, setQuan] = useState('');
    const [phuong, setPhuong] = useState('');
    const [tienIch, setTienIch] = useState([]);
    const [tienIchSeleted, setTienIchSeleted] = useState([]);
    const [files, setFiles] = useState();
    const [resAdd, setResAdd] = useState();
    const fetchDataQuan = async () => {
        try {
            const res = await layTatCaQuanHoatDong();
            setListQuan(res);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const fetchDataPhong = async () => {
        try {
            const res = await layThongTinPhongTheoID(params.idPhong);
            setRoom(res);
            setSoPhong(res.soPhong);
            setGia(res.gia);
            setDienTich(res.dienTich);
            setMoTa(res.moTa);
            setDiaChiChiTiet(res.diaChiChiTiet);
            setSoLuong(res.soLuongToiDa);
            setTienCoc(res.tienCoc);
            setTienDien(res.tienDien);
            setTienNuoc(res.tienNuoc);
            setLoadingRoom(true);
            setGioiTinh(res.gioiTinh);
            setQuan(res.quan.id);
            setPhuong(res.phuong.id);
            setTienIchSeleted(res.tienIch);
            fetchDataPhuong(res.quan.id);

            console.log(res);
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
    const fetchThemPhong = async (idChuTro, soPhong, gia, dienTich, moTa, diaChiChiTiet, soLuongToiDa, tienCoc, tienDien, tienNuoc, gioiTinh, idQuan, idPhuong, listTienIch, listImages) => {
        try {
            const res = await themPhong(idChuTro, soPhong, gia, dienTich, moTa, diaChiChiTiet, soLuongToiDa, tienCoc, tienDien, tienNuoc, gioiTinh, idQuan, idPhuong, listTienIch, listImages);
            setResAdd(res);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataPhong();
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
    const onChangeGioiTinh = (text) => {
        setGioiTinh(text);
    }
    const onChangeQuan = (value) => {
        setQuan(value);
    }
    const onChangePhuong = (value) => {
        setPhuong(value);
    }
    const onChangeTienIch = (res) => {

        setTienIch(res);
    }
    const onChangeImages = (files) => {
        setFiles(files);
    }
    const fetchDataTienIchSeleted = async () => {
        const res = await layTatCaTienIchDaChonCuaPhong(params.idPhong);
        setTienIchSeleted(res.tienIchSeleted);
    }
    const onClickDeleteTienIch = async (id) => {
        const res = await xoaItemInListTienIchSeleted(params.idPhong, id);
        if (res === 1) {
            fetchDataTienIchSeleted(params.idPhong);
        }
    }
   
    const onClickButtonAdd = () => {
        console.log(tienIch);
        if (soPhong != "" && gia != "" && dienTich != "" && moTa != "" && diaChiChiTiet != "" && soLuong != "" && tienCoc != "" && tienDien != "" && tienNuoc != "" && gioiTinh != "" && quan != "" && phuong != "") {
            fetchThemPhong(2, soPhong, gia, dienTich, moTa, diaChiChiTiet, soLuong, tienCoc, tienDien, tienNuoc, gioiTinh, quan, phuong, tienIch, files);

        }
        else {
            alert("Hãy nhập đủ thông tin có đấu *");
        }
    }
    return (
        <>
            <Header
                tenManHinh={"Màn hình thêm phòng"}
                tenChuTro={"Nguyễn Đức Minh"}
            />
            <div className="section trending">
                <div className="container">
                    {loadingRoom ?
                        <form>
                            <InputText
                                value={soPhong}
                                label={"Số phòng*:"}
                                type={"number"}
                                placeholder={"Nhập số phòng"}
                                changeValue={onChangeSoPhong}
                            />
                            <InputText
                                value={gia}
                                label={"Giá*:"}
                                type={"number"}
                                placeholder={"Nhập giá"}
                                changeValue={onChangeGia}
                            />
                            <InputText
                                value={dienTich}
                                label={"Diện tích*:"}
                                type={"number"}
                                placeholder={"Nhập diện tích"}
                                changeValue={onChangeDienTich}
                            />
                            <InputText
                                value={moTa}
                                label={"Mô Tả*:"}
                                type={"text"}
                                placeholder={"Nhập mô tả"}
                                changeValue={onChangeMoTa}
                            />
                            <InputText
                                value={diaChiChiTiet}
                                label={"Địa chỉ chi tiết*:"}
                                type={"text"}
                                placeholder={"Nhập địa chỉ chi tiết"}
                                changeValue={onChangeDiaChiChiTiet}
                            />
                            <InputText
                                value={soLuong}
                                label={"Số lượng tối đa*:"}
                                type={"number"}
                                placeholder={"Nhập số lượng tối đa"}
                                changeValue={onChangeSoLuong}
                            />
                            <InputText
                                value={tienCoc}
                                label={"Tiền cọc*:"}
                                type={"number"}
                                placeholder={"Nhập tiền cọc"}
                                changeValue={onChangeTienCoc}
                            />
                            <InputText
                                value={tienDien}
                                label={"Tiền điện*:"}
                                type={"number"}
                                placeholder={"Nhập tiền điện"}
                                changeValue={onChangeDien}
                            />
                            <InputText
                                value={tienNuoc}
                                label={"Tiền nước*:"}
                                type={"number"}
                                placeholder={"Nhập tiền nước"}
                                changeValue={onChangeNuoc}
                            />
                            <SelectOption
                                defaultId={gioiTinh}
                                label={"Chọn giới tính*"}
                                list={listGioiTinh}
                                changeValue={onChangeGioiTinh}
                                convertName={(e) => e.value}
                            />
                            <SelectOption
                                defaultId={quan}
                                label={"Chọn quận*"}
                                list={listQuan}
                                changeValue={onChangeQuan}
                                convertName={(item) => item.tenQuan}
                            />
                            <SelectOption
                                defaultId={phuong}
                                label={"Chọn phường*"}
                                list={listPhuong}
                                changeValue={onChangePhuong}
                                convertName={(item) => item.tenPhuong}
                            />

                            <div className='list-selected'>
                                <div className="quan-m">
                                    <div className="row">
                                        {
                                            tienIchSeleted && tienIchSeleted.length >= 0 && tienIchSeleted.map((item, index) => {
                                                return (
                                                    <Item1
                                                        idItem={item.id}
                                                        imgItem={`${baseURL}${item.hinh}`}
                                                        tenItem={item.ten}
                                                        // onClickItemQuanListener={clickQuan}
                                                        onClickDeleteItemListener={onClickDeleteTienIch}
                                                    />
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                            <SelectMultipleOption
                                label={"Chọn tiện ích"}
                                list={listTienIch}
                                changeValue={onChangeTienIch}
                                convertName={(item) => item.ten}
                            />

                            <InputMultipleFile
                                label={"Chọn hình:"}
                                onChangeFile={onChangeImages}
                            />
                            <div className="d-grid gap-2">
                                <Button
                                    label={"Thêm phòng"}
                                    onClickButton={onClickButtonAdd}
                                />
                            </div>
                        </form>
                        :
                        <></>}

                </div>
            </div>
        </>
    )
}
export default UpdateRoom;