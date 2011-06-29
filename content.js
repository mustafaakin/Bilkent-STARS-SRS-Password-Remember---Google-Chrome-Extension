$(document).ready(function(){
	var u  = localStorage["user"];
	var p  = localStorage["pwd"];
	if ( u != undefined && p != undefined){
		$("#ID").val(u).css("background-color","yellow");
		$("#PWD").val(p).css("background-color","yellow");
	}
	$(".actionbutton").click( function(){
		if ( $(this).attr("type") == "submit" && $(this).attr("Value") == "Login"){
			var a = $("#ID").val();
			var b = $("#PWD").val();
			localStorage["user"] = a;
			localStorage["pwd"] = b;
		}
	});
});