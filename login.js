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
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()


// Function to handle user login
function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Invalid login credential!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
      window.location.href = "index.html";
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      // alert(error_message)
      alert("Invalid credentials")
    })
  }
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }