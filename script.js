
var database = [
	{
		username: "uche",
		password: "pass"
	}
]

var newsfeed = [
	{
		username: "peter",
		timeline: "Coming back to start learning how to Code is awesome!"
	},
	{
		username: "amaka",
		timeline: "I'm happy to see you back..."
	},
	{
		username: "godwin",
		timeline: "Coding is life... Lol!"
	}
]

function runMyExercise() {

	var usernamePrompt = prompt("Enter your username");
	var passwordPrompt = prompt("Enter your password");


	function signIn(user, pass) {
		if(user === database[0].username && pass === database[0].password) {

			console.log(newsfeed);

		} else {

			alert("Wrong username or password");
		}
	}

	signIn(usernamePrompt, passwordPrompt);


}