var Terminal = require('./termlib.js');
var $ = require('jquery');


var firstTerm_A = new Terminal({
  handler: firstTermHandler_A,
  greeting: "Welcome to level 1. \nEnter 'help' to see your toolbelt for this level.\nWhen ready, enter '#open' to attempt a submission.",
  textColor: "white",
  crsrBlockMode: false,
});

var firstTerm_B = new Terminal({
  handler: firstTermHandler_B,
  greeting: "Level 1. Type '#submit' to run. \nInsert code here:",
  initHandler: reloadTitle,
  ps: "/$",
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

var start = function(){
  context.fillRect(100,100,50,50);
};

var placeGoal = function(){
  context.fillRect(475, 0, 107, 50);
};

var placeStart = function(){
  context.fillRect(curX, curY, 25, 25);
};

placeStart();
placeGoal();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LEVEL 2:



var secondTerm_A = new Terminal({
  handler: secondTermHandler_A,
  greeting: "Welcome to level 2.\nEnter 'help' to see your toolbelt for this level.\nWhen ready, enter '#open' to attempt a submission.",
  textColor: "red",
  crsrBlockMode: false
});


var secondTerm_B = new Terminal({
  handler: secondTermHandler_B,
  greeting: "Level 2. Type '#submit' to run. \nInsert code here:",
  ps: "/$"
});

var helpPage2 = [
  "~>Well, well, well.. nice job!",
  "~>Variables available:",
  "~>   x = 3;",
  "~>   y = 7;",
  "~>   z = 5;",
  "~>   q = (x + y) * (z + z);",
  "~>Remember: Enter 'reset' at any time to reset terminal."
];

function secondTermHandler_A(){
  var line_2A = this.lineBuffer;
  if (line_2A === "#open"){
    secondTerm_A.reset();
    secondTerm_A.ps = "/$";
    secondTerm_A.textColor = "#7FFF00";
    secondTerm_A.close();
    secondTerm_B.open();
  } else {
    this.newLine();
  }
  if (line_2A === "help") {
    this.write(helpPage2);
  }
  else if (line_2A==="reset"){
    this.reset();
  }
  this.prompt();
}

function secondTermHandler_B(){
  var line_2B = this.lineBuffer;
  console.log(line_2B);
  var codeInj2 = this.codeInj2 || "";
  if (line_2B === "reset"){
    this.reset();
  } else if (line_2B === "#submit") {
    evaluate(codeInj2, 2);
    this.codeInj2 = "";
  } else {
    this.codeInj2 += line_2B;
  }
  this.prompt();
}




function evaluate(block, level){
  console.log("BLOCK", block);
  var codeStr = block.replace(/ +?/g, '');
  if (level === 1) {
    if (codeStr == "x=14;" || codeStr == "14" || codeStr == "x=14"){
      console.log("we made it");
      this.codeStr = "";
      firstTerm_B.close();
      firstTerm_A.close();
      secondTerm_A.open();
    } else {
      console.log("were in the else");
      this.codeStr = "";
      firstTerm_B.reset();
      firstTerm_B.ps = ">";
      firstTerm_B.textColor = "#ffffff";
      firstTerm_B.close();
      firstTerm_A.open();
      firstTerm_A.write("Sorry, incorrect. Try submitting x and it's value");
      firstTerm_A.newLine();
    }
  } else if (level === 2){
    if (codeStr == "100" || codeStr == "q=100" || codeStr == "q=100;"){
      console.log("were ready for level 3");
      this.codeStr = "";
      secondTerm_A.close();
      secondTerm_B.close();
      thirdTerm_A.open();
    } else {
      console.log('were in level 2s else');
      this.codeStr = "";
      secondTerm_B.reset();
      secondTerm_B.ps = ">";
      secondTerm_B.textColor = "#ffffff";
      secondTerm_B.close();
      secondTerm_A.open();
      secondTerm_A.write("Sorry, incorrect. Wonder what q is..");
      secondTerm_A.newLine();
    }
  } else if (level === 3){
    if (codeStr === "backwards" || codeStr === "backwards;" || codeStr === "password = backwards;" || codeStr === "password = backwards;"){
      console.log("were ready for level 4");
    } else {
      console.log("were in 3's else");
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LEVEL 3:


var thirdTerm_A = new Terminal({
  handler: thirdTermHandler_A,
  greeting: "Welcome to level 3.\nEnter 'help' to see your toolbelt for this level.\nWhen ready, enter '#open' to attempt a submission.",
  textColor: "yellow",
  crsrBlockMode: false
});


var thirdTerm_B = new Terminal({
  handler: thirdTermHandler_B,
  greeting: "Level 3. Type '#submit' to run. \nInsert code here:",
  ps: "/$"
});

var helpPage3 = [
  "~>Hey you're really getting the hang of this!",
  "~>Variables available:",
  "~>",
  "~>",
  "~> None? What? Have you been wondering about the map above you?",
  "~>Enter 'up'.",
  "~>Do you see what happens, Larry?",
  "~>Remember: Enter 'reset' at any time to reset terminal."
];

function thirdTermHandler_A(){
  var line_2A = this.lineBuffer;
  if (line_2A === "#open"){
    thirdTerm_A.reset();
    thirdTerm_A.ps = "/$";
    thirdTerm_A.textColor = "#7FFF00";
    thirdTerm_A.close();
    thirdTerm_B.open();
  } else {
    this.newLine();
  }
  if (line_2A === "help") {
    this.write(helpPage3);
  }
  else if (line_2A==="reset"){
    this.reset();
  }
  this.prompt();
}

function thirdTermHandler_B(){
  var line_2B = this.lineBuffer;
  var codeInj2 = this.codeInj2 || "";
  if (line_2B == "#submit") {
    evaluate(codeInj2, 3).bind(this);
    this.codeInj2 = "";
    thirdTerm_B.reset();
    thirdTerm_B.ps = ">";
    thirdTerm_B.textColor = "#ffffff";
    thirdTerm_B.close();
    thirdTerm_A.open();
  } else {
    this.newLine();
  }
  if (line_2B == "reset") {
    this.reset();
  } else {
    this.codeInj2 += line_2B;
  }
  this.prompt();
}

window.Terminal = Terminal;
window.jQuery = $;
window.$ = $;
