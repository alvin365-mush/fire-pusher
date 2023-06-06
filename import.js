// Imports
const firestoreService = require("firestore-export-import");
const firebaseConfig = require("./config2.js");
const serviceAccount = require("./serviceAccount2.json");
firestoreService.initializeFirebaseApp(serviceAccount);
// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    await firestoreService.initializeFirebaseApp(firebaseConfig.databaseURL);
    console.log("Firebase Initialized");

    await firestoreService.restore("./dataprod.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
