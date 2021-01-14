//declare all global variables and arrays
let TaskNames = [
	"Do the dishes", 
	"Sweep the house", 
	"Do the landry",
	"Take out the recycling",
	"Make a bangin' sammich",
	"Mow the lawn",
	"Rake the leaves",
	"Give the dog a bath",
	"Bake some Christmas cookies",
	"Wash the darn car"
	];
let TaskTimes = [1000, 3000, 10000, 4000, 7000, 20000, 18000, 14500, 8000, 20000];
let assignedTasks = [];
let assignedTimes = [];
let Indexs = [];
let TaskIDs = [];

//Minimize the amount of repeated tasks
function noRepeats(place){
	//Check array if value is inside the array
	if(Indexs.indexOf(place) != -1){
		if(place < 9){
			place++;
		} else {
			//if found
			//reassign the value of place
			place = place - (Math.floor(Math.random * 9));
		}
	}
	return place;
}

//Update the user when and how long a task is completed
function TimeToComplete(sec){
	//update time to finish task
	let progress = document.createElement("div");
	progress.innerHTML = "Finished Task(s) in " + sec + " seconds...";
	progress.classList.add("chosenType");
	document.getElementById("working").classList.add("hidden");
	document.getElementsByTagName("body")[0].appendChild(progress);
	//toggle
	setTimeout(function(){
		document.getElementsByTagName("body")[0].removeChild(progress);
		document.getElementById("working").classList.remove("hidden");		
	}, 1000);
}

//NOTE: Tried to implement a progress bar
//progress bar
// let j = 0;
// function move(time_finish) {
// 	// let j = 0;
	
//   	if (j == 0) {
//     	j = 1;
//     	var elem = document.getElementById("myBar");
//     	var width = 1;
//     	//10 represents 1 second
//     	//200 represents 20 seconds
//     	var id = setInterval(frame, time_finish);
//     	function frame() {
//       		if (width >= 100) {
//         		clearInterval(id);
//         		j = 0;
// 	        	setTimeout(function(){
// 					alert("starting new task");
// 				}, time_finish);
        		
//         		// width = 1;
//       		} else {
//         		width++;
//         		elem.style.width = width + "%";
//       		}
//     	}
//   	}
	
// }

//Main loop for assigning tasks to robot
for (let i = 0; i < 5; i++){
	//generate random index value
	let ind = (Math.floor(Math.random() * 10));
	index = noRepeats(ind);
	//store assigned tasks/times for later usage
	assignedTasks.push(TaskNames[index]);
	assignedTimes.push(TaskTimes[index]);
	//Build the todo list
	let neededTask = document.createElement("li");
	neededTask.innerHTML = TaskNames[index];
	neededTask.id = "task" + (i+1);
	document.getElementById("needs").appendChild(neededTask);
}

//loop to keep track of completed tasks
for(let i = 0; i < 5; i++){
	let seconds = assignedTimes[i] / 1000;
	//create tag for completed task
	let FinishedTask = document.createElement("li");
	FinishedTask.innerHTML = assignedTasks[i];

	setTimeout(function(){
		TimeToComplete(seconds);
		//add completed tasks to list
		document.getElementById("done").appendChild(FinishedTask);
		document.getElementById("task" + (i+1)).style.textDecoration = "line-through";
	}, assignedTimes[i]);		
}

//Hardcoded window timeout to signal end
function FinishAll(FinishCounter){
	setTimeout(function(){
		document.getElementById("working").classList.remove("fade-in");
		document.getElementById("working").innerHTML = "All Done!";
	}, 25000);
}
//signal end of program
FinishAll();