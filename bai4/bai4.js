/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * tên và tọa độ của 3 sinh viên và trường học
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến name, x ,y cho 3 sinh viên và trường học
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Tính khoảng cách bằng định lý pytago (khoảng cách là cạnh huyền)
 *     - so sánh tìm ra khoảng cách lớn nhất
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  
 */

 function tinhKhoangCach(){
    var name1 = document.getElementById("namesv1").value;
    var x1 = Number(document.getElementById("sv1x").value);
    var y1 = Number(document.getElementById("sv1y").value);

    var name2 = document.getElementById("namesv2").value;
    var x2 = Number(document.getElementById("sv2x").value);
    var y2 = Number(document.getElementById("sv2y").value);

    var name3 = document.getElementById("namesv3").value;
    var x3 = Number(document.getElementById("sv3x").value);
    var y3 = Number(document.getElementById("sv3y").value);

    var schoolX = Number(document.getElementById("scx").value);
    var schoolY  = Number(document.getElementById("scy").value);

    var ketqua = '';

    var khoangCachSv1 = Math.sqrt(Math.pow(schoolX - x1, 2) + Math.pow(schoolY - y1, 2));

    var khoangCachSv2 = Math.sqrt(Math.pow(schoolX- x2, 2) + Math.pow(schoolY - y2, 2));
  
    var khoangCachSv3 = Math.sqrt(Math.pow(schoolX- x3, 2) + Math.pow(schoolY - y3, 2));
  
    if(khoangCachSv1 > khoangCachSv2 && khoangCachSv1 > khoangCachSv3){

        ketqua = name1
    }else if(khoangCachSv2 > khoangCachSv1 && khoangCachSv2 > khoangCachSv3){
        ketqua = name2
    }else{
        ketqua = name3
    }
document.getElementById("txtResult").innerHTML = ketqua + ":  là người xa trường nhất";
 }
 document.getElementById("btnT").onclick = tinhKhoangCach;