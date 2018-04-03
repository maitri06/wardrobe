var email = require("emailjs/email");
var demo = {

    sendMail: function(demo, callback) {

        var server = email.server.connect({
            user: "wardrobe0621@gmail.com",
            password: "wardrobe06",
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });

        server.send({
            text: demo.message,
            from: "wardrobe0621@gmail.com",
            to: demo.name,
            subject: demo.subject
        }, callback);
    }


}
module.exports = demo;