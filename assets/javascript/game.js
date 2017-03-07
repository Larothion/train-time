





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhPhDuQlHKArG7hV1xMQOJvakcWly2SwM",
    authDomain: "train-time-3fb2b.firebaseapp.com",
    databaseURL: "https://train-time-3fb2b.firebaseio.com",
    storageBucket: "train-time-3fb2b.appspot.com",
    messagingSenderId: "663167782759"
  };
  firebase.initializeApp(config);


 var dataRef = firebase.database();



 /*Global Variables---------------*/

 var trainName = "";
 var destination = "";
 var trainTime;
 var frequency = "";



/*Main Functions------------------*/



/*Main Processes------------------*/

$("#submit-train").on("click", function(event) {

	event.preventDefault();

	/*get the inputted values when clicking the submit button and storing them
	in the global variables*/
	trainName = $(".name-input").val().trim()
	destination = $(".destination-input").val().trim()
	trainTime = $(".time-input").val().trim()
	frequency = $(".frequency-input").val().trim()

	/*pushing the inputs to the database*/
	dataRef.ref().push({

		trainName: trainName,
		destination: destination,
		trainTime: trainTime,
		frequency: frequency,
	})

	console.log (trainName);
	console.log(destination);
});

dataRef.ref().on("child_added", function(childSnapshot) {

	$(".name-display").append("<div class='row schedule-row'>" + childSnapshot.val().trainName +"</div><br><br>");
	$(".destination-display").append("<div class='row schedule-row'>" + childSnapshot.val().destination +"</div><br><br>");
	$(".frequency-display").append("<div class='row schedule-row'>" + childSnapshot.val().frequency +"</div><br><br>");
	$(".arrival-display").append("<div class='row schedule-row'>" + childSnapshot.val().trainTime +"</div><br><br>");
});


