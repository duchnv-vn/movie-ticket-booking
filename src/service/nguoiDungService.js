import { httpSerivce } from "./configURL";

export const nguoiDungService = {
    layDanhSachLoaiNguoiDung: () => {
        return httpSerivce.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
    },

    layDanhSachNguoiDung: (tuKhoa = '') => {
        if (tuKhoa.trim() !== '') {
            return httpSerivce.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`);
        } else {
            return httpSerivce.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`);
        };
    },

    layThongTinNguoiDung: () => {
        return httpSerivce.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
    },

    themNguoiDung: (formData) => {
        return httpSerivce.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, formData);
    },

    xoaNguoiDung: (taiKhoan) => {
        return httpSerivce.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    },

    capNhatThongTinNguoiDung: (formData) => {
        return httpSerivce.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formData);
    },
};