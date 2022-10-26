
let a 
function linkToPage(link){
	window.open(link.value);
}

function openLink(link){
	window.location = link;
}

function changeClasses(thisId, toId){
	document.getElementbyId(thisId).changeClass = toId;
}


/*Audio Playing*/

let pingSound = new Audio('Resource/ButtonPress.mp3');

function playAudio(audioFile, num){
	audioFile.volume = num;
	if(audioFile.paused){
		audioFile.play();
	}
	else{
		audioFile.currentTime = 0
	}

}

let musicSound = new Audio('Resource/ADoLfSE.mp3');

function playMusic(){
	if(musicSound.paused){
		musicSound.play();
	}
	else{
		musicSound.pause();
	}
}

/*Audio Playing */


let wow = 4;
let cool = 5;

let simpleMaths = (letter, word) =>{
	let a = letter;
	let b = word;
	console.log(a + ' ' + b);
}

simpleMaths(wow, cool);




/*DOM Manipulation*/

let switchElementClass = (elementSelect, removeClass, toClass) =>{
	elementSelect.classList.remove(removeClass);
	elementSelect.classList.add(toClass);
}

let playa = document.getElementById("test");
switchElementClass(playa, 'for_headers','arttext');

/*DOM Manipulation*/




/*Web Animation*/

const picturedisplay = document.querySelector('.makethirdbox');

const observer = new IntersectionObserver(entries => {
	console.log("worked");
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log("worked2");
			picturedisplay.style.animationPlayState = 'running';
			observer.unobserve(entry.target);
		}
	})


})

observer.observe(picturedisplay);

/*Web Animation*/