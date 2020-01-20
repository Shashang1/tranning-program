function validate(){
  

  inputElements = document.getElementsByTagName("input");
  var flag = true;
  if (inputElements[0].value=="") {
    flag = false;
    
    document.getElementById("fname-hid").style.display="block";
  }
  if (inputElements[1].value=="") {
    flag = false;
    document.getElementById("lname-hid").style.display="block";
    

  }
  if (inputElements[2].value=="") {
    flag = false;
    
    document.getElementById("user-hid").style.display="block";
  }

  if (inputElements[3].value==""||!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputElements[3].value)) {
    flag = false;
    
    document.getElementById("email-hid").style.display="block";
  }

  if (inputElements[4].value=="") {
    flag = false;
    
    document.getElementById("add1-hid").style.display="block";
  }
  
  if (inputElements[6].value==""||inputElements[6].value<9999||inputElements[6].value>999999) {
    flag = false;
    document.getElementById("zip-hid").style.display="block";
  }


  if (!inputElements[9].checked && !inputElements[10].checked && !inputElements[11].checked) {
    flag = false;
    
    
    document.getElementById("radio-hid").style.display="block";
  }

  

  if (inputElements[12].value=="") {
    flag = false;
    
    document.getElementById("noc-hid").style.display="block"; 
  }
  if (inputElements[13].value==""||isNaN(inputElements[13].value)||inputElements[13].value>9999999999999999 || inputElements[13].value<100000000000) {
    flag = false;
    
    document.getElementById("cn-hid").style.display="block";
  }
  
  if (inputElements[14].value=="") {
    flag = false;
    
    document.getElementById("exp-hid").style.display="block";
  }
  console.log(inputElements[15]);
  if (inputElements[15].value==""||isNaN(inputElements[15].value)||inputElements[15].value>999) {
    flag = false;
    document.getElementById("cvv-hid").style.display="block";
  }
  
  inpSelect = document.getElementsByTagName("select");

  if(inpSelect[0].value==""){
    flag = false;
    document.getElementById("count-hid").style.display="block";
  }
  if(inpSelect[1].value==""){
    document.getElementById("state-hid").style.display="block";
  }
  if (flag) {
    alert("response submited");
  }

  return flag;
}

