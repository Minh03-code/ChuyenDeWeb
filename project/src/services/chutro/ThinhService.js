import { myAxios } from "../my-axios";

const xoaphong = (idChuTro, idPhongTro) => {
    return myAxios.delete(`api/phongtrochutro/delete?idChuTro=${idChuTro}&idPhongTro=${idPhongTro}`);
  };
export{xoaphong};