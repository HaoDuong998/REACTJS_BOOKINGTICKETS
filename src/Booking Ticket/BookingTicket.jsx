import React, { Component } from "react";
import "./BookingTickets.css";
import BookingInfo from "./BookingInfo";
import HangGhe from "./HangGhe";
import listSeatData from "../Data/danhSachGhe.json";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return listSeatData.map((hangGhe, index) => {
      return (
        <div className="" key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: "100%" }}>
                <div style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)" }}></div>
                <div className='container'>
                    <div className="row" style={{ position: "relative", zIndex: "0" }}>
                        <div className="col-8 text-center">
                            <h1 className='text-warning'>Đặt Vé Xem Phim CyberLearn.vn</h1>
                            <div className='text-light mt-3' style={{ fontSize: "25px" }}>Màn Hình</div>
                            <div className='mt-2' style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <div className='screen'></div>
                            </div>
                                {this.renderHangGhe()}
                        </div>
                        <div className="col-4 text-warning">
                            <h1 className=''>Danh Sách Ghế</h1>
                            <BookingInfo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
