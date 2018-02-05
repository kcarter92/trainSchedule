//Connects to Firebase
var config = {
apiKey: "AIzaSyC7dRk_mVDuX1Si3jTOKCAEip1G0ZpIJs4",
authDomain: "train-schedule-205ab.firebaseapp.com",
databaseURL: "https://train-schedule-205ab.firebaseio.com",
projectId: "train-schedule-205ab",
storageBucket: "",
messagingSenderId: "502905729082"
};

firebase.initializeApp(config);

var database = firebase.database();
//================================================================================

//Adds new trains to the schedule
$("#add-train-btn").on("click", function(event) {
	event.preventDefault();

	var trnName = $('#train-name-input').val();
	var trnDest = $('#destination-input').val();
	var trnFirst = moment($('#first-input').val(), "HH:mm").format("X")
	var trnFreq = $('#frequency-input').val();

	var newTrn = 
	{
		name: trnName,
		destination: trnDest,
		first: trnFirstl,
		frequency: trnFreq
	};

	database.ref().push(newTrn);

	console.log(newTrn.name);
	console.log(newTrn.destination);
	console.log(newTrn.first);
	console.log(newTrn.frequency);

	$('#train-name-input').val("");
	$('#destination-input').val("");
	$('#first-input').val("");
	$('#frequency-input').val("");

});
//================================================================================

//Saves users input in Firebase
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	console.log(childSnapshot.val());

	var trnName = childSnapshot.val().name;
	var trnDest = childSnapshot.val().destination;
	var trnFirst = childSnapshot.val().first;
	var trnFreq = childSnapshot.val().frequency;

	console.log(trnName);
	console.log(trnDest);
	console.log(trnFirst);
	console.log(trnFreq);

	var trnFirstPretty = moment.unix(trnStart).format("MM/DD/YY");
//Time Calculations
	var currentTime = moment();
	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	var tRemainder = diffTime % tFrequency;
	var tMinutesTillTrain = trnFreq - tRemainder;
	var trnNext = moment().add(tMinutesTillTrain, "minutes");

	console.log(trnNext);

	$("#train-table > tbody").append("<tr><td>" + trnName + "</td><td>" + trnDest + "</td><td>" +
	trnFirstPretty + "</td><td>" + trnFreq + "</td><td>" + trnNext + "</td></tr>" + trnMinAway + "</td></tr>");
//================================================================================
});


//BROKEN:
// Unable to push Added trains