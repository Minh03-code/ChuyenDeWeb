import React from 'react';
import { createContext } from 'react';
import anh11 from "../../images/anhnhatro.jpg";
import { NavLink, Link } from 'react-router-dom';
import Loading from '../loading/Loading';
import { layTatCaPhongCuaChuTro } from '../../services/chutro/MinhService';
import { baseURL } from '../../services/my-axios';
import PhongItem from '../item/PhongItem';
import Header from '../item/Header';
class QuanLyPhong extends React.Component {
    state = {
        list: [],
        loading: false
    }
    async componentDidMount() {
        let res = await layTatCaPhongCuaChuTro(2);
        if (res != null) {
            this.setState({
                list: res,
                loading: true,
            })
        }
    }
    render() {
        let { list, loading } = this.state;
        return (
            loading == true ?
                <>
                    <Header
                        tenManHinh={"Màn hình danh sách phòng"}
                        tenChuTro={"Nguyễn Đức Minh"}
                    />
                    <div className="section trending">
                        <div className="container">
                            <Link to={`/chutro/themphong`} className="btn btn-primary">Thêm phòng</Link>
                            {list != null ?
                                <div className="row trending-box">
                                    {
                                        list && list.length > 0 && list.map((item, index) => {
                                            if (item.phongTro) {
                                                console.log(index, item);
                                            }
                                            return (
                                                <PhongItem
                                                    hinh={item.hinhAnh.length > 0 ? baseURL + item.hinhAnh[0].hinh : ""}
                                                    gia={item.phongTro != null ? item.phongTro.gia : 0}
                                                    gioiTinh={item.phongTro != null ? (item.phongTro.gioiTinh == 0 ? "Tất cả giới tính" : item.phongTro.gioiTinh == 1 ? "Nam" : "Nữ") : "Rỗng"}
                                                    soPhong={item.phongTro != null ? item.phongTro.soPhong : "Rỗng"}
                                                    linkEdit={`/chutro/editroom?id=${item.phongTro != null ? item.phongTro.id : -1}`}
                                                    inkDelete={`/chutro/editroom?id=${item.phongTro != null ? item.phongTro.id : -1}`}
                                                    
                                                />
                                            )
                                        })
                                    }

                                </div>
                                :
                                <h1>Rỗng</h1>
                            }

                            {/* <div className="row">
                            <div className="col-lg-12">
                                <ul className="pagination">
                                    <li><a href="#"> &lt; </a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a className="is_active" href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#"> &gt; </a></li>
                                </ul>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </>
                :
                <Loading />
        )
    }
}
export default QuanLyPhong;