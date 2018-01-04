var email   = require("emailjs/email");
var demo={

sendMail:function(demo,callback){

var server  = email.server.connect({
   user:    "darshil212221@gmail.com", 
   password:"123456789*0#", 
   host:    "smtp.gmail.com", 
   ssl:     true,
   port:465
});

server.send({
   text:    demo.message,
   from:    "darshil212221@gmail.com", 
   to:     demo.name,
   subject: demo.subject
}, callback);
}


}
module.exports = demo;
