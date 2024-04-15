    const body = document.querySelector("body");
    const btn = document.getElementById("mode");
    const hd = document.getElementById("hd");
    const nav = document.querySelector("#nav2");
    var btn1 = "light"
   var age = 19;

    btn.addEventListener("click", function() {

     	  document.querySelector("body").classList.toggle("dark-mode");
     	  if(btn1 === "light"){
     	  	btn = document.getElementById("mode").innerText ="Mode Changed";
     	  }
    });


 	let a = document.querySelector("hh5");
 	function mya(){
 		location.href ="https://github.com/shaikayaz9/";
 		alert("here you can see my all project's")
 	}
 	// hide nav bar

 	function myf(){
 	if(age>15){
        const nav = document.querySelector("#nav1").style.display = "block";
        age = 5}
        else{
        	 const nav = document.querySelector("#nav1").style.display = "none";
        	 age = 19
        }

         
 	}

