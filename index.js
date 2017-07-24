var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 7000;

var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("/Users/alexandrupetru/Downloads/europack-c8a70-firebase-adminsdk-j3smq-6c69bf1c3d.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://europack-c8a70.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("/Comenzi");
ref.on("child_added", function(snapshot,prevChildKey) {
   sendAwesomeMails(JSON.stringify(snapshot.val()));
});


'use strict';
const nodemailer = require('nodemailer');
 function sendAwesomeMails(order) {
   "use strict";
console.log(order);
// create reusable transporter object using the default SMTP transport
     var transporter = nodemailer.createTransport({
         host: 'mail.vying.network',
         port: 587,
         secure: false, // secure:true for port 465, secure:false for port 587
         auth: {
             user: 'developers@vying.network',
             pass: 'iepurelefugeadevulpe'
         }
     });

// setup email data with unicode symbols
     var mailOptions = {
         from: '"MyAwesomeNodeServer" developers@vying.network', // sender address
         to: 'alexandrumpetru@gmail.com', // list of receivers
         subject: 'Hello ✔', // Subject line
         text: order, // plain text body
         html: '' // html body
     };

// send mail with defined transport object
     transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
             return console.log(error);
         }
         console.log('Message %s sent: %s', info.messageId, info.response);
     })
 }

server.listen(port,function () {
    console.log("server is listening on %j", server.address())
});