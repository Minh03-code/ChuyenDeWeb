import { myAxios } from "../my-axios";

const xoaPhong = (idPhong) => {
    return myAxios.delete(`api/phongtrochutro/delete/${idPhong}`);
};


export { xoaPhong}

