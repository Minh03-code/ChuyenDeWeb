import {myAxios} from "../my-axios";
const getProfileAdmin = (id) => {
    return myAxios.get(`api/thongtinadmin?id=${id}`);
}
const getAccountById =(id)=>{
    return myAxios.get(`api/taikhoan?id=${id}`)
}
const updatePassword =(id,mk)=>{
    return myAxios.patch(`api/doimatkhautaikhoan?id=${id}&matkhaumoi=${mk}`)
}
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
const updateProfileAdmin1 = (id, ten, soDienThoai,soTaiKhoanNganHang,tenChuTaiKhoan,hinh)=>{
    return myAxios.post(`api/capnhatthongtinadmin`,{id:id,ten:ten,soDienThoai:soDienThoai,soTaiKhoanNganHang:soTaiKhoanNganHang,tenChuTaiKhoan:tenChuTaiKhoan,hinh:hinh},config);
}
const updateProfileAdmin2 = (id, ten, soDienThoai,soTaiKhoanNganHang,tenChuTaiKhoan)=>{
    return myAxios.post(`api/capnhatthongtinadmin2`,{id:id,ten:ten,soDienThoai:soDienThoai,soTaiKhoanNganHang:soTaiKhoanNganHang,tenChuTaiKhoan:tenChuTaiKhoan});
}

// export { multiple };
export {getProfileAdmin,getAccountById,updatePassword,updateProfileAdmin2,updateProfileAdmin1};