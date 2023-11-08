import { myAxios } from "../my-axios";

const getAllTienIchCallAPI = () => {
    return myAxios.get("api/laytatcatienich");
}
const layTienIchTheoId = (id) => {
    return myAxios.get(`api/laytienichtheoid?id=${id}`);
};
const config = {
    headers: { 'content-type': 'multipart/form-data' }
}
const addnewTienIch = (ten, hinh) => {
    return myAxios.post(`api/themtienich`, { ten: ten, hinh: hinh }, config);
}
const editTienIch = (id, ten, hinh, trangThai) => {
    return myAxios.post(`api/capnhattienich`, { id, ten: ten, hinh: hinh, trangThai: trangThai }, config);
}
const editTienIchkhonghinh = (id, ten, trangThai) => {
    return myAxios.post(`api/capnhattienich`, { id, ten: ten, trangThai: trangThai }, config);
}
const capNhatTrangThaiTienIch = (id) => {
    return myAxios.patch(`api/capnhattrangthaitienich?id=${id}`);
};
// export { multiple };
export { getAllTienIchCallAPI, addnewTienIch, layTienIchTheoId, editTienIch, capNhatTrangThaiTienIch, editTienIchkhonghinh };