$(function(){
	 secs = 5; // 设置多少秒
	 wait = secs * 2;
	  document.getElementById("big").disabled =true;
	 for(i=1;i<=(wait/100);i++) {
	  window.setTimeout("doUpdate(" + i + ")", i * 100);
	 }
	 window.setTimeout("Timer()", wait);

	 function doUpdate(num) {
	  if(num == (wait/100)) {
	   document.getElementById("big").innerHTML = "  ";
	  } else {
	   wut = (wait/100)-num;
	      document.getElementById("big").innerHTML  = secs+"秒倒计时： " + wut + "";
	  }
	 }

	 function Timer() {
	    document.getElementById("big").disabled =false;
	}
})
 
