import React, { useEffect, useState } from "react";
import HeaderNguoiThue from "../item/HeaderNguoiThue";
import "./styles/chitietphong.css";
import anhThongTin from "./imgs/phuc/thongtin.png";
import anhUser from "./imgs/phuc/user.png";
import anhChuTro from "./imgs/phuc/newlogo.jpg";
import anhTienIch from "./imgs/phuc/utilities.png";
import anhDanhGia from "./imgs/phuc/online-shop.png";
import anhGoiY from "./imgs/phuc/question.png";
import anhPhong from "./imgs/phuc/phong.jpg";
import anhLoaiPhong from "./imgs/phuc/loaiphong.png";
import anhGioTinh from "./imgs/phuc/gioitinh.png";
import anhMap from "./imgs/phuc/map.png";
import anhSao from "./imgs/phuc/star.png";
import anhVote from "./imgs/phuc/vote.png";
import anhBinhLuan from "./imgs/phuc/coment.png";
import anhLienHe from "./imgs/phuc/lienhe.png";
import anhMoney from "./imgs/phuc/money.png";
import anhTinNhan from "./imgs/phuc/tinnhan.png";
import anhPlay from "./imgs/phuc/play-button.png";
import anhMayLanh from "./imgs/phuc/maylanh.png";
import tim1 from "./imgs/phuc/tim1.png";
import tim2 from "./imgs/phuc/tim2.png";
import anhKhongCoAnh from "./imgs/phuc/khongcoanh.png";
import anhNguoiThue from "./imgs/phuc/anhnguoithue.png";
import anhMoTa from "./imgs/phuc/anhmota.png";
import { ToastContainer, toast } from "react-toastify";
import {
  capNhatPhongGoiY,
  capNhatYeuThich,
  getChuTroById,
  getDanhSachPhongTheoIdQuan,
  getDetailPhongTro,
  getNguoiThueTheoPhong,
  getTrangThaiYeuThich,
  guiYeuCauDatPhong,
} from "../../services/nguoithue/PhucService";
import { baseURL } from "../../services/my-axios";
import { guiYeuCauXacThuc } from "../../services/chutro/PhucService";
import Dialog from "../item/Dialog";
import { Alert } from "react-bootstrap";

