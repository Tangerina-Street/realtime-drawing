noseX = 0;
noseY = 0;
difference = 0;
rightWrist=0;
leftWrist=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,120);

    canvas = createCanvas(550,500);
    canvas.position(800,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function draw(){
    background('#c7ebd9');
   document.getElementById("square-side").innerHTML="Width and height of the square will be: "+difference+"px";
    fill("#04b7d6");
    stroke("#04b7d6");
    square(noseX,noseY,difference);
}
function gotPoses(results){
if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX - "+noseX+"noseY - "+noseY);
    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    difference = floor(leftWrist - rightWrist);
    console.log("left wrist - "+leftWrist+"right wrist - "+rightWrist+"difference - "+difference);
}
}