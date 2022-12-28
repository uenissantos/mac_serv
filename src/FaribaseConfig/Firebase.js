
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

	apiKey: "AIzaSyCFlA661n3XdqsLMvXoYvNklu9W59-wwos",

	authDomain: "ringed-pad-348922.firebaseapp.com",

	databaseURL: "https://ringed-pad-348922-default-rtdb.firebaseio.com",

	projectId: "ringed-pad-348922",

	storageBucket: "ringed-pad-348922.appspot.com",

	messagingSenderId: "258789715235",

	appId: "1:258789715235:web:a1fdaf227be096e7067096",

	measurementId: "G-H2Q9FBNC82"

};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
