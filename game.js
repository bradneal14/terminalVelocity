var Terminal = require('./termlib.js');
var $ = require('jquery');


var zeroTerm_A = new Terminal({
  handler: zeroTermHandler_A,
  greeting: "Thanks for checking out Terminal Velocity by Brad Neal. \n \nUnfortuneately we're having some technical difficulties right now. \nMy server crashed and took the game down with it, but all of the code is written and ready to go. \nIt's still possible for you to play, but you'll have to hack yourself together a basic mainframe first. \nI can show you how; type '#begin' and then press Enter to access my console remotely.",
  textColor: "white",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
});

function zeroTermHandler_A(){
  var line_0A = this.lineBuffer;
  if (line_0A != "#begin"){
    this.newLine();
    this.type("Command not recognized.");
  } else {
    window.setTimeout(function(){zeroTerm_A.type("."); zeroTerm_A.newLine();}, 500);
    window.setTimeout(function(){zeroTerm_A.type("> .."); zeroTerm_A.newLine();}, 1500);
    window.setTimeout(function(){zeroTerm_A.type("> ...");}, 2500);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 2600);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 2700);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 2800);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 2900);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 3000);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 3100);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 3150);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 3200);
    window.setTimeout(function(){zeroTerm_A.type(".");}, 3250);
    window.setTimeout(function(){zeroTerm_A.close();}, 3600);
    window.setTimeout(function(){zeroTerm_B.open();}, 3600);
  }
  this.prompt();
}

var zeroTerm_B = new Terminal({
  handler: zeroTermHandler_B,
  greeting: ">\n>\n>\n>\n>\n>\n>\n>\n>\nAwesome. With a litle luck we may actually be able to pull this off. \nMy server is programmed to my custom settings which are a little bit unconventional. \nI use '#open' to enter into my server-terminal. \nTry it now and let's see if we can get the ball rolling.",
  textColor: "white",
  termDiv:'main',
  crsrBlockMode: false,
  cols:320,
  rows:150,
});

function zeroTermHandler_B(){
  var line_0B = this.lineBuffer;
  console.log(line_0B);
  if (line_0B != "#open"){
    this.newLine();
    this.type("Command not recognized.");
  } else {
    window.setTimeout(function(){zeroTerm_B.type("."); zeroTerm_B.newLine();}, 1000);
    window.setTimeout(function(){zeroTerm_B.type("> .."); zeroTerm_B.newLine();}, 2000);
    window.setTimeout(function(){zeroTerm_B.type("> ...");}, 2500);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 2600);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 2700);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 2800);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 2900);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 3000);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 3100);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 3150);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 3200);
    window.setTimeout(function(){zeroTerm_B.type("."); zeroTerm_B.textColor = "#7FFF00";}, 3250);
    window.setTimeout(function(){zeroTerm_B.type(".");}, 3250);
    window.setTimeout(function(){zeroTerm_B.close();}, 3600);
    window.setTimeout(function(){zeroTerm_C.open();}, 3600);
  }
  this.prompt();
}

var zeroTerm_C = new Terminal({
  handler: zeroTermHandler_C,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\nExcellent. We're in. \nYou can tell when we're in the server-terminal because it uses green text. \nYou can always enter this server-terminal by using that same '#open' command. \nFrom here, we will be able to enter code which goes directly to my database. \nThe '#' symbol is a special symbol that I use to communicate with the server-terminal. \nLike I mentioned earlier, we may be able to pull this off, but it won't be easy. \nType '#continue' to learn about the next steps.",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
});

function zeroTermHandler_C(){
  var line_0C = this.lineBuffer;
  if (line_0C != "#continue"){
    this.newLine();
    this.type("Command not recognized.");
  } else {
    window.setTimeout(function(){zeroTerm_C.type(".");}, 500);
    window.setTimeout(function(){zeroTerm_C.type(".");}, 600);
    window.setTimeout(function(){zeroTerm_C.type(".");}, 700);
    window.setTimeout(function(){zeroTerm_C.type(".");}, 750);
    window.setTimeout(function(){zeroTerm_C.type(".");}, 800);
    window.setTimeout(function(){zeroTerm_C.close();}, 800);
    window.setTimeout(function(){zeroTerm_D.open();}, 800);
  }
  this.prompt();
}

