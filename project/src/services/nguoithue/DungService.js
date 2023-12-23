import { myAxios } from "../my-axios";
const getphongnguoithue = (id) => {
  return myAxios.get(`api/layphongnguoithue?idNguoiThue=${id}`);
};
const xoaphongcuanguoithue = (id, id1) => {
  return myAxios.delete(`api/xoaphongcuanguoithue?idTaiKhoanGui=${id}6&idNguoiThue=${id1}`);
};
export {
  getphongnguoithue, xoaphongcuanguoithue
};
