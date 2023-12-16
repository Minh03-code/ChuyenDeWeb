import { myAxios } from "../my-axios";
const getDetailNguoiThue = (id) => {
  return myAxios.get(`api/nguoithue/thongtinchitiet?idTaiKhoan=${id}`);
};
export { getDetailNguoiThue };
