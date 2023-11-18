import React from 'react';
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
                <div className="page-heading header-text">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12">
                                <h3>Tin Nhắn</h3>
                                <span className=""><a href="#">Chủ Trọ: </a>{isObject===false?chuTro.ten:"Chưa Có Dữ Liệu"} </span>
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
                                
                                        </>:<>
                                        <div className='col-4 list_nguoi_nhan_tin'>
                                    <div className='tieude_tinNhan'>
                                    <h2>Chats</h2>
                                    </div>
                                    <div className="card_nhan_tin">
                                        <h3>
                                        Chưa Có Dữ Liệu
                                        </h3>
                                      

                                    </div>

                                </div>
                                
                                        </>
                                   }
                                   {/* Hiển thị tin nhắn */}
                                   <div className='col-8 hien_thi_tin_nhan'>
                                        <div className='tieu_de_ten_nguoi_nhan'>
                                        <div className='img_doi_phuong'>
                                                <img className='src_avt_doi_phuong' src={isObject===false?baseURL+chuTro.hinh:""}/>
                                        </div>
                                        <div className='ten_doi_phuong'>
                                                {chuTro.ten}
                                        </div>
                                        </div>
                                        <div className='vung_hien_thi_tin_nhan'>
                                            <div className='card_view_send'>
                                                <div className='card_view_item_send'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_receive'>
                                                <div className='card_view_item_receive'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_send'>
                                                <div className='card_view_item_send'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_receive'>
                                                <div className='card_view_item_receive'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_send'>
                                                <div className='card_view_item_send'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_receive'>
                                                <div className='card_view_item_receive'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_send'>
                                                <div className='card_view_item_send'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_receive'>
                                                <div className='card_view_item_receive'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_send'>
                                                <div className='card_view_item_send'>Hello Bạn Trẻ</div>
                                            </div>
                                            <div className='card_view_receive'>
                                                <div className='card_view_item_receive'>Hello Bạn Trẻ</div>
                                            </div>
                                            
                                           
                                        </div>






                                        <div className='vung_gui_tin_nhan'>
                                            <textarea type="text" className='input_tin_nhan' rows={1} placeholder='Nhập tin nhắn...'/>

                                            <button className='btn_send'>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                            </div>

                        </div>
                
                </>
        )
    }
}
export default TinNhan;