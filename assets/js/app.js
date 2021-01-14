const images = document.getElementsByClassName("images");

//create the form to prompt for name
function getName(){
	let BotName = document.getElementById("name");
	//show the form
	BotName.classList.remove("hidden");
	BotName.classList.add("EnterName");
}

//grab the type and print
function getType(img){
	var archetype = img.name;
	var divType = document.createElement("div");
	divType.innerHTML = archetype + " archetype selected";
	divType.classList.add("chosenType");
	divType.classList.add("fade-in");	
	document.getElementById("name").appendChild(divType);		
}

function hideEntry(){
	//hide form
	let BotName = document.getElementById("name");
	BotName.classList.add("hidden");		
}

function Initialize(name){
	let Name_init = document.createElement("div");
	Name_init.classList.add("initialize");
	Name_init.classList.add("fade-in");	
	Name_init.innerHTML = name + " will begin working shortly...";
	document.getElementsByTagName("body")[0].appendChild(Name_init);
}


//let the user choose a type
//click on image
//print out type
for (var i = 0; i < images.length; i++){
	images[i].addEventListener("click", function(){
		//grab the url
		//temp save the url 
		var type = this.src;
		console.log(type);
		//hide the contents of container
		document.getElementById("robots").style.display = "none";
		document.getElementById("border").style.display = "none";

		//get the type and print
		getType(this);		

		//prompt the user to enter a name
		getName();

		//create image
		var img = document.createElement("img");
		img.src = type;
		img.classList.add("center");
		img.classList.add("img-thumbnail");
		document.getElementsByTagName("body")[0].appendChild(img);


	});
}

//collect name
function collectName(){
	let entry = document.getElementById("exampleFormControlInput1");
	let grabName = document.getElementById("submit");
	grabName.addEventListener("click", function(){
		hideEntry();
		Initialize(entry.value.toUpperCase());
		setTimeout(function(){
			window.location.replace("task.html");
		}, 2000);	
	});
}

collectName();









