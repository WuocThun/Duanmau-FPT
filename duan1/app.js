// chạy tự động 
var index = 1;
function changeImage() {
    var imgs = ["/img/bnn.png", "/img/bn1.png","/img/bn2.png"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == 3){
        index =0;
    }
}
//gọi một hàm trong khoảng thời gian xác định (tính bằng mili giây).
setInterval(changeImage,2000);