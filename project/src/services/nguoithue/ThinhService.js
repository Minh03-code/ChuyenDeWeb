import { myAxios } from "../my-axios";
const getProfileNguoiThue = (idTaiKhoan) =>{
    return myAxios.get(`api/nguoithue/thongtinchitiet?idTaiKhoan=${idTaiKhoan}`);
}

const updatePassWord = (id, matKhaucu, matKhaumoi) => {
  return myAxios.patch(`api/taikhoan/doimatkhau`, {
    id: id,
    matKhaucu: matKhaucu,
    matKhaumoi: matKhaumoi,
  });
};
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
const updateProfileNguoiThue1 = (id, ten,hinh, soDienThoai)=>{
    return myAxios.post(`api/capnhatthongtinnguoithuecohinh`,{id:id,ten:ten,hinh:hinh, soDienThoai:soDienThoai},config);
}
const updateProfileNguoiThue2 = (id, ten, soDienThoai)=>{
    return myAxios.post(`api/capnhatthongtinnguoithuekhonghinh`,{id:id,ten:ten,soDienThoai:soDienThoai});
}

const getAccountById = (id) => {
  return myAxios.get(`api/taikhoan?id=${id}`);
};



export {
 getProfileNguoiThue,
  updatePassWord,
  getAccountById,
  updateProfileNguoiThue1,
  updateProfileNguoiThue2


  
};
