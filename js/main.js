  function getData(){
	var in1 = document.getElementById("in1").value;
	// console.log(in1);
	showData(in1);
  };

  function showData(msg){
  	   document.getElementById('lb1').innerHTML = msg;
  };