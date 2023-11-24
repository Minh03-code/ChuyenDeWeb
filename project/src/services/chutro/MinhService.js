import {myAxios} from "../my-axios";

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

// export { multiple };
export {layTatCaPhongCuaChuTro, layTatCaQuanHoatDong, layTatCaPhuongThuocQuanHoatDong, layTatCaTienIchHoatDong};