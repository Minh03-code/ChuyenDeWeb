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
import {
  capNhatPhongGoiY,
  getChuTroById,
  getDanhSachPhongTheoIdQuan,
  getDetailPhongTro,
  guiYeuCauDatPhong,
} from "../../services/nguoithue/PhucService";
import { baseURL } from "../../services/my-axios";
import { guiYeuCauXacThuc } from "../../services/chutro/PhucService";

const ChiTietPhongTro = () => {
  let idPhong = 149;
  let idTaiKhoan = 84;
  const [result, setResult] = useState({});
  const [listHinhAnh, setListHinhAnh] = useState();
  const [listTienIch, setListTienIch] = useState();
  const [listPhongTheoQuan, setListPhongTheoQuan] = useState();
  const [idQuan, setIdQuan] = useState();
  const [tienCoc, setTienCoc] = useState();
  const [gioiTinh, setGioiTinh] = useState();
  const [chuTro, setChuTro] = useState({});

  const fetchDataPhong = async () => {
    const res = await getDetailPhongTro(idPhong);
    if (res) {
      setResult(res);
      setListHinhAnh(res.hinhAnhPhongTro);
      setListTienIch(res.danhSachTienIch);
      let idTaiKhoanChuTro = res.phongTroChuTro.idTaiKhoan;

      const res1 = await getChuTroById(idTaiKhoanChuTro);
      setChuTro(res1);
      setIdQuan(res.idQuan);
      setTienCoc(res.tienCoc);
      setGioiTinh(res.gioiTinh);
    }
  };

  useEffect(() => {
    suKien();
    fetchDataPhong();
    fetchDataDanhSachPhongTheoQuan();
    // capNhatPhongGoiYApi(idTaiKhoan, idQuan, tienCoc, gioiTinh);
  }, []);

  // const capNhatPhongGoiYApi = async (idTaiKhoan, idQuan, tienCoc, gioiTinh) => {
  //   const res = await capNhatPhongGoiY(idTaiKhoan, idQuan, tienCoc, gioiTinh);
  // };

  const fetchDataDanhSachPhongTheoQuan = async () => {
    const res = await getDanhSachPhongTheoIdQuan(idTaiKhoan);
    setListPhongTheoQuan(res);
    console.log("phong theo quan", res);
  };

  const requestYeuCauDatPhong = async (
    idTaiKhoanGui,
    idTaiKhoanNhan,
    idPhong
  ) => {
    const res = await guiYeuCauDatPhong(idTaiKhoanGui, idTaiKhoanNhan, idPhong);
  };

  let idTaiKhoanChuTro = chuTro.idTaiKhoan;

  const onCLickDatPhong = () => {
    requestYeuCauDatPhong(idTaiKhoan, idTaiKhoanChuTro, idPhong);

    alert("ok r đó");
    console.log("idTaiKhoanGui", idTaiKhoan);
    console.log("idTaiKhoanNhan", idTaiKhoanChuTro);
    console.log("idPhong", idPhong);
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
                  <p className="text-so-phong">
                    Phòng trọ trung tâm quận Thủ Đức
                  </p>
                  <div className="icon-tim">
                    <img className="anhTim" src={tim2}></img>
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
                      <div className="item1">
                        <div className="label-thong-tin">Địa chỉ</div>
                        <div className="label-thong-tin">
                          {result.diaChiChiTiet}
                        </div>
                      </div>
                      <div className="item1">
                        <div className="label-thong-tin">Mô tả</div>
                        <div className="label-thong-tin">{result.moTa}</div>
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

            {/* <div className="content-danh-sach">
              {}
              <div className="content-danh-sach-left">
                <img className="anhPhong" src={anhPhong} />
              </div>
              <div className="content-danh-sach-right">
                <p className="soPhong">Số phòng 9</p>
                <div className="thongTinChung">
                  <div className="thongTinChung-left">
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhLoaiPhong} />
                      <p className="textThongTin2">Phòng cho thuê</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhGioTinh} />
                      <p className="textThongTin2">Nam</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhSao} />
                      <p className="textThongTin2">Quận</p>
                    </div>
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhMap} />
                      <p className="textThongTin2">Địa chỉ chi tiết</p>
                    </div>
                  </div>
                  <div className="thongTinhChung-right">
                    <div className="thongTinhChung-right-left">
                      <p className="gia">4.5 triệu/tháng</p>
                    </div>
                    <div className="thongTinhChung-right-right">
                      <button className="btn btn-primary">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line-cach"></div>
            </div> */}

            {/* <div className="content-danh-sach">
              <div className="content-danh-sach-left">
                <img className="anhPhong" src={anhPhong} />
              </div>
              <div className="content-danh-sach-right">
                <p className="soPhong">Số phòng 9</p>
                <div className="thongTinChung">
                  <div className="thongTinChung-left">
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhLoaiPhong} />
                      <p className="textThongTin2">Phòng cho thuê</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhGioTinh} />
                      <p className="textThongTin2">Nam</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhSao} />
                      <p className="textThongTin2">Quận</p>
                    </div>
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhMap} />
                      <p className="textThongTin2">Địa chỉ chi tiết</p>
                    </div>
                  </div>
                  <div className="thongTinhChung-right">
                    <div className="thongTinhChung-right-left">
                      <p className="gia">4.5 triệu/tháng</p>
                    </div>
                    <div className="thongTinhChung-right-right">
                      <button className="btn btn-primary">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietPhongTro;
