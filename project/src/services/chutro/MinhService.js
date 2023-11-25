import {myAxios} from "../my-axios";
const config = {
    headers: { "content-type": "multipart/form-data" },
  };
const layTatCaPhongCuaChuTro = (idChuTro) => {
    return myAxios.get(`api/phongtrochutro/all?idChuTro=${idChuTro}`);
}
const layTatCaQuanHoatDong = () => {
    return myAxios.get(`api/quan/all/hoatdong`);
}
const layTatCaPhuongThuocQuanHoatDong = (idQuan) => {
    return myAxios.get(`api/phuong/all/hoatdong?idQuan=${idQuan}`);
}
const layTatCaTienIchHoatDong = () => {
    return myAxios.get(`api/tienich/all/hoatdong`);
}
const themPhong = (idChuTro, soPhong, gia, dienTich, moTa, diaChiChiTiet, soLuongToiDa, tienCoc, tienDien, tienNuoc, gioiTinh, idQuan, idPhuong, listTienIch, listImages) => {
    const data  = {idChuTro: idChuTro ,soPhong: soPhong, gia:gia, dienTich:dienTich, moTa:moTa, diaChiChiTiet: diaChiChiTiet, soLuongToiDa:soLuongToiDa, tienCoc: tienCoc, tienDien: tienDien, tienNuoc: tienNuoc, gioiTinh:gioiTinh, idQuan: idQuan, idPhuong: idPhuong, hinh: listImages, tienIch: listTienIch};
    console.log(data);
    return myAxios.post(
        `api/phongtro/web/themphong`, 
         data,
        config);
}

// export { multiple };
export {layTatCaPhongCuaChuTro, layTatCaQuanHoatDong, layTatCaPhuongThuocQuanHoatDong, layTatCaTienIchHoatDong, themPhong};