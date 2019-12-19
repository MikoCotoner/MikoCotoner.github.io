document.onkeydown = function(event) {
    var x = event.which || event.keyCode;
    // 1234567890
    if (x == 49) { // 1
        playAudio1();
    }
    else if(x == 50){ // 2
        playAudio2();
    }
    else if(x == 51){ // 3
        playAudio3();
    }
    else if(x == 52){// 4
        playAudio4();
    }
    else if(x == 53){// 5
        playAudio5();
    }
    else if(x == 54){// 6
        playAudio6();
    }
    else if(x == 55){// 7
        playAudio7();
    }
    else if(x == 56){// 8
        playAudio8();
    }
    else if(x == 57){// 9
        playAudio9();
    }
    else if(x == 48){// 0
        playAudio0();
    }
    // QWERTYUIOP
    else if (x == 81) { // Q
        playAudioQ();
    }
    else if(x == 87){ // W
        playAudioW();
    }
    else if(x == 69){ // E
        playAudioE();
    }
    else if(x == 82){// R
        playAudioR();
    }
    else if(x == 84){// T
        playAudioT();
    }
    else if(x == 89){// Y
        playAudioY();
    }
    else if(x == 85){// U
        playAudioU();
    }
    else if(x == 73){// I
        playAudioI();
    }
    else if(x == 79){// O
        playAudioO();
    }
    else if(x == 80){// P
        playAudioP();
    }
    //ASDFGHJKL
    else if (x == 65) { // A
        playAudioA();
    }
    else if(x == 83){ // S
        playAudioS();
    }
    else if(x == 68){ // D
        playAudioD();
    }
    else if(x == 70){// F
        playAudioF();
    }
    else if(x == 71){// G
        playAudioG();
    }
    else if(x == 72){// H
        playAudioH();
    }
    else if(x == 74){// J
        playAudioJ();
    }
    else if(x == 75){// K
        playAudioK();
    }
    else if(x == 76){// L
        playAudioL();
    }
    //ZXCVBNM
    else if(x == 90){// Z
        playAudioZ();
    }
    else if(x == 88){ // X
        playAudioX();
    }
    else if(x == 67){// C
        playAudioC();
    }
    else if(x == 86){// V
        playAudioV();
    }
    else if(x == 66){// B
        playAudioB();
    }
    else if(x == 78){// N
        playAudioN();
    }
    else if(x == 77){// M
        playAudioM();
    }
}

//1234567890
function playAudio1(){
    var a = new Audio("audio/instruments/pop/pop1.mp3"); 
    a.play();
}

function playAudio2(){
    var a = new Audio("audio/instruments/pop/pop2.mp3"); 
    a.play();
}

function playAudio3(){
    var a = new Audio("audio/instruments/pop/pop3.mp3"); 
    a.play();
}

function playAudio4(){
    var a = new Audio("audio/instruments/pop/pop4.mp3"); 
    a.play();
}

function playAudio5(){
    var a = new Audio("audio/instruments/pop/pop5.mp3"); 
    a.play();
}

function playAudio6(){
    var a = new Audio("audio/instruments/pop/pop6.mp3"); 
    a.play();
}

function playAudio7(){
    var a = new Audio("audio/instruments/pop/pop7.mp3"); 
    a.play();
}

function playAudio8(){
    var a = new Audio("audio/instruments/pop/pop8.mp3"); 
    a.play();
}

function playAudio9(){
    var a = new Audio("audio/instruments/pop/pop9.mp3"); 
    a.play();
}

function playAudio0(){
    var a = new Audio("audio/instruments/pop/pop10.mp3"); 
    a.play();
}

//QWERTYUIOP
function playAudioQ(){
    var a = new Audio("audio/instruments/rap/rap1.mp3"); 
    a.play();
}

function playAudioW(){
    var a = new Audio("audio/instruments/rap/rap2.mp3"); 
    a.play();
}

function playAudioE(){
    var a = new Audio("audio/instruments/rap/rap3.mp3"); 
    a.play();
}

function playAudioR(){
    var a = new Audio("audio/instruments/rap/rap4.mp3"); 
    a.play();
}

function playAudioT(){
    var a = new Audio("audio/instruments/rap/rap5.mp3"); 
    a.play();
}

function playAudioY(){
    var a = new Audio("audio/instruments/rap/rap6.mp3"); 
    a.play();
}

function playAudioU(){
    var a = new Audio("audio/instruments/rap/rap7.mp3"); 
    a.play();
}

function playAudioI(){
    var a = new Audio("audio/instruments/rap/rap8.mp3"); 
    a.play();
}

function playAudioO(){
    var a = new Audio("audio/instruments/rap/rap1.mp3"); 
    a.play();
}

function playAudioP(){
    var a = new Audio("audio/instruments/rap/rap2.mp3"); 
    a.play();
}

//ASDFGHJKL
function playAudioA(){
    var a = new Audio("audio/instruments/rock/rock1.mp3"); 
    a.play();
}

function playAudioS(){
    var a = new Audio("audio/instruments/rock/rock2.mp3"); 
    a.play();
}

function playAudioD(){
    var a = new Audio("audio/instruments/rock/rock3.mp3"); 
    a.play();
}

function playAudioF(){
    var a = new Audio("audio/instruments/rock/rock1.mp3"); 
    a.play();
}

function playAudioG(){
    var a = new Audio("audio/instruments/rock/rock5.mp3"); 
    a.play();
}

function playAudioH(){
    var a = new Audio("audio/instruments/rock/rock6.mp3"); 
    a.play();
}

function playAudioJ(){
    var a = new Audio("audio/instruments/rock/rock7.mp3"); 
    a.play();
}

function playAudioK(){
    var a = new Audio("audio/instruments/rock/rock8.mp3"); 
    a.play();
}

function playAudioL(){
    var a = new Audio("audio/instruments/rock/rock1.mp3"); 
    a.play();
}

//ZXCVBNM
function playAudioZ(){
    var a = new Audio("audio/instruments/meme/meme1.mp3"); 
    a.play();
}

function playAudioX(){
    var a = new Audio("audio/instruments/meme/meme2.mp3"); 
    a.play();
}

function playAudioC(){
    var a = new Audio("audio/instruments/meme/meme3.mp3"); 
    a.play();
}

function playAudioV(){
    var a = new Audio("audio/instruments/meme/meme4.mp3"); 
    a.play();
}

function playAudioB(){
    var a = new Audio("audio/instruments/meme/meme5.mp3"); 
    a.play();
}

function playAudioN(){
    var a = new Audio("audio/instruments/meme/meme6.mp3"); 
    a.play();
}

function playAudioM(){
    var a = new Audio("audio/instruments/meme/meme7.mp3"); 
    a.play();
}