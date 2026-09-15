**
 * HỆ THỐNG PHÂN BỔ ĐƠN HÀNG - FRESHDELIVERY(LEGACY CODE)
    * Nhiệm vụ: Tính tổng doanh thu và phân bổ đơn cho tài xế
        */
let orderList = [
    { id: 101, amount: 150000, status: "pending" },
    { id: 102, amount: 200000, status: "pending" },
    { id: 103, amount: 50000, status: "pending" }
];
let driversAvailable = 2;

// YÊU CẦU 1: Tính tổng doanh thu (Đang dùng while chưa tối ưu và DỄ BỊ INFINITE LOOP)
function calculateTotal(orders) {
    let total = 0;
    let i = 0;
    while (i < orders.length) {
        total += orders[i].amount;
        i = i + 1;
    }
    return total;
}

// YÊU CẦU 2: Phân bổ đơn hàng (Chưa code)
// YÊU CẦU 3: Thử lại (Retry) khi lấy mảng dữ liệu thất bại (Chưa code)