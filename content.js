// content.js
console.log('PI initiated');

$(document).ready( function(){

	var css = '<style>#pi-hover-btn {opacity:0.8; position: fixed;top: 10px;left: 10px;border-radius: 50%;box-shadow: 0px 5px 15px #001814;cursor: pointer;}#pi-hover-btn:hover{opacity:1}</style>';

	$('head').append(css);

	var logo = chrome.runtime.getURL('icon.png');

	var PIbtn = '';

		PIbtn += '<img id="pi-hover-btn" src="'+logo+'">';


	$("body").append(PIbtn);


	$("#pi-hover-btn").click(function(){
		alert("ads")

	});



})