var zeroTerm_D = new Terminal({
  handler: zeroTermHandler_D,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\nBoom.\nIf you couldn't tell, we are still in the server-terminal. \nWe will always use '#open' to get into the server-terminal. \nFrom inside the code terminal we will be able to enter real JavaScript. \nThe JavaScript we enter will (hopefully) be enough to get this game up and running. \nOnce in this server-terminal, the compiler expects the user to enter pure JavaScript. \nTo get out of the server-terminal we will have to use another one of my custom commands; '#submit'. \n'#submit' tells the compiler that we have finished writing our JavaScript.\nThink of it like a period, marking the end of a sentence. \nWhen the server receives the '#submit' command, it will execute the JavaScript which came before the '#submit'.\n'#submit' is not JavaScipt, but is instead a custom command I created for personal server maintence.\nThe '#submit' command tells the server that we would like our code to be logged to the server. \nTry it now by typing '#submit' and pressing enter.",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
});

function zeroTermHandler_D(){
  var line_0D = this.lineBuffer;
  if (line_0D != "#submit"){
    this.newLine();
    this.type("Command not recognized.");
  } else {
    window.setTimeout(function(){zeroTerm_D.type("."); zeroTerm_D.textColor="white";}, 500);
    window.setTimeout(function(){zeroTerm_D.type(".");}, 600);
    window.setTimeout(function(){zeroTerm_D.type(".");}, 700);
    window.setTimeout(function(){zeroTerm_D.type(".");}, 750);
    window.setTimeout(function(){zeroTerm_D.type(".");}, 800);
    window.setTimeout(function(){zeroTerm_D.close();}, 800);
    window.setTimeout(function(){zeroTerm_E.open();}, 800);
  }
  this.prompt();
}

var zeroTerm_E = new Terminal({
  handler: zeroTermHandler_E,
  greeting: "Sweet.. We just might have a shot afterall.\nOkay, now lets run through the whole thing and see what it will really be like.\nEnter '#open' to get back into the server-terminal \nOnce inside, type 'server.status();' to see the server's status and then press enter. \nThe punctuation is important; 'server.status();'\nThats 'server' (dot) 'status' followed by a set of empty parenthesis and a semi-colon.\nThe quotes are not necessary.\nOnce you type that command press enter. On the next line, type '#submit' \nThe '#submit' command will tell the server we are done writing JavaScript.\nThis will run our status check on the server and exit the server-terminal. \nIt's risky to spend too much time in the server-terminal so try and be quick if you can. \nRemember, if things get messy, you can type 'reset' followed by enter to reset the current session.\n>\nTo recap:\n1. type '#open' here and press enter. Wait to be connected to the server-terminal.\n2. Once inside, type server.status(); and press enter.\n3. On the next line, type '#submit' and press enter.\n>\nOnce you are inside the server-terminal we will have no way of communicating until you '#submit'. \nHope to see you back here soon.",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
  textColor: "white"
});

function zeroTermHandler_E(){
  var line_E = this.lineBuffer;
  if (line_E != "#open") {
    this.newLine();
    this.type("Command not recognized.");
  } else {
    window.setTimeout(function(){zeroTerm_E.type("."); zeroTerm_E.newLine();}, 1000);
    window.setTimeout(function(){zeroTerm_E.type("> .."); zeroTerm_E.newLine();}, 2000);
    window.setTimeout(function(){zeroTerm_E.type("> ...");}, 2500);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 2600);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 2700);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 2800);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 2900);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 3000);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 3100);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 3150);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 3200);
    window.setTimeout(function(){zeroTerm_E.type("."); zeroTerm_E.textColor = "#7FFF00";}, 3250);
    window.setTimeout(function(){zeroTerm_E.type(".");}, 3250);
    window.setTimeout(function(){zeroTerm_E.close();}, 3600);
    window.setTimeout(function(){zeroTerm_F.open();}, 3600);
  }
  this.prompt();
}

