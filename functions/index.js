const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

//createnotification is called when you do something new
const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});

//1.when a project is created
exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    //references a specific document
    .onCreate(doc => {
        //whenever a new project is created it fires this function, which creates a new notification
        const project = doc.data();
        //notification object:
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
            //timestamp from server
        };
        return createNotification(notification);
});

//2.
