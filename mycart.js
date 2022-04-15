var giohang = [];

function addcart(x) {
    //ấly dữ liệu

    var pa = x.parentNode.parentNode;
    var hinh =  pa.children[1].children[0].src;
    var tensp = pa.children[3].children[0].innerText;
    var gia = pa.children[0].children[0].innerHTML.substring(1);
    console.log(hinh+" "+tensp+""+gia);
    var soluong = 1;
    var flag = 1;
    


    if(flag == 1){
        var item = [hinh, tensp, gia, soluong];
        giohang.push(item);
        console.log(giohang);
    }
    document.getElementById('mycart').innerHTML = showcart();

    function showcart() {
        var kq = '';
        var tonggiatri = 0;
        for (let i = 0; i < giohang.length; i++) {
            kq += '<tr>';
            kq += '   <td>'+ (i + 1) + '</td>';
            kq += '   <td><img src="' + giohang[i][0] + '"></td>';
            kq += '   <td>' + giohang[i][1] + '</td>';
            kq += '   <td>' + giohang[i][2] + '</td>';
            kq += '    <td>' + giohang[i][3] + '</td>';
            kq += '    <td>' + giohang[i][3] * giohang[i][2] + '</td>';
            kq += '</tr>';

            tonggiatri+=giohang[i][3] * giohang[i][2];

        }
        kq += '<tr>';
        kq += '    <td colspan="5">Tổng giá trị: </td>';
        kq += '    <td>' +tonggiatri+ '</td>';
        return kq; 
        
    }
        
    
}
document.getElementById("btn1").onclick = function() {
    document.getElementById("giohang").style.display = 'block';       
};
document.getElementById("btn2").onclick = function(){
    document.getElementById("giohang").style.display = 'none';
};
