window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myForm"]["password"].value;
	var Repassword = document.forms["myForm"]["Repassword"].value;
    if (password != Repassword) 
    {
        alert("รหัสผ่านไม่ตรงกัน");
        return false;
    }
else
    // คุณสามารถเพิ่มตรวจสอบเพิ่มเติมตามที่คุณต้องการได้ที่นี่
    // ถ้าการตรวจสอบทั้งหมดผ่าน คุณสามารถส่งแบบฟอร์มได้
    alert("ลงทะเบียนสำเร็จ!");
    return true;
}