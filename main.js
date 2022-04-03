var prediction = "";
var prediction1 = "";


Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>"
    });
}

console.log("ml5 version : ", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/97xT7vJVP/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded")
}

function result(){
    var synth = window.speechSynthesis
    speak_data_1= "My first prediction is " + prediction;
    speak_data_2= "My second prediction is " + prediction1;

    var utter_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utter_this);
}