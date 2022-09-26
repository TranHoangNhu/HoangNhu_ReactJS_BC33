const stateCartStore = {
  CartStore: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "/img/phoneProducts/vsphone.jpg",
      soLuong: 0,
    },
  ],
};

export const CartPhoneReducer = (state = stateCartStore, action) =>{
    return { ...state }
}
