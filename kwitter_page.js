const firebaseConfig = {
    apiKey: "AIzaSyB6FJjsngTHbx7emmoD5y6UOFe_4wA05kI",
    authDomain: "sitioweb-cc16e.firebaseapp.com",
    projectId: "sitioweb-cc16e",
    storageBucket: "sitioweb-cc16e.appspot.com",
    messagingSenderId: "1028219508626",
    appId: "1:1028219508626:web:d511b952f2e007ea43934b"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Inicia el código
   console.log("Nombre de la sala: " + Room_names);
   row = "<div class='room_name' id=" +Room_names+ "onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //Finaliza el código
   });});}