function getFormvalue() {
    //Write your code here
function getFormvalue() {
var x=document.getElementById("form1");
let name = ""
for (var i=0;i<x.length;i++) {
if (x.elements[i].value!='Submit')
name += x.elements[i].value + " "
}

alert(name.substring(0,name.length-1));
}
}