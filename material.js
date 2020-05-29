//your app configuration 
var firebaseConfig = {
    apiKey: "AIzaSyCGbGhTrDXqT6pZ7kwhWG1OPpmCcA-Qd7Y",
    authDomain: "quick-92c74.firebaseapp.com",
    databaseURL: "https://quick-92c74.firebaseio.com",
    projectId: "quick-92c74",
    storageBucket: "quick-92c74.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let codeGame = 0;
  const games = firebase.database().ref().child('games'); //create a collection of games
  const code = games.child('codeGame'); //create a list of players in the game
  const players = games.child('players');
  const player1 = players.child('player1');
  const player2 = players.child('player2');
  const player3 = players.child('player3');
  const player4 = players.child('player4');
  const player5 = players.child('player5');
  const player6 = players.child('player6');
  const player7 = players.child('player7');
  const player8 = players.child('player8');
  const player9 = players.child('player9');
  const player10 = players.child('player10');

  const name = document.getElementById('playerName');

 



  $(document).ready(function() {
  $("#player").hide();

    $("#startButton").click(function () {
      $("#startGame").hide();
      $("#player").show();
      codeGame = Math.ceil(Math.random()*100);
      $("#gameID").append("Your game code: " + codeGame);
      code.set(codeGame);


      $("#nameButton").click(function () {
        player1.set(name.value);
      });
    });
  });