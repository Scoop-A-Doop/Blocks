let customMoodAdded = false;
let numberOfCustomMoods = 0;
let isLeapYear = false;
let selectedDate = '';
let customMoodColors = [];
let customMoodNames = [];

// Opens the modal menu for selecting a mood
function openModal(id){
	document.getElementById("moodModal").style.display = "block";
	document.getElementById("modalHeader").innerHTML = "How was your day on "+id+"?";
	selectedDate = id
}

// Colors the box with one of the default color options
function defaultColorBox(color){
	document.getElementById(selectedDate).style.background = color;
	
	if(color === "white" || color === "#ffffff" || color === "rgb(255, 255, 255)"){
		document.getElementById(selectedDate).style.color = "black";
	}
	else{
		document.getElementById(selectedDate).style.color = "white";
	}
	
	closeModal();
}

// Colors the box used for when importing a file
function colorBox(color, id){
	document.getElementById(id).style.background = color;
	
	if((color === "white" || color === "#ffffff" || color === "rgb(255, 255, 255)") && color !== ""){
		document.getElementById(id).style.color = "black";
	}
	else{
		document.getElementById(id).style.color = "white";
	}
}

// Opens the form when the user wants to add a new mood
function addMood(){
	document.getElementById("customMoodForm").style.display = "block";	
}

// After the user fills out the form, this method creates the new mood
function addColor(name, color){
	document.getElementById('moodName').value = ''
	//Hides the form and creates a new mood
	document.getElementById("customMoodForm").style.display = "none";
	const mood = document.createElement('div');
	const p = document.createElement('p');
	if(name === ""){
		name = "New Mood"
		p.innerHTML = name;
	}	
	else{
		p.innerHTML = name;
	}
	
	//Sets all of the information from the mood in the CSS page
	mood.id = "customMood"
	mood.style.height = "100px";
	mood.style.width = "100px";
	mood.style.backgroundColor = color;
	mood.style.borderRadius = "50%";
	mood.style.display = "inline-block";
	mood.style.cursor = "pointer";
	
	if(color === "white" || color === "#ffffff" || color === "rgb(255, 255, 255)"){
		p.style.color = "black";
	}
	
	//Sets up event listeners 
	mood.addEventListener("click", defaultColorBox(mood.style.backgroundColor));	//Automatically executes onclick event listener upon creation
	mood.onclick = clickEvent =>{
		document.getElementById(selectedDate).style.background = color;
		
		if(color === "white" || color === "#ffffff" || color === "rgb(255, 255, 255)"){
			document.getElementById(selectedDate).style.color = "black";
		}
		else{
			document.getElementById(selectedDate).style.color = "white";
		}
		
		closeModal();
	}
	
	document.getElementById("modalInfo").insertBefore(mood, document.getElementById("add"));
	mood.appendChild(p);
	
	customMoodAdded = true;
	
	customMoodColors[numberOfCustomMoods] = color;
	customMoodNames[numberOfCustomMoods] = name;
	numberOfCustomMoods += 1;
}

// Loads all user created moods when importing a file 
function loadColor(name, color){
	//Creates a new mood
	const mood = document.createElement('div');
	const p = document.createElement('p');
	if(name === ""){
		p.innerHTML = "New Mood";
	}	
	else{
		p.innerHTML = name;
	}
	
	//Sets all of the information from the mood in the CSS page
	mood.id = "customMood"
	mood.style.height = "100px";
	mood.style.width = "100px";
	mood.style.backgroundColor = color;
	mood.style.borderRadius = "50%";
	mood.style.display = "inline-block";
	mood.style.cursor = "pointer";
	
	if(color === "white" || color === "#ffffff" || color === "rgb(255, 255, 255)"){
		p.style.color = "black";
	}
	
	//Sets up event listeners 
	mood.onclick = clickEvent =>{
		document.getElementById(selectedDate).style.background = color;
		
		if(color === "white" || color === "#ffffff" || color === "rgb(255, 255, 255)"){
			document.getElementById(selectedDate).style.color = "black";
		}
		else{
			document.getElementById(selectedDate).style.color = "white";
		}
		
		closeModal();
	}
	
	document.getElementById("modalInfo").insertBefore(mood, document.getElementById("add"));
	mood.appendChild(p);
	
	customMoodAdded = true;
	
	customMoodColors[numberOfCustomMoods] = color;
	customMoodNames[numberOfCustomMoods] = name;
	numberOfCustomMoods += 1;
}

