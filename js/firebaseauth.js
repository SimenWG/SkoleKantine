// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlH28I6UNHypJYCRzwRCB8CDHsFDDqTt4",
  authDomain: "login-fbb0b.firebaseapp.com",
  projectId: "login-fbb0b",
  storageBucket: "login-fbb0b.firebasestorage.app",
  messagingSenderId: "1086733044139",
  appId: "1:1086733044139:web:e7d2bd8bcf63a6633faaee",
  measurementId: "G-03MPBGZBF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add event listener to the login button
document.getElementById("logBtn").addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  try {
    // Fetch the admin credentials from Firestore
    const docRef = doc(db, "Admin", "admints");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const adminData = docSnap.data();

      // Validate credentials
      if (email === adminData.dbemail && password === adminData.dbpassword) {
        // Redirect to the desired page
        window.location.href = "profil.html";
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("Admin credentials not found in the database.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again.");
  }
});
