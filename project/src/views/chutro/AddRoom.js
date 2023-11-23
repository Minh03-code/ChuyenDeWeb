import React, { useState } from 'react';
import { baseURL } from '../../services/my-axios';
import InputText from '../item/InputText';
import Header from '../item/Header';
import SelectOption from '../item/SelectOption';
function AddRoom() {
    const [soPhong, setSoPhong] = useState('');
    const [gia, setGia] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [mota, setMoTa] = useState('');
    const [diaChiChiTiet, setDiaChiChiTiet] = useState('');
    const [soLuong, setSoLuong] = useState('');
    const [tienCoc, setTienCoc] = useState('');
    const [tienDien, setTienDien] = useState('');
    const [tienNuoc, setTienNuoc] = useState('');
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
    return (
        <>
            <Header
                tenManHinh={"Màn hình thêm phòng"}
                tenChuTro={"Nguyễn Đức Minh"}
            />
            <div class="section trending">
                <div class="container">
                    <form>
                        <InputText
                            label={"Số phòng:"}
                            type={"text"}
                            placeholder={"Nhập số phòng"}
                            changeValue={onChangeSoPhong}
                        />
                        <InputText
                            label={"Giá:"}
                            type={"text"}
                            placeholder={"Nhập giá"}
                            changeValue={onChangeGia}
                        />
                        <InputText
                            label={"Diện tích:"}
                            type={"text"}
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
                            type={"text"}
                            placeholder={"Nhập số lượng tối đa"}
                            changeValue={onChangeSoLuong}
                        />
                        <InputText
                            label={"Tiền cọc:"}
                            type={"text"}
                            placeholder={"Nhập tiền cọc"}
                            changeValue={onChangeTienCoc}
                        />
                        <InputText
                            label={"Tiền điện:"}
                            type={"text"}
                            placeholder={"Nhập tiền điện"}
                            changeValue={onChangeDien}
                        />
                        <InputText
                            label={"Tiền nước:"}
                            type={"text"}
                            placeholder={"Nhập tiền nước"}
                            changeValue={onChangeNuoc}
                        />
                        <SelectOption list={ [{ten: "Lựa trọn a", value: 1}, {ten: "Lựa trọn b", value: 2}]} />
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddRoom;