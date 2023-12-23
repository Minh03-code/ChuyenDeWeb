import React, { useEffect, useState } from "react";
import "./styles/chitietphong.css";
import anhThongTin from "./imgs/phuc/thongtin.png";
import anhUser from "./imgs/phuc/user.png";
import anhTienIch from "./imgs/phuc/utilities.png";
import anhDanhGia from "./imgs/phuc/online-shop.png";
import anhVote from "./imgs/phuc/vote.png";
import { getListNguoiThueTheoIdPhongCallAPI } from '../../services/admin/KietService';
import { getphongnguoithue, xoaphongcuanguoithue } from '../../services/nguoithue/DungService';
import anhBinhLuan from "./imgs/phuc/coment.png";
import anhLienHe from "./imgs/phuc/lienhe.png";
import anhMoney from "./imgs/phuc/money.png";
import anhTinNhan from "./imgs/phuc/tinnhan.png";
import anhPlay from "./imgs/phuc/play-button.png";
import tim1 from "./imgs/phuc/tim1.png";
import tim2 from "./imgs/phuc/tim2.png";
import anhKhongCoAnh from "./imgs/phuc/khongcoanh.png";
import anhNguoiThue from "./imgs/phuc/anhnguoithue.png";
import anhMoTa from "./imgs/phuc/anhmota.png";
import { ToastContainer, toast } from "react-toastify";
import {
    capNhatYeuThich,
    getChuTroById,
    getDetailPhongTro,
    getNguoiThueTheoPhong,
    getTrangThaiYeuThich,
} from "../../services/nguoithue/PhucService";
import { baseURL } from "../../services/my-axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { layVideoXuong } from "../../services/admin/NghiemService";
const PhongCuaToi = () => {
    const [idTaiKhoan, setIdTaiKhoan] = useState(
        sessionStorage.getItem("idNguoiDung")
    );


    const [result, setResult] = useState({});
    const [ketqua, setKetQua] = useState(1);
    const [listHinhAnh, setListHinhAnh] = useState();
    const [listTienIch, setListTienIch] = useState();
    const [listNguoiThue, setListNguoiThue] = useState([]);
    const [chuTro, setChuTro] = useState({});
    const [videoReview, setVideoReview] = useState({});
    const navigation = useNavigate();
    const [idPhong, setIdPhong] = useState();
    console.log(idTaiKhoan);
    const fetchDataPhong = async () => {
        let idnguoithue = sessionStorage.getItem("idNguoiDung");

        const re = await getphongnguoithue(+idnguoithue);
        console.log("Dataaaaaa: " + re);
        if (re.length !== 0) {

            setKetQua(1);
            setIdPhong(re.idPhong);

            setTimeout(() => {
                getDetail(re.idPhong);
            }, 2000);
            setTimeout(() => {
                getVideoRe(re.idPhong);
            }, 3000);
            setTimeout(() => {
                listnguoithuetrocungphong(re.idPhong)
            }, 3500);
        } else {
            setKetQua(-1);

        }
    };

    const getVideoRe = async (idPhongTroRe) => {
        const resVideo = await layVideoXuong(idPhongTroRe);
        if (resVideo != null) {
            setVideoReview(resVideo);
        }
    }
    const getChuTroById2 = async (idTaiKhoanChu) => {
        const res1 = await getChuTroById(idTaiKhoanChu);
        if (res1 !== null) {
            setChuTro(res1);
        }

    }
    const getDetail = async (idPhongTro) => {
        const res = await getDetailPhongTro(idPhongTro);
        if (res != null) {
            setResult(res);
            setListHinhAnh(res.hinhAnhPhongTro);
            setListTienIch(res.danhSachTienIch);

            if (res.danhSachTienIch.length === 0) {
                let btn_send = document.querySelector(".text-khong-du-lieu");
                btn_send.style.display = "unset";
            } else {
                let btn_send = document.querySelector(".text-khong-du-lieu");
                btn_send.style.display = "none";
            }
            let idTaiKhoanChuTro = res.phongTroChuTro.idTaiKhoan;
            setTimeout(() => {
                getChuTroById2(idTaiKhoanChuTro);
            }, 3000);



            let loaiPhong = res.loaiPhong;

            if (loaiPhong !== 2) {
                let btn_send = document.querySelector(
                    ".thong-tin-chi-tiet-left-ctct-2"
                );
                btn_send.style.display = "none";
            }


        }
    }
    const fetchDataPhongMore = async (idPhongTro) => {
        const res = await getDetailPhongTro(idPhongTro);
        if (res != null) {
            setResult(res);
            setListHinhAnh(res.hinhAnhPhongTro);
            setListTienIch(res.danhSachTienIch);
            console.log("lllllti", res.danhSachTienIch);
            if (res.danhSachTienIch.length === 0) {
                let btn_send = document.querySelector(".text-khong-du-lieu");
                btn_send.style.display = "unset";
            } else {
                let btn_send = document.querySelector(".text-khong-du-lieu");
                btn_send.style.display = "none";
            }
            let idTaiKhoanChuTro = res.phongTroChuTro.idTaiKhoan;

            const res1 = await getChuTroById(idTaiKhoanChuTro);
            setChuTro(res1);

            let loaiPhong = res.loaiPhong;

            if (loaiPhong !== 2) {
                let btn_send = document.querySelector(
                    ".thong-tin-chi-tiet-left-ctct-2"
                );
                btn_send.style.display = "none";
            }

        }
        const resVideo = await layVideoXuong(idPhongTro);
        if (resVideo != null) {
            setVideoReview(resVideo);
        }
    };

    useEffect(() => {


        suKien();
        fetchDataPhong();

        // fetchDataNguoiThue();
        // fetchDaTaYeuThich();




    }, []);

    const listnguoithuetrocungphong = async (idPhongTroRe) => {
        let res = await getListNguoiThueTheoIdPhongCallAPI(idPhongTroRe);
        if (res != null) {
            setListNguoiThue(res);
        }
    };
    const xoaphongcuanguoithueReact = async () => {
        let idNguoiThue = sessionStorage.getItem("idNguoiDung");
        let idTaiKhoanGui = sessionStorage.getItem("accountId");

        let res = await xoaphongcuanguoithue(+idTaiKhoanGui, +idNguoiThue);
        if (res != null) {
            toast.success("Bạn đã rời phòng");
        }
    };

    const roiphong = async (idPhongTroRe) => {
        let res = await getListNguoiThueTheoIdPhongCallAPI(idPhongTroRe);
        if (res != null) {
            setListNguoiThue(res);
        }
    };

    const fetchDataNguoiThue = async () => {
        const res = await getNguoiThueTheoPhong(idPhong);
        if (res !== null) {
            setListNguoiThue(res);
        }
    };

    const suKien = () => {
        const bgGreen = document.querySelector(".bg-green_map");
        const wrap = document.querySelector(".wrap");
        const items = document.querySelectorAll(".item");

        bgGreen.addEventListener("mousemove", function (e) {
            var x = e.clientX;
            let width = window.innerWidth;
            let percent = (x / width) * 100 - 20;
            wrap.style.transform = `translateX(${-percent}%)`;
        });

        items.forEach((element) => {
            element.addEventListener("click", function (e) {
                bgGreen.style.top = "100%";
                bgGreen.style.transitionTimingFunction =
                    "cubic-bezier(.27,-0.62,.83,.67)";
            });
        });
    };

    const openModal = () => {
        let modal = document.querySelector(".modal_video_review");
        modal.style.display = "unset";
    };
    const closeModal = () => {
        let modal = document.querySelector(".modal_video_review");
        modal.style.display = "none";
    };

    const nhanTin = (idTaiKhoan1) => {
        if (idTaiKhoan1 === idTaiKhoan) {
            alert("Không thể nhắn tin cho chính bạn!");
        } else {
            navigation(`/nguoithue/tinnhan?id=${idTaiKhoan1}`);
        }
    };

    const fetchDaTaYeuThich = async () => {
        let res = await getTrangThaiYeuThich(idPhong, idTaiKhoan);
        let trangThai = res;

        if (trangThai === 0) {
            let btn_send = document.querySelector(".anhTim");
            btn_send.style.display = "none";
            let btn_send2 = document.querySelector(".anhTim2");
            btn_send2.style.display = "unset";
        } else {
            let btn_send = document.querySelector(".anhTim");
            if (btn_send != null) {
                btn_send.style.display = "unset";
            }
            let btn_send2 = document.querySelector(".anhTim2");
            if (btn_send2 != null) {
                btn_send2.style.display = "none";
            }


        }
    };
    const fetchDaTaYeuThichMore = async (idPhongTro) => {
        let res = await getTrangThaiYeuThich(idPhongTro, idTaiKhoan);
        let trangThai = res;

        if (trangThai === 0) {
            let btn_send = document.querySelector(".anhTim");
            btn_send.style.display = "none";
            let btn_send2 = document.querySelector(".anhTim2");
            btn_send2.style.display = "unset";
        } else {
            let btn_send = document.querySelector(".anhTim");
            btn_send.style.display = "unset";
            let btn_send2 = document.querySelector(".anhTim2");
            btn_send2.style.display = "none";
        }
    };

    const requestYeuThich = async (idPhong, idTaiKhoan) => {
        let res = await capNhatYeuThich(idPhong, idTaiKhoan);
    };

    const onClickYeuThich = () => {
        let btn_send = document.querySelector(".anhTim");
        btn_send.style.display = "none";
        let btn_send2 = document.querySelector(".anhTim2");
        btn_send2.style.display = "unset";
        requestYeuThich(idPhong, idTaiKhoan);
        toast.success("Bỏ yêu thích thành công");
    };
    const onClickYeuThich2 = () => {
        let btn_send = document.querySelector(".anhTim2");
        btn_send.style.display = "none";
        let btn_send2 = document.querySelector(".anhTim");
        btn_send2.style.display = "unset";
        requestYeuThich(idPhong, idTaiKhoan);
        toast.success("Đã thêm vào danh sách yêu thích");
    };

    return (
        <>
            <div className="main-content">
                <div className="container">


                    <div className="bao-ngoai">
                        {
                            ketqua !== -1 ?
                                <>

                                    <div className="anh-chi-tiet-phong-tro">
                                        <div className="bg-green_map">
                                            <div className="wrap">
                                                {listHinhAnh &&
                                                    listHinhAnh.length >= 0 &&
                                                    listHinhAnh.map((item, index) => {
                                                        return (
                                                            <>
                                                                <img className="item" src={baseURL + item.hinh} key={index} />
                                                            </>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                        <div className="modal_video_review">
                                            <div className="area_content_video_review">
                                                <div className="title_area_content_video_review_tro">
                                                    Review Phòng Trọ 1
                                                </div>
                                                <div className="area_video_review_tro">
                                                    {videoReview !== null && videoReview.id !== -1 ? (
                                                        <iframe
                                                            width="100%"
                                                            height="100%"
                                                            src={
                                                                videoReview.loaiVideo === 0
                                                                    ? baseURL + videoReview.linkVideo
                                                                    : "https://www.youtube.com/embed/" +
                                                                    videoReview.linkVideo
                                                            }
                                                            className="if_video_nt"
                                                            title="YouTube video player"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            allowFullScreen
                                                        ></iframe>
                                                    ) : (
                                                        <>Chủ trọ chưa thêm video</>
                                                    )}
                                                </div>
                                                <div
                                                    className="footer_area_content_video_review_tro"
                                                    onClick={closeModal}
                                                >
                                                    Đóng
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="thong-tin">
                                        <div className="dia-chi">
                                            <div className="dia-chi-left">
                                                <p className="text-so-phong">Phòng trọ số {result.soPhong}</p>
                                                <div className="icon-tim">
                                                    <img
                                                        onClick={onClickYeuThich}
                                                        className="anhTim"
                                                        src={tim2}
                                                    ></img>

                                                    <img
                                                        onClick={onClickYeuThich2}
                                                        className="anhTim2"
                                                        src={tim1}
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="dia-chi-right">
                                                <img className="icon-play" src={anhPlay}></img>
                                                <button
                                                    type="button"
                                                    className="btn btn-warning"
                                                    onClick={openModal}
                                                >
                                                    Review room
                                                </button>
                                            </div>
                                        </div>

                                        <div className="thong-tin-chi-tiet">
                                            <div className="thong-tin-chi-tiet-left">
                                                <div className="thong-tin-chi-tiet-left-ctp">
                                                    <div className="header-thong-tin">
                                                        <img className="anhThongTin" src={anhThongTin}></img>
                                                        <p className="textThongTin">Thông tin phòng</p>
                                                    </div>
                                                    <div className="mid-thong-tin">
                                                        <div className="item1">
                                                            <div className="label-thong-tin">Loại phòng</div>
                                                            <div className="label-thong-tin">
                                                                {result.loaiPhong === 0
                                                                    ? "Phòng trống"
                                                                    : result.loaiPhong === 1
                                                                        ? "Phòng đơn"
                                                                        : "Phòng ghép"}
                                                            </div>
                                                        </div>
                                                        <div className="item1">
                                                            <div className="label-thong-tin">Giới tính</div>
                                                            <div className="label-thong-tin">
                                                                {result.gioiTinh === 0
                                                                    ? "Nam/Nữ"
                                                                    : result.gioiTinh === 1
                                                                        ? "Nam"
                                                                        : "Nữ"}
                                                            </div>
                                                        </div>
                                                        <div className="item1">
                                                            <div className="label-thong-tin">Diện tích</div>
                                                            <div className="label-thong-tin">
                                                                {result.dienTich + " ㎡"}
                                                            </div>
                                                        </div>
                                                        <div className="item1">
                                                            <div className="label-thong-tin">Số lượng tối đa</div>
                                                            <div className="label-thong-tin">
                                                                {result.soLuongToiDa + " người"}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mid-thong-tin">
                                                        <div className="item1">
                                                            <div className="label-thong-tin">Điện</div>
                                                            <div className="label-thong-tin">
                                                                {result.tienDien + " KWh"}
                                                            </div>
                                                        </div>
                                                        <div className="item1">
                                                            <div className="label-thong-tin">Nước</div>
                                                            <div className="label-thong-tin">
                                                                {result.tienNuoc + " đồng/m3"}
                                                            </div>
                                                        </div>
                                                        <div className="item1">
                                                            <div className="label-thong-tin">Tiền cọc</div>
                                                            <div className="label-thong-tin">
                                                                {result.tienCoc < 100000
                                                                    ? "Liên hệ"
                                                                    : result.tienCoc < 1000000
                                                                        ? result.tienCoc + " k/tháng"
                                                                        : result.tienCoc / 1000000 + " triệu/tháng"}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mid-thong-tin">
                                                        <ToastContainer
                                                            position="top-right"
                                                            autoClose={1000}
                                                            hideProgressBar={false}
                                                            newestOnTop={false}
                                                            closeOnClick
                                                            rtl={false}
                                                            pauseOnFocusLoss
                                                            draggable
                                                            pauseOnHover
                                                            theme="dark"
                                                        />
                                                        <div className="label-thong-tin">Địa chỉ</div>
                                                        <div className="label-thong-tin">
                                                            {result.diaChiChiTiet}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="thong-tin-chi-tiet-left-ctp">
                                                    <div className="header-thong-tin">
                                                        <img className="anhThongTin" src={anhTienIch}></img>
                                                        <p className="textThongTin" >Tiện ích</p>
                                                    </div>
                                                    <div className="text-khong-du-lieu" >Chưa có dữ liệu</div>

                                                    <div className="mid-thong-tin">
                                                        {listTienIch &&
                                                            listTienIch.length >= 0 &&
                                                            listTienIch.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <div className="danh-gia-left" key={item.id}>
                                                                            <img
                                                                                className="icon-danh-gia"
                                                                                src={baseURL + item.hinh}
                                                                            />
                                                                            <p className="text-tien-ich">{item.ten}</p>
                                                                        </div>
                                                                    </>
                                                                );
                                                            })}
                                                    </div>
                                                </div>

                                                <div className="thong-tin-chi-tiet-left-ctp-2">
                                                    <div className="header-thong-tin">
                                                        <img className="anhThongTin" src={anhMoTa}></img>
                                                        <p className="textThongTin"  >Mô tả</p>
                                                    </div>
                                                    <div className="mid-thong-tin" >{result.moTa}</div>
                                                </div>
                                            </div>

                                            <div className="thong-tin-chi-tiet-right">
                                                <div className="thong-tin-chi-tiet-left-ctct row" key={0}>
                                                    <div className="header-thong-tin col-12">
                                                        <img className="anhThongTin" src={anhUser}></img>
                                                        <p className="textThongTin">Thông tin chủ trọ</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="mid-chu-tro">
                                                            <div className="avt-chu-tro">
                                                                <img
                                                                    className="avt-chu-tro-2"
                                                                    src={
                                                                        chuTro.hinh === null
                                                                            ? anhKhongCoAnh
                                                                            : baseURL + chuTro.hinh
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="thong-tin-chu-tro">
                                                                <div className="label-thong-tin2">{chuTro.ten}</div>
                                                                <div className="label-thong-tin2">
                                                                    {chuTro.soDienThoai}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 align-self-center">
                                                        <img className="icon-danh-gia" src={anhTinNhan} />
                                                        <div className="thong-tin-chu-tro2" key={1}>
                                                            {/* <NavLink to={`/nguoithue/tinnhan?id=${chuTro.idTaiKhoan}`}> */}
                                                            <button
                                                                className="btn btn-info"
                                                                onClick={() => nhanTin(chuTro.idTaiKhoan)}
                                                            >
                                                                Nhắn tin
                                                            </button>
                                                            {/* </NavLink> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="thong-tin-chi-tiet-left-ctct" key={1}>
                                                    <div className="header-thong-tin">
                                                        <img className="anhThongTin" src={anhDanhGia}></img>
                                                        <p className="textThongTin">Vote</p>
                                                    </div>
                                                    <div className="mid-chu-tro">
                                                        <div className="danh-gia-left2">
                                                            <img className="icon-danh-gia" src={anhVote} />
                                                            <div className="thong-tin-chu-tro2">
                                                                <button className="btn btn-outline-dark">
                                                                    Đánh giá
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="danh-gia-right">
                                                            <img className="icon-danh-gia" src={anhBinhLuan} />
                                                            <div className="thong-tin-chu-tro2">
                                                                <button className="btn btn-outline-dark">
                                                                    Bình luận
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="thong-tin-chi-tiet-left-ctct-2">
                                                    <div className="header-thong-tin">
                                                        <img className="anhThongTin" src={anhNguoiThue}></img>
                                                        <p className="textThongTin">Danh sách người thuê</p>
                                                    </div>
                                                    {listNguoiThue &&
                                                        listNguoiThue.length >= 0 &&
                                                        listNguoiThue.map((item, index) => {
                                                            if (item.nguoiThue != null) {
                                                                return (
                                                                    <>
                                                                        <div className="mid-chu-tro-2 " key={item.id}>
                                                                            <div className="avt-chu-tro-2">
                                                                                <img
                                                                                    className="avt-chu-tro-2"
                                                                                    src={baseURL + item.nguoiThue.hinh}
                                                                                />
                                                                            </div>
                                                                            <div className="thong-tin-chu-tro-2">
                                                                                <div className="label-thong-tin2">
                                                                                    {item.nguoiThue.ten}
                                                                                </div>
                                                                            </div>
                                                                            {/* <NavLink to={`/nguoithue/tinnhan?id=${item.nguoiThue.idTaiKhoan}`}> */}
                                                                            <button
                                                                                className="btn btn-info btn-chat-2"
                                                                                onClick={() =>
                                                                                    nhanTin(item.nguoiThue.idTaiKhoan)
                                                                                }
                                                                            >
                                                                                Chat
                                                                            </button>

                                                                            <div className="line-cach-2"></div>
                                                                        </div>
                                                                    </>
                                                                );
                                                            }

                                                        })}
                                                </div>
                                                <div className="thong-tin-chi-tiet-left-ctct-2">
                                                    <div className="header-thong-tin">
                                                        <img className="anhThongTin" src={anhNguoiThue}></img>
                                                        <p className="textThongTin">Rời Phòng Trọ</p>
                                                    </div>
                                                    <div className="header-thong-tin">
                                                        <p></p>
                                                        <button className="btn btn-outline-dark" onClick={xoaphongcuanguoithueReact} style={{ width: 400 }}>
                                                            Rời Khỏi Phòng Trọ
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className="bg-green_map">
                                        <div className="wrap">
                                            Bạn Chưa Thuê Phòng
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhongCuaToi;
