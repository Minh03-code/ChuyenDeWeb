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
const getChinhSach =(id)=>{
    return myAxios.get(`api/chinhsach?id=${id}`)
}
const capNhatChinhSach=(id,noiDungChinhSach)=>{
    return myAxios.post(`api/capnhatchinhsach2`,{id:id,noiDungChinhSach:noiDungChinhSach})
}
const getProfileChuTro = (idTaiKhoan) =>{
    return myAxios.get(`api/chutro/thongtinchitiet?idTaiKhoan=${idTaiKhoan}`);
}
const getListTinNhan = (idTaiKhoan)=>{
    return myAxios.get(`api/danhsachtinnhantheoidtaikhoan?idTaiKhoan=${idTaiKhoan}`);
}
const getListNoiDungTinNhan = (idPhong)=>{
    return myAxios.get(`api/danhsachtinnhan?idPhong=${idPhong}`);
}

const dangKiTaiKhoanChuTro=(ten, tenTaiKhoan, matKhau, email)=>{
    return myAxios.post(`api/taotaikhoanchutro`,{ten:ten,tenTaiKhoan:tenTaiKhoan,matKhau:matKhau,email:email});
}
const layTatCataiKhoan = ()=>{
    return myAxios.get(`api/tatcataikhoan`);
}
const guiTinNhan =(idPhong,idTaiKhoan,noiDung)=>{
    return myAxios.post(`api/guitinnhan`,{idPhong:idPhong,idTaiKhoan:idTaiKhoan,noiDung:noiDung});
}
const capNhatTinNhanMoiNhat = (idTaiKhoan,idPhong,tinNhanMoiNhat,thoiGian)=>{
    return myAxios.post(`api/capnhattinnhanmoinhat`,{idTaiKhoan:idTaiKhoan,id:idPhong,tinNhanMoiNhat:tinNhanMoiNhat,thoiGian:thoiGian});
}

// export { multiple };
export {getProfileAdmin,getAccountById,updatePassword,updateProfileAdmin2,updateProfileAdmin1,getChinhSach,capNhatChinhSach,getProfileChuTro,getListTinNhan,
    getListNoiDungTinNhan,dangKiTaiKhoanChuTro,layTatCataiKhoan,
    guiTinNhan,capNhatTinNhanMoiNhat};