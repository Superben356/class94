
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDr7JP1AMTp8mQRiHSlBOVyZTSDR7xWOP4",
    authDomain: "kwitter-43e55.firebaseapp.com",
    databaseURL: "https://kwitter-43e55-default-rtdb.firebaseio.com",
    projectId: "kwitter-43e55",
    storageBucket: "kwitter-43e55.appspot.com",
    messagingSenderId: "585287735876",
    appId: "1:585287735876:web:df1adad71cc2098c227a11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          pupose : "adding user"
      })

  }