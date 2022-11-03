import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachGheDangDat: [
   
  ],
};

const datGheReducer = createSlice({
  name: "datGheReducer",
  initialState,
  reducers: {
    datGhe: (state, { type, payload }) => {
      const ghe = payload;

      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
    },
    huyGhe:(state, { type, payload })=>{
        const ghe = payload
        
        state.danhSachGheDangDat=state.danhSachGheDangDat.filter(item => item.soGhe !== ghe)
        
    }
  },
});

export const { datGhe,huyGhe } = datGheReducer.actions;

export default datGheReducer.reducer;
