/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * số có 3 chữ số
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến hangTram, hangChuc, hangDonvi
 * B2: Gan giá trị cho biến count += 0, các biến còn lại lấy từ form
 * B3: Lập công thức tính toán
 *     - Lấy số hàng trăm bằng Math.floor(number / 100)
 *     - Lấy số hàng chục bằng Math.floor((number % 100) / 10)
 *     - Lấy số hàng đơn vị bằng (number % 100) % 10
 *     - switch case để đọc số từng hàng
 *
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
*/


function cachDoc() {
    var number = Number(document.getElementById("sotunhien").value);
    var hangTram = Math.floor(number / 100);
    var hangChuc = Math.floor((number % 100) / 10);
    var hangDonvi = (number % 100) % 10;

    var doc = '';
    switch (hangTram) {
        case 1:
            doc += "một trăm ";
            break;
        case 2:
            doc += "hai trăm ";
            break;
        case 3:
            doc += "ba trăm ";
            break;
        case 4:
            doc += "bốn trăm ";
            break;
        case 5:
            doc += "năm trăm ";
            break;
        case 6:
            doc += "sáu trăm ";
            break;
        case 7:
            doc += "bảy trăm ";
            break;
        case 8:
            doc += "tám trăm ";
            break;
        case 9:
            doc += "chín trăm ";
            break;
        default:
            alert("hãy nhập số có 3 chữ số");
    }
    
    switch (hangChuc) {
        case 0:
            if (hangDonvi == 0) {
                doc += '';

            } else {
                doc += " lẻ "
            }

            break;
        case 1:
            doc += "mười ";
            break;
        case 2:
            doc += "hai mươi ";
            break;
        case 3:
            doc += "ba mươi ";
            break;
        case 4:
            doc += "bốn mươi ";
            break;
        case 5:
            doc += "năm mươi ";
            break;
        case 6:
            doc += "sáu mươi ";
            break;
        case 7:
            doc += "bảy mươi ";
            break;
        case 8:
            doc += "tám mươi ";
            break;
        case 9:
            doc += "chín mươi ";
            break;
        default:
            alert("hãy nhập số có 3 chữ số");
        
    }
   
    switch (hangDonvi) {
        case 0:
            doc += "";
            break;
        case 1:
            doc += "mốt";
            break;
        case 2:
            doc += "hai";
            break;
        case 3:
            doc += "ba";
            break;
        case 4:
            doc += "bốn";
            break;
        case 5:
            doc += "năm";
            break;
        case 6:
            doc += "sáu";
            break;
        case 7:
            doc += "bảy";
            break;
        case 8:
            doc += "tám";
            break;
        case 9:
            doc += "chín";
            break;
        default:
            alert("hãy nhập số có 3 chữ số");
    }

    document.getElementById("txt").innerHTML = doc;
   
}
document.getElementById("btnT").onclick = cachDoc
