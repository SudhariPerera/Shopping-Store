var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

function checkPassword(){
	if(document.getElementById("pwd").value != document.getElementById("rep_psw").value){
		alert("Passwords are mismatching.. Please insert your password again");
		return false;
	}
	else{
		alert("Good..Passwords are matched");
		return true;
	}	
}


function formValidation()
{
	var RFname = document.registration.firstname;
	var RLname = document.registration.lastname;
	var RUname = document.registration.Username;
	var REmail = document.registration.email;

	if(userid_validation(uid,5,12))
	{
		if(allLetter(RFname))
		{
		if(allLetter(RLname))
		{
		if(allLetter(RUname))
		{
		if(ValidateEmail(REmail))
		}
		} 
		}
	} 
return false;
}

function allLetter(RUname)
{ 
	var letters = /^[A-Za-z]+$/;
	
	if(RUname.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Username must have alphabet characters only.Please enter your username again.');
		RUname.focus();
		return false;
	}
}

function ValidateEmail(REmail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(REmail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		REmail.focus();
		return false;
	}
}

