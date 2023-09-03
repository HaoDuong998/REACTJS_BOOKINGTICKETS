import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BookingTicketAction";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      console.log(indexGheDangDat);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          disabled={disable}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button key={index} className="rowNumber">
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ms-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div className="">
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-white text-start ms-3 mt-4 fs-5">
        {this.renderHangGhe()}
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
