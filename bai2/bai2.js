/*Khối 1: Dữ liệu đang có sẵn (Input)
* năm, tháng
*
*Khối 2:Các bước xử lý code
* B1: Tạo biến month, year
* B2: Gan giá trị cho biến
* B3: Lập công thức tính toán
*     - Tháng 1,3,5,7,8,10,12 có 31 ngày
*     - Tháng 2 có 28 hoặc 29 ngày, dùng function namNhuan để xác định
*     - Các tháng còn lại có 30 ngày
*     - Dùng switch theo biến month để tính số ngày
*
* B4: Thông báo kết quả ở website
*
*Khối 3:Kết quả (Output)
* 
*/

function tinhNgay() {
    var thang = Number(document.getElementById("sohai").value);
    var nam = Number(document.getElementById("soba").value);
    var ngay = '';

    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            ngay = 31;

            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ngay = 30;

            break;
        case 2:
            if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
                ngay = 29;
            } else
                ngay = 28;
            break;
        default:
            alert("nhập lại")
            break;
    }
    document.getElementById("txt").innerHTML =" tháng " + thang + "/" + nam + " có : " +ngay + "ngày";
}
document.getElementById("btnT").onclick = tinhNgay;