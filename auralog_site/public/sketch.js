let x,y,avgBPM,avgPSO2,threshold;
let cam;
let ye, bl, pu, ma, pi;


var socket = io.connect(window.location.origin);

// get head location on FaceOSC socket
socket.on('mysocket', function(data) {
    console.log(data);
    console.log(data[3][1],data[3][2]);
    x = data[3][1];
    y = data[3][2];
    
});

// get sensor data from GSR and pulse sensor
socket.on('sensor', function (data) {
  let myarray = data.split(',');
  avgBPM = myarray[0];
  avgPSO2 = myarray[1];
  threshold = myarray[2];
});

function preload() {

  }
  
function setup(){
    createCanvas(displayWidth, displayHeight);

    // create video feed
    cam = createCapture(VIDEO);
    cam.size(displayWidth, displayHeight);
    cam.hide();

    // colors
    ye = color('rgba(245,230,89,0.5)');
    bl = color('rgba(126,206,226,0.5');
    pu = color('rgba(139,51,232,0.5)');
    ma = color('rgba(186,4,89,0.5');
    pi = color('rgba(254,98,147,0.5');
  }
  
  function draw(){
    clear();
    image(cam, 0, 0, width, height);
    
    noStroke();
    
    // // draw shape for BPM
    // if (avgBPM < 60) {
    //   fill(ye);
    // } else if (avgBPM < 70) {
    //   fill(bl);
    // } else if (avgBPM < 80) {
    //   fill(pu);
    // } else if (avgBPM < 90) {
    //   fill(ma);
    // } else {
    //   fill(pi);
    // }
    // triangle(x, y, 0, displayHeight, displayWidth, displayHeight);

    // // draw shape for PSO2
    // if (avgPSO2 > 2.5) {
    //   fill(ye);
    // } else if (avgPSO2 > 2.2) {
    //   fill(bl);
    // } else if (avgPSO2 > 1.9) {
    //   fill(pu);
    // } else if (avgPSO2 > 1.6) {
    //   fill(ma);
    // } else {
    //   fill(pi);
    // }
    // quad(0, 0, 0, displayHeight, x, y, x, 0);

    // //draw shape for GSR
    // if (threshold < 400) {
    //   fill(ma);
    // } else if (threshold < 450) {
    //   fill(pi);
    // } else if (threshold < 500) {
    //   fill(ye);
    // } else if (threshold < 550) {
    //   fill(bl);
    // } else {
    //   fill(pu);
    // }
    // quad(x, 0, x, y, displayWidth, displayHeight, displayWidth, 0);

  }