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
var ref = db.ref("/");
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});

server.listen(port,function () {
    console.log("server is listening on %j", server.address())
});