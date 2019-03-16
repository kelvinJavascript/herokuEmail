/*
Copyright 2019 Kelvin Chan Inc.

Distributed under th MIT License

Kelvin Chan- 10/3/2019*/
var login=require("./emailPackage.js")
var account=require("./spamEmails.js")
var contentInfo={
	to:"hlee114@eq.edu.au",
	subject:"hi",
	body:"test????I didn't mean to send this email"
}
var amountTarget=5;
var loginObjs=[];
var loginNumber=account.length;
function delay(s){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve()
		}, s)
	})
}
//start logins
for(var i=0;i<account.length;i++){
	var accountInfo=account[i];
	loginObjs.push(login(accountInfo[0],accountInfo[1]));
}
//console.dir(loginObjs);
async function sendEmail(login,info,time){
	time=time||500;
	await delay(time);
	return await login.send(info.to,info.subject,info.body);
	console.log('done');
}
for(var j=amountTarget;j>0;j--){
	var loginToBeUsed=loginObjs[j%loginNumber];
	sendEmail(loginToBeUsed,contentInfo,1000);
	console.log(j +" emails left.")
}