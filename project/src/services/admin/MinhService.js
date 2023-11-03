import {myAxios} from "../my-axios";

const getAllMotelRoomOwnerAuthenticationCallAPI = () => {
    return myAxios.get("api/xacthucchutro/all");
}
const checkAccountAPI = (username, password) => {
    return myAxios.get(`api/kiemtradangnhap?tenTaiKhoan=${username}&matKhau=${password}`);
}
// export { multiple };
export {getAllMotelRoomOwnerAuthenticationCallAPI, checkAccountAPI};