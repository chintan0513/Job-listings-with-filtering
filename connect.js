'use strict';
function myFun(){
    var txtSearch = document.getElementById("area");
    txtSearch.style.display="block";
}
// function myEffect(){
//     var frontend = document.getElementById("frontend");
//     var senior = document.getElementById("senior");

    
// }

function myEffect(){

    var search = document.getElementById("search").value;
    var frontend = document.getElementById("frontend");
    var senior = document.getElementById("senior");
    
    if(search.match = 'frontend') {
        frontend.style.display = "block";
        senior.style.display = "none";
    }
}