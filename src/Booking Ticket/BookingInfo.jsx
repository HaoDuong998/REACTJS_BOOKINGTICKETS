import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BookingTicketAction";

class BookingInfo extends Component {
  render() {
    return (
      <div className="">
        <div>
          <button className="gheDuocChon"></button> <span className='text-danger' style={{ fontSize: "20px" }}>Ghế Đã Đặt</span>
          <br />
          <button className='gheDangChon'></button> <span class="text-success" style={{ fontSize: "20px" }}>Ghế Đang Chọn</span>
          <br />
          <button className='ghe' style={{ marginLeft: "0" }}></button> <span className='text-light' style={{ fontSize: "20px" }}>Ghế Trống</span>
        </div>

        
          <div className="table-responsive">
            <table className="table table-dark ">
              <thead>
                <tr>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Hủy</th>
                </tr>
              </thead>
              <tbody className="text-warning">
                {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                  return (
                    <tr key={index}>

                      <td>{gheDangDat.soGhe}</td>
                      <td>{gheDangDat.gia}</td>
                      <td>
                        <button className="btn btn-danger border-3" onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                        }}>Hủy</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(BookingInfo);
