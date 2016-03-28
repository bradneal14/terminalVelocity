
var firstTerm_A = new Terminal({
  handler: firstTermHandler_A,
  greeting: "Welcome to level 1. \nEnter 'help' to see your toolbelt for this level.\nWhen ready, enter '#open' to attempt a submission.",
  textColor: "white",
  crsrBlockMode: false,
});

var firstTerm_B = new Terminal({
  handler: firstTermHandler_B,
  greeting: "Level 1. Type '#submit' to run. \nInsert code here:",
  initHandler: reloadTitle
});

var reloadTitle = function(){
  this.reset();
};

$( "#begin" ).click(function() {
  firstTerm_A.open();
});

function firstTermHandler_B(){
  var line_B = this.lineBuffer;
  console.log("LINE", line_B);
  var codeInj = this.codeInj || "";
  console.log("BEFORE ANYTHING CODEINJ = ", codeInj);
  if (line_B == "reset") {
    this.reset();
    codeInj = "";
  } else if (line_B == "#submit") {
    console.log("AFTER SUBMIT CODEINJ =", codeInj);
    evaluate(codeInj, 1);
    this.codeInj = "";
  } else {
    this.codeInj = codeInj + line_B;
  }
  this.prompt();
}

function firstTermHandler_A() {
 var line_A = this.lineBuffer;
 if (line_A == "#open"){
   firstTerm_A.reset();
   firstTerm_A.ps = "/$";
   firstTerm_A.textColor = "#7FFF00";
   firstTerm_A.close();
   firstTerm_B.open();
 } else {
   this.newLine();
 }
 if (line_A == "help") {
   this.write(helpPage1);
 }
 else if (line_A=="reset"){
   this.reset();
 }
 else if (line_A=="left"){
   left();
 }
 else if (line_A=="up"){
   up();
 }
 else if (line_A=="down"){
   down();
 }
 else if (line_A=="big"){
   start();
 }
 else if(line_A =="circle"){
   placeCircle();
 }
 else if(line_A == "right"){
   right();
 }
 else if(line_A =="erase"){
   eraseCircle();
 }
 else if (line_A != "") {
   this.write("You typed: "+line_A);
 }
 this.prompt();
}


var helpPage1 = [
  "~>Wise decision..",
  "~>This toolbelt will be one of your most \n~>valuable resources in this journey.",
  "~>",
  "~>Variables available:",
  "~>   x = 14;",
  "~>",
  "~>Remember: Enter 'reset' at any time to reset terminal.",
  "~>Have fun!"
];


var myCanvas = document.getElementById("canvas");
var context = myCanvas.getContext("2d");

var curX = 300;
var curY = 50;

var placeCircle = function(){
  context.beginPath();
  context.strokeStyle="#ff0000";
  context.arc(75,105,70,0,2*Math.PI);
  context.stroke();
};

var eraseCircle = function(){
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
};

var nextLevel = function(){
  console.log("next level");
  myCanvas.width = myCanvas.width;
  myCanvas.height = myCanvas.height;
  context.fillStyle = "#FF0000";
  context.fillRect(475, 0, 107, 50);
  context.fillRect(curX, curY, 25, 25);
};


var left = function(){
  if (curX>0){
    curX -= 25;
  }
  myCanvas.width = myCanvas.width;
  myCanvas.height = myCanvas.height;
  context.fillRect(475, 0, 107, 50);
  context.fillRect(curX, curY, 25, 25);
  if (curX > 450 && curY < 50){
    nextLevel();
  }
};

var right = function(){
  if (curX<(582-30)){
    curX += 25;
  }
  myCanvas.width = myCanvas.width;
  myCanvas.height = myCanvas.height;
  context.fillRect(475, 0, 107, 50);
  context.fillRect(curX, curY, 25, 25);
  if (curX > 450 && curY < 50){
    nextLevel();
  }
};

var up = function(){
  if (curY>(0)){
    curY -= 25;
  }
  myCanvas.width = myCanvas.width;
  myCanvas.height = myCanvas.height;
  context.fillRect(475, 0, 107, 50);
  context.fillRect(curX, curY, 25, 25);
  if (curX > 450 && curY < 50){
    nextLevel();
  }
};

var down = function(){
  if (curX<(375)){
    curY += 25;
  }
  myCanvas.width = myCanvas.width;
  myCanvas.height = myCanvas.height;
  context.fillRect(475, 0, 107, 50);
  context.fillRect(curX, curY, 25, 25);
  if (curX > 450 && curY < 50){
    nextLevel();
  }
};


var placeGoal = function(){
  context.fillRect(475, 0, 107, 50);
};

var placeStart = function(){
  context.fillRect(curX, curY, 25, 25);
};

placeStart();
placeGoal();
