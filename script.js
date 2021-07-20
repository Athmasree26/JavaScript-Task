const reg=document.querySelector(".card"),
			login=document.querySelector(".login"),
			logbtn=login.querySelector(".div1"),
			regbtn=reg.querySelector(".div");






	function openLogin(){
		let name = document.getElementById("name").value;
		let mail = document.getElementById("mail").value;
		let pwd = document.getElementById("pwd").value;
		let cpwd = document.getElementById("cpwd").value;
		let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		let letters = /^[A-Za-z]+$/;
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(name == ''){
				alert('Enter your username');
			}
			else if(!letters.test(name))
			{
			alert('Name field required only alphabet characters');
			}
			else if(mail == ''){
				alert('Enter your mail');
			}
			else if (!filter.test(mail))
			{
			alert('Invalid email');
			}
			else if(pwd == ''){
				alert('Enter your password');
			}
			else if(cpwd == ''){
				alert('Enter your Confirm password');
			}
			else if(pwd != cpwd){
				alert('password not matched');
			}
			else {
				return [mail,pwd,true];
			}
		
	
	}
	function openRegister(){
		let mail1 = document.getElementById("mail1").value;
		let pwd1 = document.getElementById("pwd1").value;
		let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		let letters = /^[A-Za-z]+$/;
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var array=openLogin();
		    if(mail1 == ''){
			alert('Enter your mail');
			}
			else if(pwd1 == ''){
				alert('Enter your password');
			}
			if(array[0]==mail1 && array[1]==pwd1){
			
				return true;
			}
			
	}


			window.onload = ()=> {
				
				regbtn.onclick = ()=> {
					var array=openLogin();
					if(array[2]==true){
						reg.classList.add("hide");
						login.classList.remove("hide");
						login.classList.add("show");
						alert("Your registration is Success");
					}
				}
				logbtn.onclick = ()=> {
					if(openRegister()==true){
						window.location.reload();
						alert("your are Successfully loggedin");
					}
					
				}

			}
