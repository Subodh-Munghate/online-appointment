// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKdLkLtCkX5bRIZVPp0zkTQrsEC-DGVtU",
    authDomain: "hospitalmanagement-ssgmce.firebaseapp.com",
    databaseURL: "https://hospitalmanagement-ssgmce-default-rtdb.firebaseio.com",
    projectId: "hospitalmanagement-ssgmce",
    storageBucket: "hospitalmanagement-ssgmce.appspot.com",
    messagingSenderId: "872102038610",
    appId: "1:872102038610:web:3242cbc8996a5dbf1d238b",
    measurementId: "G-SHC99GRZP6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to fetch and display user data from Firestore
function fetchUserData() {
    // Get reference to Firestore database
    const db = firebase.firestore();

    // Reference to the user's document
    const userRef = db.collection("users").doc("NDKCPUlh03OoNxkTrI7eGG60dYP2");

    // Initialize variables to store user data
    let fullName, dob, contactInfo, gender;

    // Fetch user data from Firestore
    userRef.get().then((doc) => {
        if (doc.exists) {
            // Document exists, extract data
            const userData = doc.data();
            
            fullName = userData.fullName;
            dob = userData.dob;
            contactInfo = userData.contactInfo;
            gender = userData.gender;

            // Display user data on the webpage
            const userDataDiv = document.getElementById("userData");
            userDataDiv.innerHTML = `
                <p><strong>Full Name:</strong> ${userData.fullName}</p>
                <p><strong>Date of Birth:</strong> ${userData.dob}</p>
                <p><strong>Contact Info:</strong> ${userData.contactInfo}</p>
                <p><strong>Gender:</strong> ${userData.gender}</p>
            `;
        } else {
            console.log("No such document!");
            // Display message if user data not found
            const userDataDiv = document.getElementById("userData");
            userDataDiv.textContent = "User data not found.";
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
        // Display error message
        const userDataDiv = document.getElementById("userData");
        userDataDiv.textContent = "Error fetching user data.";
    });

    
    // const userRef2 = db.collection("users").doc("NDKCPUlh03OoNxkTrI7eGG60dYP2").collection("medical_history").doc("history_17_02_2024");
    // userRef2.get().then((doc) => {
    //     if (doc.exists) {
    //         // Document exists, extract data
    //         const userData = doc.data();
            
    //         // Display user data on the webpage
    //         const userDataDiv = document.getElementById("userData");
    //         userDataDiv.innerHTML = `
    //             <p><strong>Age:</strong> ${userData.age}</p>
    //         `;
    //     } else {
    //         console.log("No such document!");
    //         // Display message if user data not found
    //         const userDataDiv = document.getElementById("userData");
    //         userDataDiv.textContent = "User data not found.";
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    //     // Display error message
    //     const userDataDiv = document.getElementById("userData");
    //     userDataDiv.textContent = "Error fetching user data.";
    // });
}

// Event listener for the "Get Data" button
document.getElementById("getDataBtn").addEventListener("click", fetchUserData);
