
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

const auth = getAuth();

function Registrar(){
  var usuario = document.getElementById("usr").value;
  var contrasena = document.getElementById("pwd").ariaValueMax;

  createUserWithEmailAndPassword(auth,usuario, contrasena)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ..
  console.log(errorMessage);
});}