const ChiTietPhongTro = () => {
  let idTaiKhoan = 84;
  const [result, setResult] = useState({});
  const [listHinhAnh, setListHinhAnh] = useState();
  const [listTienIch, setListTienIch] = useState();
  const [listPhongTheoQuan, setListPhongTheoQuan] = useState();
  const [listNguoiThue, setListNguoiThue] = useState();
  const [chuTro, setChuTro] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const [idPhong, setIdPhong] = useState(149);
  const [datPhong, setDatPhong] = useState();
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);

  // const [trangThaiYT, setTrangThaiYT] = useState();

  const fetchDataPhong = async () => {
    const res = await getDetailPhongTro(idPhong);
    if (res != null) {
      if (res) {
        setResult(res);
        setListHinhAnh(res.hinhAnhPhongTro);
        setListTienIch(res.danhSachTienIch);
        let idTaiKhoanChuTro = res.phongTroChuTro.idTaiKhoan;
        const res1 = await getChuTroById(idTaiKhoanChuTro);
        setChuTro(res1);

        let loaiPhong = res.loaiPhong;
        let idQuan = res.idQuan;
        let tienCoc = res.tienCoc;
        let gioiTinh = res.gioiTinh;

        if (loaiPhong !== 2) {
          let btn_send = document.querySelector(
            ".thong-tin-chi-tiet-left-ctct-2"
          );
          btn_send.style.display = "none";
        }

        capNhatPhongGoiYApi(idTaiKhoan, idQuan, tienCoc, gioiTinh);
      }
    }
  };

  useEffect(() => {
    suKien();
    fetchDataPhong();
    fetchDataDanhSachPhongTheoQuan();
    fetchDataNguoiThue();
    fetchDaTaYeuThich();
  }, []);

  const capNhatPhongGoiYApi = async (idTaiKhoan, idQuan, tienCoc, gioiTinh) => {
    const res = await capNhatPhongGoiY(idTaiKhoan, idQuan, tienCoc, gioiTinh);
  };

  const fetchDataDanhSachPhongTheoQuan = async () => {
    const res = await getDanhSachPhongTheoIdQuan(idTaiKhoan);
    setListPhongTheoQuan(res);
  };

  const requestYeuCauDatPhong = async (
    idTaiKhoanGui,
    idTaiKhoanNhan,
    idPhong
  ) => {
    let res = await guiYeuCauDatPhong(idTaiKhoanGui, idTaiKhoanNhan, idPhong);
    if (res !== null) {
      setDatPhong(res);
      setShowDialog(false);
      toast.info(res.message);
    }
  };

  let idTaiKhoanChuTro = chuTro.idTaiKhoan;

  const onCLickDatPhong = () => {
    // requestYeuCauDatPhong(idTaiKhoan, idTaiKhoanChuTro, idPhong);

    setIdPhong(idPhong);
    setShowDialog(true);
  };

  const fetchDataNguoiThue = async () => {
    const res = await getNguoiThueTheoPhong(idPhong);
    setListNguoiThue(res);
  };

  const suKien = () => {
    const bgGreen = document.querySelector(".bg-green");
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

  const onCloseDialog = () => {
    setShowDialog(false);
  };

  const onCLickXacNhanDatPhong = (idPhong) => {
    requestYeuCauDatPhong(idTaiKhoan, idTaiKhoanChuTro, idPhong);
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
    console.log("aaaaaaaaa", idPhong);
    console.log("aaaaaaaaa", idTaiKhoan);
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
         
            <div className="anh-chi-tiet-phong-tro">
              <div class="bg-green">
                <div class="wrap">
                  {listHinhAnh &&
                    listHinhAnh.length >= 0 &&
                    listHinhAnh.map((item, index) => {
                      return (
                        <>
                          <img class="item" src={baseURL + item.hinh} />
                        </>
                      );
                    })}
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
                  <button type="button" class="btn btn-warning">
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
                        <div className="label-thong-tin">Wifi</div>
                        <div className="label-thong-tin">Free</div>
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
                      <div className="item1">
                        <div className="label-thong-tin">Địa chỉ</div>
                        <div className="label-thong-tin">
                          {result.diaChiChiTiet}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="thong-tin-chi-tiet-left-ctp">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhTienIch}></img>
                      <p className="textThongTin">Tiện ích</p>
                    </div>
                    <div className="mid-thong-tin">
                      {listTienIch &&
                        listTienIch.length >= 0 &&
                        listTienIch.map((item, index) => {
                          return (
                            <>
                              <div className="danh-gia-left" key={index}>
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
                      <p className="textThongTin">Mô tả</p>
                    </div>
                    <div className="mid-thong-tin">{result.moTa}</div>
                  </div>
                </div>

                <div className="thong-tin-chi-tiet-right">
                  <div className="thong-tin-chi-tiet-left-ctct">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhUser}></img>
                      <p className="textThongTin">Thông tin chủ trọ</p>
                    </div>
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

                  <div className="thong-tin-chi-tiet-left-ctct">
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

                  <div className="thong-tin-chi-tiet-left-ctct">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhLienHe}></img>
                      <p className="textThongTin">Liên hệ</p>
                    </div>
                    <div className="mid-chu-tro">
                      <div className="danh-gia-left2">
                        <img className="icon-danh-gia" src={anhMoney} />
                        <div className="thong-tin-chu-tro2">
                          <button
                            className="btn btn-success"
                            onClick={onCLickDatPhong}
                          >
                            Đặt phòng
                          </button>
                        </div>
                      </div>
                      <div className="danh-gia-right">
                        <img className="icon-danh-gia" src={anhTinNhan} />
                        <div className="thong-tin-chu-tro2">
                          <button className="btn btn-info">Nhắn tin</button>
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
                        return (
                          <>
                            <div className="mid-chu-tro-2 ">
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
                              <button className="btn btn-info btn-chat-2">
                                Chat
                              </button>
                              <div className="line-cach-2"></div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="danh-sach-lien-quan">
            <div className="header-danh-sach">
              <p className="textLienQuan">
                Có thể bạn quan tâm
                <img className="anhThongTin" src={anhGoiY} />
              </p>
            </div>
            {listPhongTheoQuan &&
              listPhongTheoQuan.length >= 0 &&
              listPhongTheoQuan.map((item, index) => {
                return (
                  <>
                    <div className="content-danh-sach" key={index}>
                      <div className="content-danh-sach-left">
                        <img
                          className="anhPhong"
                          src={
                            item.hinhAnhPhongTro.length === 0
                              ? anhKhongCoAnh
                              : baseURL + item.hinhAnhPhongTro[0].hinh
                          }
                        />
                      </div>
                      <div className="content-danh-sach-right">
                        <p className="soPhong">Phòng số {item.soPhong}</p>
                        <div className="thongTinChung">
                          <div className="thongTinChung-left">
                            <div className="thongTinChung-item">
                              <img
                                className="iconThongTin"
                                src={anhLoaiPhong}
                              />
                              <p className="textThongTin2">
                                {item.loaiPhong === 0
                                  ? "Phòng trống"
                                  : "Phòng ghép"}
                              </p>
                            </div>
                            <div className="thongTinChung-item2">
                              <img className="iconThongTin" src={anhGioTinh} />
                              <p className="textThongTin2">
                                {item.gioiTinh === 0
                                  ? "Nam/Nữ"
                                  : item.gioiTinh === 1
                                  ? "Nam"
                                  : "Nữ"}
                              </p>
                            </div>
                            <div className="thongTinChung-item2">
                              <img className="iconThongTin" src={anhSao} />
                              <p className="textThongTin2">
                                {item.quan.tenQuan}
                              </p>
                            </div>
                            <div className="thongTinChung-item">
                              <img className="iconThongTin" src={anhMap} />
                              <p className="textThongTin2">
                                {item.diaChiChiTiet}
                              </p>
                            </div>
                          </div>
                          <div className="thongTinhChung-right">
                            <div className="thongTinhChung-right-left">
                              <p className="gia">
                                {item.tienCoc < 100000
                                  ? "Liên hệ"
                                  : item.tienCoc < 1000000
                                  ? item.tienCoc + " k/tháng"
                                  : item.tienCoc / 1000000 + " triệu/tháng"}
                              </p>
                            </div>
                            <div className="thongTinhChung-right-right">
                              <button className="btn btn-primary">
                                Xem chi tiết
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="line-cach"></div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Dialog
        id={idPhong}
        show={showDialog}
        onClickCANCAL={onCloseDialog}
        title="Thông báo"
        content={`Bạn chắc chắn muốn đặt phòng này ?`}
        onClickOK={onCLickXacNhanDatPhong}
      />
    </>
  );
};

export default ChiTietPhongTro;
