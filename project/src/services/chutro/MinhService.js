import {myAxios} from "../my-axios";

const layTatCaPhongCuaChuTro = (idChuTro) => {
    return myAxios.get(`api/phongtrochutro/all?idChuTro=${idChuTro}`);
}

// export { multiple };
export {layTatCaPhongCuaChuTro};