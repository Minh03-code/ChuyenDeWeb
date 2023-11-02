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
// export { multiple };
export {getProfileAdmin,getAccountById,updatePassword};