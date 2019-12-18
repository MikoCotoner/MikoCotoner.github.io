var sample = new Audio();
sample.src = "audio/samples/sample1.mp3"
document.getElementById("playButton").onclick = function(){playSample()};

function playSample(){
		if (sample.paused){
			sample.play();
			moveProgressBar();
		}	
	}

function playInstrument(instrument){
	audio = new Audio();
	audio.src = "audio/instruments/" + instrument;
	audio.play();
}

var i = 0;
function moveProgressBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var margin = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (margin >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        margin += 0.78;
        elem.style.marginLeft = margin + "%";
      }
    }
  }
}
