window.onload = loginLoad;
function loginLoad(){
	var formlogin = document.getElementById("myLogin");
	formlogin.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const Username = urlParams.get('username')
	const Password = urlParams.get('password');
	
	var UsernameID = document.forms["myLogin"]["username"].value;
	var LoginPassword = document.forms["myLogin"]["password"].value;

	if(UsernameID != Username || LoginPassword != Password )
	{
		alert("Wrog Username and Password");
		return false;
	}
	else
	{
		alert("Login Succcccc");
	}
}