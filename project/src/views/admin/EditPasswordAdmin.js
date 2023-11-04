import React, { version } from 'react';
import './styleNghiem.css';
import {  baseURL } from '../../services/my-axios.js';
import { getProfileAdmin } from '../../services/admin/NghiemService.js';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getAccountById, updatePassword } from '../../services/admin/NghiemService.js';
class EditPasswordAdmin extends React.Component {
    state ={
        admin:{},
        mkHienTai:"",
        mkMoi:"",
        mkXacNhan:""
    }
    async componentDidMount(){
        let idTaiKhoan = sessionStorage.getItem("idTaiKhoan");
        let res = await getProfileAdmin(idTaiKhoan);
        if (res != null) {
            this.setState({
                admin: res
            })
        }
    }

    thayDoiMkHienTai(event){
        this.setState({
            mkHienTai: event.target.value
        })
    }
    thayDoiMkMoi(event){
        this.setState({
            mkMoi: event.target.value
        })
    }
    thayDoiMkXacNhan(event){
        this.setState({
            mkXacNhan: event.target.value
        })
    }
    kiemTraRong(){
        if(this.state.mkHienTai===""||this.state.mkMoi===""||this.state.mkXacNhan===""){
            return false;
        }
        return true;
    }
    async kiemTraMkHienTai(){
        let idTaiKhoan = sessionStorage.getItem("idTaiKhoan");
        let res = await getAccountById(idTaiKhoan);
        if (res != null) {
            if(res.matKhau===this.state.mkHienTai){
                return true;
            }
            return false;
        }
        return false;
    }
    kiemTraMatKhauMoi(){
        if(this.state.mkMoi===this.state.mkXacNhan){
            return true;
        }
        return false;
    }
    setDuLieuLaiRong(){
        this.setState({
            mkHienTai:"",
            mkMoi:"",
            mkXacNhan:""
        })
    }
    async capNhat(){
        if(this.kiemTraRong()){
            if(this.kiemTraMatKhauMoi()){
                if(this.kiemTraMkHienTai()){
                    let idTaiKhoan = sessionStorage.getItem("idTaiKhoan");
                    let res = await updatePassword(idTaiKhoan,this.state.mkMoi);
                    if (res != null) {
                        toast.success("Đổi Thành Công!");
                        this.setDuLieuLaiRong();
                    }
                    
                }else{
                    toast.warning("Mật Khẩu Hiện Tại Không Đúng!");
                }
            }else{
                toast.warning("Mật Khẩu Mới Và Xác Nhận Không Trùng Nhau!");
            }
        }else{
            toast.warning("Không Được Để Rỗng!");
        }
      
    }
    render() {
        let {admin, mkHienTai, mkMoi,mkXacNhan} = this.state;
        let isObject = Object.keys(admin).length === 0
        return (
            <>
                <div className="main">
                    <main className="content">
                    <div className="manhinhadmin">

                    <img  src={isObject===false?baseURL+admin.hinh:""} className="img-fluid avt"/>
                    <div className="bg_admin">
                    
                    </div>
                    <div className="thongtin_content">
                    <p className="title_admin">Cập Nhật Mật Khẩu Admin</p>
                    <div className="noidung_content">
                    <form action="#" className="form-control" encType="multipart/form-data" method="post">
                        <div className="mb-3">
                            <label htmlFor="matKhauHienTai" className="form-label">Mật Khẩu Hiện Tại</label>
                            <input value={mkHienTai} onChange={(event)=>this.thayDoiMkHienTai(event)} type="text" id="matKhauHienTai" name="matKhauHienTai" placeholder="Nhập Mật Khẩu Hiện Tại Vào Đây..." className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="matKhauMoi" className="form-label">Mật Khẩu Mới</label>
                            <input  value={mkMoi} onChange={(event)=>this.thayDoiMkMoi(event)} type="password" id="matKhauMoi" name="matKhauMoi" placeholder="Nhập Mật Khẩu Mới Vào Đây..." className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="xacNhanMatKhau" className="form-label">Xác Nhận Mật Khẩu</label>
                            <input  value={mkXacNhan} onChange={(event)=>this.thayDoiMkXacNhan(event)} type="password" id="xacNhanMatKhau" name="xacNhanMatKhau" placeholder="Xác Nhận Mật Khẩu Mới..." className="form-control"/>
                        </div>
                        <button type="button" className="btn btn-primary bbt" onClick={()=>this.capNhat()}>Đồng Ý</button>
                        <NavLink to="/thongtintaikhoan">
                        <button type="button" className="btn btn-warning bbt" >Quay lại</button>
                        </NavLink>
                      </form>
                      
                    </div>
                    </div>
                    </div>
   
                    </main>
                </div>
            </>
        )
    }
}
export default EditPasswordAdmin;