import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import fs from "fs";

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function main() {
  const docRef = doc(db, 'wooban', 'status');
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    console.log(snap.data().content);
  } else {
    console.log("No document!");
  }
}
main();
