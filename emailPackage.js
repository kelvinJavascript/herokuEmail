process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const nodemailer = require('nodemailer');
class mailer{
	constructor(email,password){
		this.mailer=nodemailer.createTransport({service: email.split('@')[1].split(".")[0],
         auth: {
              user: email,
              pass: password,
         }
        });
        this.email=email
	}
	send(to,subject,body,from){
		var account=this.mailer;
		return new Promise((resolve,reject)=>{
			var options = {
				from:from||this.email,
				to:to,
				subject:subject,
				html:body
			};
			account.sendMail(options,(err,info)=>{
				if(err){
					reject(new Error(err))
				}else{
					resolve(info)
				}
			})
		});
	}
}
function login(email,password){
	return new mailer(email,password);
}/*
login("kelvin.javascript@gmail.com","kelvin11".toUpperCase())
.send("kelvinchan314@gmail.com","test","hello dis is de body")
.then((info)=>{
	console.log(info);
}).catch((err)=>{
	console.log(err);
})*/
module.exports=login;