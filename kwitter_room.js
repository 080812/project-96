
//ADD YOUR FIREBASE LINKS HERE // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDY0z1mMFIutfmqSQsljL-ZHJTvUClZCnc",
      authDomain: "signal-d35f1.firebaseapp.com",
      databaseURL: "https://signal-d35f1-default-rtdb.firebaseio.com",
      projectId: "signal-d35f1",
      storageBucket: "signal-d35f1.appspot.com",
      messagingSenderId: "452377844900",
      appId: "1:452377844900:web:b598d7e4d084151deb5a31"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addroom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
    }

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}