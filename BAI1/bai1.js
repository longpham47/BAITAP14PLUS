/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * ngày tháng năm
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến day,month,year
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *    - Xác định số ngày trong mỗi tháng
 *    - Dùng switch cho các tháng, nhóm các tháng cùng ngày lại với nhau
 *    - Dựa vào số ngày của tháng để tính ngài mai, ngày hôm qua
 *    - 
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *
 */

function ngayThangNam() {
    var ngay = Number(document.getElementById("somot").value);
    var thang = Number(document.getElementById("sohai").value);
    var nam = Number(document.getElementById("soba").value);
    var tomorow = 0;

    switch (thang) {

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:


            if (ngay > 0 && ngay < 31) {
                tomorow = (++ngay) + "/" + thang + "/" + nam;
            } else if (ngay == 31) {
                tomorow = "1" + "/" + (++thang) + "/" + nam;

            } else {
                alert("ngày không xác định")
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:

            if (ngay > 0 && ngay < 30) {
                tomorow = (++ngay) + "/" + thang + "/" + nam;

            } else if (ngay == 30) {
                tomorow = "1" + "/" + (++thang) + "/" + nam;
            } else {
                alert("ngày không xác định")
            }
            break;
        case 12:
            if (ngay > 0 && ngay < 30) {
                tomorow = (++ngay) + "/" + thang + "/" + nam;
            } else if (ngay == 31) {
                tomorow = 1 + "/" + 1 + "/" + (++nam);

            } else {
                alert("ngày không xác định")
            }
            break;
        case 2:
            if (ngay > 0 && ngay < 29) {
                tomorow = (++ngay) + "/" + thang + "/" + nam;
            } else if (ngay == 29) {
                tomorow = 1 + "/" + (++thang) + "/" + nam;
            } else
                alert("NGÀY KHÔNG XÁC ĐỊNH")
            break;
        default:
            tomorow = "tháng không xác định"
            break;
    }
    document.getElementById("txtResult").innerHTML = tomorow;


}
document.getElementById("btnT").onclick = ngayThangNam;


function ngayThangNam2() {
    var ngay = Number(document.getElementById("somot").value);
    var thang = Number(document.getElementById("sohai").value);
    var nam = Number(document.getElementById("soba").value);
    var yesterday = 0;

    switch (thang) {


        case 5:
        case 7:
        case 8:
        case 10:
        case 12:


            if (ngay > 1 && ngay < 31) {
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            } else if (ngay == 1) {
                yesterday = "31" + "/" + "12" + "/" + --nam;

            } else {
                alert("ngày không xác định")
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:

            if (ngay > 1 && ngay < 30) {
                yesterday = (--ngay) + "/" + thang + "/" + nam;

            } else if (ngay == 1) {
                yesterday = "31" + "/" + (--thang) + "/" + nam;
            } else {
                alert("ngày không xác định")
            }
            break;
        case 1:
            if (ngay > 1 && ngay < 31) {
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            } else if (ngay == 1) {
                yesterday = 31 + "/" + 12 + "/" + (--nam);

            } else {
                alert("ngày không xác định")
            }
            break;
        case 2:
            if (ngay > 1 && ngay <= 29) {
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            } else if (ngay == 1) {
                yesterday = 31 + "/" + (--thang) + "/" + nam;
            } else
                alert("NGÀY KHÔNG XÁC ĐỊNH")
            break;
        case 3:
            if (ngay > 1 && ngay < 31) {
                yesterday = (--ngay) + "/" + thang + "/" + nam;
            } else if (ngay == 1) {
                yesterday = 29 + "/" + (--thang) + "/" + nam;
            } else
                alert("NGÀY KHÔNG XÁC ĐỊNH")
            break;
        default:
            yesterday = "tháng không xác định"
            break;
    }
    document.getElementById("txtResult").innerHTML = yesterday;


}
document.getElementById("btnY").onclick = ngayThangNam2;
