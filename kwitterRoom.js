
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDN6zYEn7cJ3OE3WZbvFXMrkjQli-bN2XI",
  authDomain: "kwitter-59acb.firebaseapp.com",
  databaseURL: "https://kwitter-59acb-default-rtdb.firebaseio.com",
  projectId: "kwitter-59acb",
  storageBucket: "kwitter-59acb.appspot.com",
  messagingSenderId: "812606789363",
  appId: "1:812606789363:web:476c033cbebf941c30c986"
};

firebase.initializeApp(firebaseConfig);

//armazena nome de usuario na memoria local
userName = localStorage.getItem("userName");

//da bem vindo ao nome que ta salvo na memoria
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";


//função q add salas
function addRoom()
{
  //pega nome do html q o usuario escolheu
  roomName = document.getElementById("roomName").value;

  //passa o nome da sala p firebase
  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    //add o nome na memoria local
    localStorage.setItem("roomName", roomName);
    
    //mostra outra pag pro usuario
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      roomNames = childKey; //tem o nome de todas as salas salvas no firebase

      //pego os nomes das salas e jogo dentro de uma variavel
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      
      //exibe nome das salas no html
      document.getElementById("output").innerHTML += row;
    });
  });

}

//chamando a função 
getData();

//manda o usuario para a sala ao clicar no nome com #
function redirectToRoomName(name)
{
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

//deslogar da minha conta
function logout() {
    localStorage.removeItem("userName"); //removo o usuario
    localStorage.removeItem("roomName"); //removo a sala
    window.location = "index.html"; //volto p tela inicial
}