var zeroTerm_F = new Terminal({
  handler: zeroTermHandler_F,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>\n",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
  textColor: "#7FFF00"
});

function zeroTermHandler_F(){
  var line_F = this.lineBuffer;
  console.log("LINE", line_F);
  var codeInj0 = this.codeInj0 || "";
  console.log("CODE BEFORE ANYTHING", this.codeInj0);
  if (line_F == "reset") {
    this.reset();
  }else if (line_F == "#submit") {
    evaluate(codeInj0, 0);
    this.codeInj0 = "";
  } else {
    this.codeInj0 = codeInj0 + line_F;
    console.log("CODE AFTER FIRE", this.codeInj0);
  }
  this.prompt();
}



zeroTerm_A.open();

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

var meltDown = new Terminal({
  textColor: "white",
  handler: meltDownHandler,
  greeting: "/$ ERROR--SYSTEM_MELTDOWN! (v1.0.1.1) \n>\n>\n>\n",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
  initHandler: meltDownFunction
});


function meltDownFunction(){
  window.setTimeout(function(){meltDown.type("."); meltDown.newLine();}, 2000);
  window.setTimeout(function(){meltDown.type("> .."); meltDown.newLine();}, 2100);
  window.setTimeout(function(){meltDown.type("> ...");}, 2200);
  window.setTimeout(function(){meltDown.textColor = "red"; meltDown.type("> ERROR");}, 2200);
  window.setTimeout(function(){meltDown.newLine(); meltDown.type(".");}, 2500);
  window.setTimeout(function(){meltDown.newLine(); meltDown.type(".");}, 2800);
  window.setTimeout(function(){meltDown.newLine(); meltDown.type(".");}, 3300);
  window.setTimeout(function(){meltDown.newLine(); meltDown.type(">>>>>>>Access DENIED<<<<<<<");}, 3350);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3450);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3500);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3550);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3600);
  window.setTimeout(function(){meltDown.type(">>>>>>>GAME OVER<<<<<<<"); meltDown.newLine();}, 3600);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3700);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3800);
  window.setTimeout(function(){meltDown.type("<<<<<<<YOU LOOSE!>>>>>>>"); meltDown.newLine();}, 3600);
  window.setTimeout(function(){meltDown.close();}, 10000);
  window.setTimeout(function(){zeroTerm_A.open();}, 10000);
}
function meltDownHandler(){
  var line_MD = this.lineBuffer;
}


function evaluate(block, level){
  console.log("BLOCK", block);
  var codeStr = block.replace(/ +?/g, '');
  if (level === 0){
    if (codeStr != "server.status();"){
      zeroTerm_F.close();
      meltDown.open();
    } else {
      window.setTimeout(function(){zeroTerm_F.type("."); zeroTerm_F.newLine();}, 2000);
      window.setTimeout(function(){zeroTerm_F.type("> .."); zeroTerm_F.newLine();}, 2100);
      window.setTimeout(function(){zeroTerm_F.type("> ...");}, 2200);
      window.setTimeout(function(){zeroTerm_F.type("> Initializing");}, 2200);
      window.setTimeout(function(){zeroTerm_F.type(".");}, 2500);
      window.setTimeout(function(){zeroTerm_F.type(".");}, 2800);
      window.setTimeout(function(){zeroTerm_F.type(".");}, 3300);
      window.setTimeout(function(){zeroTerm_F.newLine(); zeroTerm_F.type(">>>>>>>Access Granted<<<<<<<");}, 3350);
      window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 3450);
      window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 3500);
      window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 3550);
      window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 3600);
      window.setTimeout(function(){zeroTerm_F.type(">>>>>>>GAME OVER<<<<<<<"); zeroTerm_F.newLine();}, 3600);
      window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 3700);
      window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 3800);
      window.setTimeout(function(){zeroTerm_F.type("<<<<<<<YOU WIN!>>>>>>>"); zeroTerm_F.newLine();}, 3600);
      window.setTimeout(function(){zeroTerm_F.close();}, 15000);
      window.setTimeout(function(){zeroTerm_A.open();}, 15000);


    }
  }
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
