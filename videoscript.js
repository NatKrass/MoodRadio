/*Script for setting up play, pause, tags , volume, fullscreen, seekbar and heart buttons*/

window.onload = function() {

	//video
	var video = document.getElementsByClass("video");

	//Buttons
	var playButton = document.getElementById("playpause");
	var volumeBar = document.getElementById("volume-rocker");
	var fullScreen = document.getElementById("full-screen");
	var tagsButton = document.getElementById("tag"); 
	var likeButton = document.getElementById("like");

	//Sliders
	var seekBar = document.getElementsByClass("progress-bar");

	//Event listener for play / pause
	playButton.addEventListener("click", function() {
		if(video.paused == true) {
			//Play video
			video.play();

			//update the button icon to "pause"
			playButton.innerHTML = "<span class="glyphicon glyphicon-pause" aria-hidden="true"></span>";
		}else{
			//pause the video
			video.pause();

			//update the button to "play"
			playButton.innerHTML = "<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span>";
		}
	});

	//Event Listener for Full Screen
	fullScreen.addEventListener("click", function () {
		if(video.requestFullscreen) {
			video.requestFullscreen();
		}else if(video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); //Firefox
		}else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); //Chrome and Safari
		}
	});

	//Event Listener for the seek bar
	seekBar.addEventListener("change", function () {
		//calculate the new time
		var time = video.duration * (seekBar.value / 100);

		//update the video time
		video.currentTime = time;
	});

	//update the seek bar as the video plays
	video.addEventListener("timeupdate", function () {
		//calculate slider value
		var value = (100 / video.duration) * video.currentTime;

		//update the slider value
		seekBar.value = value;
	});

	//pause the video when the slider handle is dragged
	seekBar.addEventListener("mousedown", function () {
		video.pause();
	});

	//play the video when the slider handle is dropped
	seekBar.addEventListener("mouseup", function () {
		video.play();
	});

	//Event Listener for the volume bar
	volumeBar.addEventListener("change", function () {
		//update the video volume
		video.volume = volumeBar.value;
	});
}