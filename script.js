// رسالة ترحيب عند دخول الموقع
alert("هلا والله ");

// زر اسم المصممة
function showDesigner(){

    alert(" ريتال|اسيل|هيام الاساطير");

}

// رسالة ترحيب حسب الوقت
let hour = new Date().getHours();

if(hour < 12){

    alert("صباح الخير، أهلاً بك في موقع الكبسة");

}
else if(hour < 18){

    alert("مساء الخير، نتمنى لك تجربة ممتعة");

}
else{

    alert("مساء سعيد مع أشهى كبسة سعودية");

    function toggleMenu(){

    document
    .getElementById("nav-links")
    .classList.toggle("show");

}
}
