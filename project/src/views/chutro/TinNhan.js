import React from 'react';
import avt from "../../styles/chutro/library/images/avatars/4.jpg";
import { getProfileChuTro,getListTinNhan } from '../../services/admin/NghiemService';
import { baseURL } from '../../services/my-axios.js';
class TinNhan extends React.Component {
    state={
        listNguoiNhanTin:[],
        chuTro:{}
    }
    async componentDidMount(){
        let idTaiKhoan = sessionStorage.getItem("accountId");
        
         let res = await getProfileChuTro(idTaiKhoan);
        if(res!=null){
            this.setState({
                chuTro: res
            })
        }
        let resTn = await getListTinNhan(idTaiKhoan);
        if(res!=null){
            this.setState({
                listNguoiNhanTin:resTn
            })
        }
    }

    render() {
        let{listNguoiNhanTin,chuTro} = this.state;
        let isObject = Object.keys(chuTro).length === 0
        return (
                <>
                <div class="page-heading header-text">
                        <div class="container">
                            <div class="row">
                            <div class="col-lg-12">
                                <h3>Tin Nhắn</h3>
                                <span class=""><a href="#">Chủ Trọ: </a>{isObject===false?chuTro.ten:"Chưa Có Dữ Liệu"} </span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className='section'>
                            <div className="row man_hinh_nhan_tin">

                                    {
                                        listNguoiNhanTin.length!=0?
                                        <>
                                        <div className='col-4 list_nguoi_nhan_tin'>
                                    <div className='tieude_tinNhan'>
                                    <h2>Chats</h2>
                                    </div>

                                    {
                                        listNguoiNhanTin && listNguoiNhanTin.length>0&& listNguoiNhanTin.map((item,index)=>{

                                            return(
                                                <div className="card_nhan_tin" key={index}>
                                    
                                                        <div className='img_card_nhan_tin col-md-3'>
                                                            <img className='img_avt_nhan_tin' src={ item.chuTro===null?baseURL+item.nguoiThue.hinh:baseURL+item.chuTro.hinh}/>
                                                        </div>
                                                        <div className='content_card_nhan_tin col-md-9'>
                                                            <div className='content_top_nhan_tin'>
                                                                <div className='col-md-9 ten_nhan_tin' >
                                                                    {item.chuTro===null?item.nguoiThue.ten:item.chuTro.ten}
                                                                </div>
                                                                <div className='col-md-3 thoi_gian_tin_nhan'>
                                                                   {item.thoiGianCuaTinNhan}
                                                                </div>
                                                            </div>
                                                            <div className='content_bottom_nhan_tin'>
                                                                {item.tinNhanMoiNhat}
                                                            </div>
                                                        </div>
                                                    </div>

                                            )
                                        })

                                    }
                                    
                                

                                </div>
                                <div className='col-8'>

                                </div>
                                        </>:<>
                                        <div className='col-4 list_nguoi_nhan_tin'>
                                    <div className='tieude_tinNhan'>
                                    <h2>Chats</h2>
                                    </div>
                                    <div className="card_nhan_tin">
                                    
                                        Chưa Có Dữ Liệu

                                    </div>

                                </div>
                                <div className='col-8'>

                                </div>
                                        </>
                                   }
                            </div>

                        </div>
                
                </>
        )
    }
}
export default TinNhan;