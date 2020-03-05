//import * as firebase from 'firebase';

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });
function login()
{
    var userEmail = document.getElementById("user_name").value;
    var userPassword = document.getElementById("pass_word").value;
}