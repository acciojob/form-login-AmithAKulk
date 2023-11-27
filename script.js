function displayFormValues(){ 
	var name=document.getElementById('fname').value;
	var last=document.getElementById('lname').value;
	var phone=document.getElementById('Pnum').value;
	var email=document.getElementById('eid').value;

	alert('First Name:'+name+'\nLast Name:'+last+'\nPhone Number:'+phone+'\nEmail ID:'+email);
}