// Deletes a user created mood 
function deleteMood(){
	if(customMoodAdded){
		const element = document.getElementById("customMood");
		element.remove();
		customMoodColors.shift();
		customMoodNames.shift();
		numberOfCustomMoods -= 1;
		if(numberOfCustomMoods == 0){
			customMoodAdded = false;
		}
	}
}

// When importing a file, this clears all of the moods created prior to importing a file
function clearMoods(){
	while(customMoodAdded){
		deleteMood();
	}
}

// Closes the modal
function closeModal(){
	document.getElementById("moodModal").style.display = "none";
}

function exportFile(){
	let text = "";
	for(let i = 0; i < customMoodColors.length; i++){
		text += customMoodColors[i]+":"+customMoodNames[i]+".";
	}
	text += "\n";
	text += document.getElementById('1/1').style.background+"\n";
	text += document.getElementById('1/2').style.background+"\n";
	text += document.getElementById('1/3').style.background+"\n";
	text += document.getElementById('1/4').style.background+"\n";
	text += document.getElementById('1/5').style.background+"\n";
	text += document.getElementById('1/6').style.background+"\n";
	text += document.getElementById('1/7').style.background+"\n";
	text += document.getElementById('1/8').style.background+"\n";
	text += document.getElementById('1/9').style.background+"\n";
	text += document.getElementById('1/10').style.background+"\n";
	text += document.getElementById('1/11').style.background+"\n";
	text += document.getElementById('1/12').style.background+"\n";
	text += document.getElementById('1/13').style.background+"\n";
	text += document.getElementById('1/14').style.background+"\n";
	text += document.getElementById('1/15').style.background+"\n";
	text += document.getElementById('1/16').style.background+"\n";
	text += document.getElementById('1/17').style.background+"\n";
	text += document.getElementById('1/18').style.background+"\n";
	text += document.getElementById('1/19').style.background+"\n";
	text += document.getElementById('1/20').style.background+"\n";
	text += document.getElementById('1/21').style.background+"\n";
	text += document.getElementById('1/22').style.background+"\n";
	text += document.getElementById('1/23').style.background+"\n";
	text += document.getElementById('1/24').style.background+"\n";
	text += document.getElementById('1/25').style.background+"\n";
	text += document.getElementById('1/26').style.background+"\n";
	text += document.getElementById('1/27').style.background+"\n";
	text += document.getElementById('1/28').style.background+"\n";
	text += document.getElementById('1/29').style.background+"\n";
	text += document.getElementById('1/30').style.background+"\n";
	text += document.getElementById('1/31').style.background+"\n";
	text += document.getElementById('2/1').style.background+"\n";
	text += document.getElementById('2/2').style.background+"\n";
	text += document.getElementById('2/3').style.background+"\n";
	text += document.getElementById('2/4').style.background+"\n";
	text += document.getElementById('2/5').style.background+"\n";
	text += document.getElementById('2/6').style.background+"\n";
	text += document.getElementById('2/7').style.background+"\n";
	text += document.getElementById('2/8').style.background+"\n";
	text += document.getElementById('2/9').style.background+"\n";
	text += document.getElementById('2/10').style.background+"\n";
	text += document.getElementById('2/11').style.background+"\n";
	text += document.getElementById('2/12').style.background+"\n";
	text += document.getElementById('2/13').style.background+"\n";
	text += document.getElementById('2/14').style.background+"\n";
	text += document.getElementById('2/15').style.background+"\n";
	text += document.getElementById('2/16').style.background+"\n";
	text += document.getElementById('2/17').style.background+"\n";
	text += document.getElementById('2/18').style.background+"\n";
	text += document.getElementById('2/19').style.background+"\n";
	text += document.getElementById('2/20').style.background+"\n";
	text += document.getElementById('2/21').style.background+"\n";
	text += document.getElementById('2/22').style.background+"\n";
	text += document.getElementById('2/23').style.background+"\n";
	text += document.getElementById('2/24').style.background+"\n";
	text += document.getElementById('2/25').style.background+"\n";
	text += document.getElementById('2/26').style.background+"\n";
	text += document.getElementById('2/27').style.background+"\n";
	text += document.getElementById('2/28').style.background+"\n";
	text += document.getElementById('2/29').style.background+"\n";
	text += document.getElementById('3/1').style.background+"\n";
	text += document.getElementById('3/2').style.background+"\n";
	text += document.getElementById('3/3').style.background+"\n";
	text += document.getElementById('3/4').style.background+"\n";
	text += document.getElementById('3/5').style.background+"\n";
	text += document.getElementById('3/6').style.background+"\n";
	text += document.getElementById('3/7').style.background+"\n";
	text += document.getElementById('3/8').style.background+"\n";
	text += document.getElementById('3/9').style.background+"\n";
	text += document.getElementById('3/10').style.background+"\n";
	text += document.getElementById('3/11').style.background+"\n";
	text += document.getElementById('3/12').style.background+"\n";
	text += document.getElementById('3/13').style.background+"\n";
	text += document.getElementById('3/14').style.background+"\n";
	text += document.getElementById('3/15').style.background+"\n";
	text += document.getElementById('3/16').style.background+"\n";
	text += document.getElementById('3/17').style.background+"\n";
	text += document.getElementById('3/18').style.background+"\n";
	text += document.getElementById('3/19').style.background+"\n";
	text += document.getElementById('3/20').style.background+"\n";
	text += document.getElementById('3/21').style.background+"\n";
	text += document.getElementById('3/22').style.background+"\n";
	text += document.getElementById('3/23').style.background+"\n";
	text += document.getElementById('3/24').style.background+"\n";
	text += document.getElementById('3/25').style.background+"\n";
	text += document.getElementById('3/26').style.background+"\n";
	text += document.getElementById('3/27').style.background+"\n";
	text += document.getElementById('3/28').style.background+"\n";
	text += document.getElementById('3/29').style.background+"\n";
	text += document.getElementById('3/30').style.background+"\n";
	text += document.getElementById('3/31').style.background+"\n";
	text += document.getElementById('4/1').style.background+"\n";
	text += document.getElementById('4/2').style.background+"\n";
	text += document.getElementById('4/3').style.background+"\n";
	text += document.getElementById('4/4').style.background+"\n";
	text += document.getElementById('4/5').style.background+"\n";
	text += document.getElementById('4/6').style.background+"\n";
	text += document.getElementById('4/7').style.background+"\n";
	text += document.getElementById('4/8').style.background+"\n";
	text += document.getElementById('4/9').style.background+"\n";
	text += document.getElementById('4/10').style.background+"\n";
	text += document.getElementById('4/11').style.background+"\n";
	text += document.getElementById('4/12').style.background+"\n";
	text += document.getElementById('4/13').style.background+"\n";
	text += document.getElementById('4/14').style.background+"\n";
	text += document.getElementById('4/15').style.background+"\n";
	text += document.getElementById('4/16').style.background+"\n";
	text += document.getElementById('4/17').style.background+"\n";
	text += document.getElementById('4/18').style.background+"\n";
	text += document.getElementById('4/19').style.background+"\n";
	text += document.getElementById('4/20').style.background+"\n";
	text += document.getElementById('4/21').style.background+"\n";
	text += document.getElementById('4/22').style.background+"\n";
	text += document.getElementById('4/23').style.background+"\n";
	text += document.getElementById('4/24').style.background+"\n";
	text += document.getElementById('4/25').style.background+"\n";
	text += document.getElementById('4/26').style.background+"\n";
	text += document.getElementById('4/27').style.background+"\n";
	text += document.getElementById('4/28').style.background+"\n";
	text += document.getElementById('4/29').style.background+"\n";
	text += document.getElementById('4/30').style.background+"\n";
	text += document.getElementById('5/1').style.background+"\n";
	text += document.getElementById('5/2').style.background+"\n";
	text += document.getElementById('5/3').style.background+"\n";
	text += document.getElementById('5/4').style.background+"\n";
	text += document.getElementById('5/5').style.background+"\n";
	text += document.getElementById('5/6').style.background+"\n";
	text += document.getElementById('5/7').style.background+"\n";
	text += document.getElementById('5/8').style.background+"\n";
	text += document.getElementById('5/9').style.background+"\n";
	text += document.getElementById('5/10').style.background+"\n";
	text += document.getElementById('5/11').style.background+"\n";
	text += document.getElementById('5/12').style.background+"\n";
	text += document.getElementById('5/13').style.background+"\n";
	text += document.getElementById('5/14').style.background+"\n";
	text += document.getElementById('5/15').style.background+"\n";
	text += document.getElementById('5/16').style.background+"\n";
	text += document.getElementById('5/17').style.background+"\n";
	text += document.getElementById('5/18').style.background+"\n";
	text += document.getElementById('5/19').style.background+"\n";
	text += document.getElementById('5/20').style.background+"\n";
	text += document.getElementById('5/21').style.background+"\n";
	text += document.getElementById('5/22').style.background+"\n";
	text += document.getElementById('5/23').style.background+"\n";
	text += document.getElementById('5/24').style.background+"\n";
	text += document.getElementById('5/25').style.background+"\n";
	text += document.getElementById('5/26').style.background+"\n";
	text += document.getElementById('5/27').style.background+"\n";
	text += document.getElementById('5/28').style.background+"\n";
	text += document.getElementById('5/29').style.background+"\n";
	text += document.getElementById('5/30').style.background+"\n";
	text += document.getElementById('5/31').style.background+"\n";
	text += document.getElementById('6/1').style.background+"\n";
	text += document.getElementById('6/2').style.background+"\n";
	text += document.getElementById('6/3').style.background+"\n";
	text += document.getElementById('6/4').style.background+"\n";
	text += document.getElementById('6/5').style.background+"\n";
	text += document.getElementById('6/6').style.background+"\n";
	text += document.getElementById('6/7').style.background+"\n";
	text += document.getElementById('6/8').style.background+"\n";
	text += document.getElementById('6/9').style.background+"\n";
	text += document.getElementById('6/10').style.background+"\n";
	text += document.getElementById('6/11').style.background+"\n";
	text += document.getElementById('6/12').style.background+"\n";
	text += document.getElementById('6/13').style.background+"\n";
	text += document.getElementById('6/14').style.background+"\n";
	text += document.getElementById('6/15').style.background+"\n";
	text += document.getElementById('6/16').style.background+"\n";
	text += document.getElementById('6/17').style.background+"\n";
	text += document.getElementById('6/18').style.background+"\n";
	text += document.getElementById('6/19').style.background+"\n";
	text += document.getElementById('6/20').style.background+"\n";
	text += document.getElementById('6/21').style.background+"\n";
	text += document.getElementById('6/22').style.background+"\n";
	text += document.getElementById('6/23').style.background+"\n";
	text += document.getElementById('6/24').style.background+"\n";
	text += document.getElementById('6/25').style.background+"\n";
	text += document.getElementById('6/26').style.background+"\n";
	text += document.getElementById('6/27').style.background+"\n";
	text += document.getElementById('6/28').style.background+"\n";
	text += document.getElementById('6/29').style.background+"\n";
	text += document.getElementById('6/30').style.background+"\n";
	text += document.getElementById('7/1').style.background+"\n";
	text += document.getElementById('7/2').style.background+"\n";
	text += document.getElementById('7/3').style.background+"\n";
	text += document.getElementById('7/4').style.background+"\n";
	text += document.getElementById('7/5').style.background+"\n";
	text += document.getElementById('7/6').style.background+"\n";
	text += document.getElementById('7/7').style.background+"\n";
	text += document.getElementById('7/8').style.background+"\n";
	text += document.getElementById('7/9').style.background+"\n";
	text += document.getElementById('7/10').style.background+"\n";
	text += document.getElementById('7/11').style.background+"\n";
	text += document.getElementById('7/12').style.background+"\n";
	text += document.getElementById('7/13').style.background+"\n";
	text += document.getElementById('7/14').style.background+"\n";
	text += document.getElementById('7/15').style.background+"\n";
	text += document.getElementById('7/16').style.background+"\n";
	text += document.getElementById('7/17').style.background+"\n";
	text += document.getElementById('7/18').style.background+"\n";
	text += document.getElementById('7/19').style.background+"\n";
	text += document.getElementById('7/20').style.background+"\n";
	text += document.getElementById('7/21').style.background+"\n";
	text += document.getElementById('7/22').style.background+"\n";
	text += document.getElementById('7/23').style.background+"\n";
	text += document.getElementById('7/24').style.background+"\n";
	text += document.getElementById('7/25').style.background+"\n";
	text += document.getElementById('7/26').style.background+"\n";
	text += document.getElementById('7/27').style.background+"\n";
	text += document.getElementById('7/28').style.background+"\n";
	text += document.getElementById('7/29').style.background+"\n";
	text += document.getElementById('7/30').style.background+"\n";
	text += document.getElementById('7/31').style.background+"\n";
	text += document.getElementById('8/1').style.background+"\n";
	text += document.getElementById('8/2').style.background+"\n";
	text += document.getElementById('8/3').style.background+"\n";
	text += document.getElementById('8/4').style.background+"\n";
	text += document.getElementById('8/5').style.background+"\n";
	text += document.getElementById('8/6').style.background+"\n";
	text += document.getElementById('8/7').style.background+"\n";
	text += document.getElementById('8/8').style.background+"\n";
	text += document.getElementById('8/9').style.background+"\n";
	text += document.getElementById('8/10').style.background+"\n";
	text += document.getElementById('8/11').style.background+"\n";
	text += document.getElementById('8/12').style.background+"\n";
	text += document.getElementById('8/13').style.background+"\n";
	text += document.getElementById('8/14').style.background+"\n";
	text += document.getElementById('8/15').style.background+"\n";
	text += document.getElementById('8/16').style.background+"\n";
	text += document.getElementById('8/17').style.background+"\n";
	text += document.getElementById('8/18').style.background+"\n";
	text += document.getElementById('8/19').style.background+"\n";
	text += document.getElementById('8/20').style.background+"\n";
	text += document.getElementById('8/21').style.background+"\n";
	text += document.getElementById('8/22').style.background+"\n";
	text += document.getElementById('8/23').style.background+"\n";
	text += document.getElementById('8/24').style.background+"\n";
	text += document.getElementById('8/25').style.background+"\n";
	text += document.getElementById('8/26').style.background+"\n";
	text += document.getElementById('8/27').style.background+"\n";
	text += document.getElementById('8/28').style.background+"\n";
	text += document.getElementById('8/29').style.background+"\n";
	text += document.getElementById('8/30').style.background+"\n";
	text += document.getElementById('8/31').style.background+"\n";
	text += document.getElementById('9/1').style.background+"\n";
	text += document.getElementById('9/2').style.background+"\n";
	text += document.getElementById('9/3').style.background+"\n";
	text += document.getElementById('9/4').style.background+"\n";
	text += document.getElementById('9/5').style.background+"\n";
	text += document.getElementById('9/6').style.background+"\n";
	text += document.getElementById('9/7').style.background+"\n";
	text += document.getElementById('9/8').style.background+"\n";
	text += document.getElementById('9/9').style.background+"\n";
	text += document.getElementById('9/10').style.background+"\n";
	text += document.getElementById('9/11').style.background+"\n";
	text += document.getElementById('9/12').style.background+"\n";
	text += document.getElementById('9/13').style.background+"\n";
	text += document.getElementById('9/14').style.background+"\n";
	text += document.getElementById('9/15').style.background+"\n";
	text += document.getElementById('9/16').style.background+"\n";
	text += document.getElementById('9/17').style.background+"\n";
	text += document.getElementById('9/18').style.background+"\n";
	text += document.getElementById('9/19').style.background+"\n";
	text += document.getElementById('9/20').style.background+"\n";
	text += document.getElementById('9/21').style.background+"\n";
	text += document.getElementById('9/22').style.background+"\n";
	text += document.getElementById('9/23').style.background+"\n";
	text += document.getElementById('9/24').style.background+"\n";
	text += document.getElementById('9/25').style.background+"\n";
	text += document.getElementById('9/26').style.background+"\n";
	text += document.getElementById('9/27').style.background+"\n";
	text += document.getElementById('9/28').style.background+"\n";
	text += document.getElementById('9/29').style.background+"\n";
	text += document.getElementById('9/30').style.background+"\n";
	text += document.getElementById('10/1').style.background+"\n";
	text += document.getElementById('10/2').style.background+"\n";
	text += document.getElementById('10/3').style.background+"\n";
	text += document.getElementById('10/4').style.background+"\n";
	text += document.getElementById('10/5').style.background+"\n";
	text += document.getElementById('10/6').style.background+"\n";
	text += document.getElementById('10/7').style.background+"\n";
	text += document.getElementById('10/8').style.background+"\n";
	text += document.getElementById('10/9').style.background+"\n";
	text += document.getElementById('10/10').style.background+"\n";
	text += document.getElementById('10/11').style.background+"\n";
	text += document.getElementById('10/12').style.background+"\n";
	text += document.getElementById('10/13').style.background+"\n";
	text += document.getElementById('10/14').style.background+"\n";
	text += document.getElementById('10/15').style.background+"\n";
	text += document.getElementById('10/16').style.background+"\n";
	text += document.getElementById('10/17').style.background+"\n";
	text += document.getElementById('10/18').style.background+"\n";
	text += document.getElementById('10/19').style.background+"\n";
	text += document.getElementById('10/20').style.background+"\n";
	text += document.getElementById('10/21').style.background+"\n";
	text += document.getElementById('10/22').style.background+"\n";
	text += document.getElementById('10/23').style.background+"\n";
	text += document.getElementById('10/24').style.background+"\n";
	text += document.getElementById('10/25').style.background+"\n";
	text += document.getElementById('10/26').style.background+"\n";
	text += document.getElementById('10/27').style.background+"\n";
	text += document.getElementById('10/28').style.background+"\n";
	text += document.getElementById('10/29').style.background+"\n";
	text += document.getElementById('10/30').style.background+"\n";
	text += document.getElementById('10/31').style.background+"\n";
	text += document.getElementById('11/1').style.background+"\n";
	text += document.getElementById('11/2').style.background+"\n";
	text += document.getElementById('11/3').style.background+"\n";
	text += document.getElementById('11/4').style.background+"\n";
	text += document.getElementById('11/5').style.background+"\n";
	text += document.getElementById('11/6').style.background+"\n";
	text += document.getElementById('11/7').style.background+"\n";
	text += document.getElementById('11/8').style.background+"\n";
	text += document.getElementById('11/9').style.background+"\n";
	text += document.getElementById('11/10').style.background+"\n";
	text += document.getElementById('11/11').style.background+"\n";
	text += document.getElementById('11/12').style.background+"\n";
	text += document.getElementById('11/13').style.background+"\n";
	text += document.getElementById('11/14').style.background+"\n";
	text += document.getElementById('11/15').style.background+"\n";
	text += document.getElementById('11/16').style.background+"\n";
	text += document.getElementById('11/17').style.background+"\n";
	text += document.getElementById('11/18').style.background+"\n";
	text += document.getElementById('11/19').style.background+"\n";
	text += document.getElementById('11/20').style.background+"\n";
	text += document.getElementById('11/21').style.background+"\n";
	text += document.getElementById('11/22').style.background+"\n";
	text += document.getElementById('11/23').style.background+"\n";
	text += document.getElementById('11/24').style.background+"\n";
	text += document.getElementById('11/25').style.background+"\n";
	text += document.getElementById('11/26').style.background+"\n";
	text += document.getElementById('11/27').style.background+"\n";
	text += document.getElementById('11/28').style.background+"\n";
	text += document.getElementById('11/29').style.background+"\n";
	text += document.getElementById('11/30').style.background+"\n";
	text += document.getElementById('12/1').style.background+"\n";
	text += document.getElementById('12/2').style.background+"\n";
	text += document.getElementById('12/3').style.background+"\n";
	text += document.getElementById('12/4').style.background+"\n";
	text += document.getElementById('12/5').style.background+"\n";
	text += document.getElementById('12/6').style.background+"\n";
	text += document.getElementById('12/7').style.background+"\n";
	text += document.getElementById('12/8').style.background+"\n";
	text += document.getElementById('12/9').style.background+"\n";
	text += document.getElementById('12/10').style.background+"\n";
	text += document.getElementById('12/11').style.background+"\n";
	text += document.getElementById('12/12').style.background+"\n";
	text += document.getElementById('12/13').style.background+"\n";
	text += document.getElementById('12/14').style.background+"\n";
	text += document.getElementById('12/15').style.background+"\n";
	text += document.getElementById('12/16').style.background+"\n";
	text += document.getElementById('12/17').style.background+"\n";
	text += document.getElementById('12/18').style.background+"\n";
	text += document.getElementById('12/19').style.background+"\n";
	text += document.getElementById('12/20').style.background+"\n";
	text += document.getElementById('12/21').style.background+"\n";
	text += document.getElementById('12/22').style.background+"\n";
	text += document.getElementById('12/23').style.background+"\n";
	text += document.getElementById('12/24').style.background+"\n";
	text += document.getElementById('12/25').style.background+"\n";
	text += document.getElementById('12/26').style.background+"\n";
	text += document.getElementById('12/27').style.background+"\n";
	text += document.getElementById('12/28').style.background+"\n";
	text += document.getElementById('12/29').style.background+"\n";
	text += document.getElementById('12/30').style.background+"\n";
	text += document.getElementById('12/31').style.background+"\n";
	
	const filename = "./exportedgrid.txt"
	
	 var element = document.createElement('a');
	 element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	 element.setAttribute('download', filename);
	 
	 element.style.display = 'none';
	 document.body.appendChild(element);
	 
	 element.click();
	 
	 document.body.removeChild(element);
}