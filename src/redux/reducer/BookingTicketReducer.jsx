import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType";

const initialState = {
  danhSachGheDangDat: [],
};

export const BookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_GHE: {
      const danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      console.log(danhSachGheDangDatUpdate);
      const index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    case HUY_GHE: {
      const danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      const index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    default:
      return state;
  }
};
