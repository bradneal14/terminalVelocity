var Terminal = require('./termlib.js');
var $ = require('jquery');
var hash = require('./hash.js');

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
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3450);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3500);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3550);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3600);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3700);
  window.setTimeout(function(){meltDown.type(">"); meltDown.newLine();}, 3800);
  window.setTimeout(function(){meltDown.newLine(); meltDown.type(">>>>>>>Access DENIED<<<<<<<"); meltDown.newLine();}, 3850);
  window.setTimeout(function(){meltDown.reset();}, 4000);
  window.setTimeout(function(){meltDown.type("CRASH::FATAL"); meltDown.newLine();}, 4400);
  window.setTimeout(function(){meltDown.type("PLEASE REFRESH BROWSER");}, 4650);
}

function meltDownHandler(){
  var line_MD = this.lineBuffer;
}


var smallMeltdown = new Terminal({
  textColor: "white",
  handler: smallMeltdownHandler,
  greeting: "/$ ERROR--SYSTEM_MELTDOWN! (v1.0.1.1) \n>\n>\n>\n",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  initHandler: smallMeltdownFunction
});


function smallMeltdownFunction(){
  window.setTimeout(function(){smallMeltdown.type("."); smallMeltdown.newLine();}, 2000);
  window.setTimeout(function(){smallMeltdown.type("> .."); smallMeltdown.newLine();}, 2100);
  window.setTimeout(function(){smallMeltdown.type("> ...");}, 2200);
  window.setTimeout(function(){smallMeltdown.textColor = "red"; smallMeltdown.type("> ERROR");}, 2200);
  window.setTimeout(function(){smallMeltdown.newLine(); smallMeltdown.type(".");}, 2500);
  window.setTimeout(function(){smallMeltdown.newLine(); smallMeltdown.type(".");}, 2800);
  window.setTimeout(function(){smallMeltdown.newLine(); smallMeltdown.type(".");}, 3300);
  window.setTimeout(function(){smallMeltdown.type(">"); smallMeltdown.newLine();}, 3450);
  window.setTimeout(function(){smallMeltdown.type(">"); smallMeltdown.newLine();}, 3500);
  window.setTimeout(function(){smallMeltdown.type(">"); smallMeltdown.newLine();}, 3550);
  window.setTimeout(function(){smallMeltdown.type(">"); smallMeltdown.newLine();}, 3600);
  window.setTimeout(function(){smallMeltdown.type(">"); smallMeltdown.newLine();}, 3700);
  window.setTimeout(function(){smallMeltdown.type(">"); smallMeltdown.newLine();}, 3800);
  window.setTimeout(function(){smallMeltdown.newLine(); smallMeltdown.type(">>>>>>>Access DENIED<<<<<<<"); smallMeltdown.newLine();}, 3850);
  window.setTimeout(function(){smallMeltdown.reset();}, 4300);
  window.setTimeout(function(){smallMeltdown.type("CRASH::FATAL"); smallMeltdown.newLine();}, 5000);
  window.setTimeout(function(){smallMeltdown.type("PLEASE REFRESH BROWSER");}, 5300);
}

function smallMeltdownHandler(){
  var line_MD = this.lineBuffer;
}


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
  if (line_0A === "server.skip();"){
    this.close();
    frontEnd_G.open();
  } else if (line_0A === "reposition.skip();"){
    this.close();
    termResize();
    termReposition();
    newTerm_C.open();
  } else if (line_0A != "#begin"){
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
  greeting: "##FrontEnd##\n>\n>\n>\n>\n>\n>\n>\n>\n>\nAwesome. With a litle luck we may actually be able to pull this off. \nMy server is programmed to my custom settings which are a little bit unconventional. \nI use '#open' to enter into my backend-terminal. \nTry it now and let's see if we can get the ball rolling.",
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
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\nExcellent. We're in. \nYou can tell when we're in the backend-terminal because it uses green text. \nYou can always enter this backend-terminal by using that same '#open' command. \nFrom here, we will be able to enter code which goes directly to my database. \nThe '#' symbol is a special symbol that I use to communicate with the backend-terminal. \nLike I mentioned earlier, we may be able to pull this off, but it won't be easy. \nType '#continue' to learn about the next steps.",
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
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\nBoom.\nIf you couldn't tell, we are still in the backend-terminal. \nWe will always use '#open' to get into the backend-terminal. \nFrom here we will be able to enter real JavaScript. \nThe JavaScript we enter will (hopefully) be enough to get this game up and running. \nOnce in this backend-terminal, the compiler expects the user to enter pure JavaScript. \nTo get out of the backend-terminal we will have to use another one of my custom commands; '#submit'. \n'#submit' tells the compiler that we have finished writing our JavaScript.\nThink of it like a period, marking the end of a sentence. \nWhen the server receives the '#submit' command, it will execute the JavaScript which came before the '#submit'.\n'#submit' is not JavaScipt, but is instead a custom command I created for personal server maintence.\nThe '#submit' command tells the server that we are finished writing and would like our code to be executed. \nTry it now by typing '#submit' and pressing enter.",
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
  greeting: "##FrontEnd##\nSweet.. We just might have a shot afterall.\nOkay, now lets run through the whole thing and see what it will really be like.\nEnter '#open' to get back into the backend-terminal. \nOnce inside, type 'server.status();' and then press Enter.\nThis command tells the server we would like to know it's status. \nThe punctuation is important; 'server.status();'\nThats 'server' (dot) 'status' followed by a set of empty PARENTHESIS and a SEMI-COLON.\nThe quotes are not necessary.\nOnce you type that command press enter. On the next line, type '#submit' \nThe '#submit' command will tell the server we are done writing JavaScript.\nThis will run our status check on the server and display the results. \nIt's risky to spend too much time in the backend-terminal so try and be quick if you can. \nRemember, if things get messy, you can type 'reset' followed by enter to reset the current session.\n>\nTo recap:\n1. type '#open' here and press enter. Wait to be connected to the backend-terminal.\n2. Once inside, type server.status(); and press enter.\n3. On the next line, type '#submit' and press enter.\n>\nOnce you are inside the backend-terminal we will have no way of communicating until you '#submit'. \nHope to see you back here soon.",
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
    codeInj0 = "";
  }else if (line_F == "#submit") {
    evaluate(codeInj0, 0);
    this.codeInj0 = "";
  } else {
    this.codeInj0 = codeInj0 + line_F;
    console.log("CODE AFTER FIRE", this.codeInj0);
  }
  this.prompt();
}

var frontEnd_G = new Terminal({
  handler: handler_G,
  greeting: "##FrontEnd##\nWow! You made it! Great Job!\nDid you see how our server.status(); command worked?\nDon't forget that command, some of that information may come in handy in the future.\nYou've made a lot of progress and it would be a shame to loose it, so I'm going to let you in on a secret:\nIf anything happens and your computer crashes, reset your browser and reload this site.\nFrom there, you can use the command 'server.skip();' in the first window. \nWrite that command down on paper. It will take you back here.\n>\n>\nOkay, now that you know what you're doing its time to get to work on this game.\nType '#moveon' when you're ready to move on.",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
  textColor: "white"
});

function handler_G(){
  var line_G = this.lineBuffer;
  if (line_G == "reset") {
    this.reset();
  }else if (line_G == "#moveon") {
    this.close();
    front_H.open();
  }
  this.prompt();
}

var front_H = new Terminal({
  handler: handler_H,
  greeting: "##FrontEnd##\nIn order to play our game we're going to need to be able to see it.\nTo make room for the game's screen, were going to need to clear some space on this window.\nLet's go into the backend-terminal and run a 'this.resizeTerminal();' command. Note the Capital Letter. \nThat should do the trick.",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
  textColor: "white"
});


function handler_H(){
  var line_H = this.lineBuffer;
  if (line_H == "reset") {
    this.reset();
  }else if (line_H == "#open") {
    this.close();
    back_I.open();
  }
  this.prompt();
}


var back_I = new Terminal({
  handler: handler_I,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>\n",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
  textColor: "#7FFF00"
});

function handler_I(){
  var line_I = this.lineBuffer;
  var codeInjI = this.codeInjI || "";
  if (line_I == "reset") {
    this.reset();
    codeInjI = "";
  }else if (line_I == "#submit") {
    evaluate(codeInjI, "I");
    this.codeInjI = "";
  } else {
    this.codeInjI = codeInjI + line_I;
  }
  this.prompt();
}


var newTerm_A = new Terminal({
  handler: handlerNewA,
  greeting: "##FrontEnd##\n>\nFinally, some breathing room. Much better!\nSo far we havent added anything to the page, we've just made our terminal smaller. \nNow run 'this.repositionTerminal();' to put the terminal in a resonable place.",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "white"
});


function handlerNewA(){
  var line_H = this.lineBuffer;
  if (line_H == "reset") {
    this.reset();
  }else if (line_H == "#open") {
    this.close();
    newTerm_B.open();
  }
  this.prompt();
}

var newTerm_B = new Terminal({
  handler: handlerNewB,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>\n",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "#7FFF00"
});

function handlerNewB(){
  var line_I = this.lineBuffer;
  var codeInjI = this.codeInjI || "";
  if (line_I == "reset") {
    this.reset();
    codeInjI = '';
  }else if (line_I == "#submit") {
    evaluate(codeInjI, "newB");
    this.codeInjI = "";
  } else {
    this.codeInjI = codeInjI + line_I;
  }
  this.prompt();
}


var newTerm_C = new Terminal({
  handler: handlerNewC,
  greeting: "##FrontEnd##\n>\nMuch Better. Jeeze, I feel like a new terminal! \nYou can now use 'reposition.skip();'to get back here from the #begin page. Write it down.\n'#continue' to continue",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "white"
});


function handlerNewC(){
  var line_H = this.lineBuffer;
  if (line_H == "reset") {
    this.reset();
  }else if (line_H == "#continue") {
    this.close();
    newTerm_D.open();
  }
  this.prompt();
}

var newTerm_D = new Terminal({
  handler: handlerNewD,
  greeting: "##FrontEnd##\n>\nThings are going to get more difficult. \nLet's start adding stuff to the page.\nMaybe a background is a good place to start: this.addGameBackground();\nYou know what to do.",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "white"
});


function handlerNewD(){
  var line_H = this.lineBuffer;
  if (line_H == "reset") {
    this.reset();
  } else if (line_H == "#help") {
    this.newLine();
    this.type("Ah yes, I should have mentioned the Authentication..");
    this.newLine();
    this.type("For information on the username, use '#username'.");
    this.newLine();
    this.type("The password is part of the server's status, run 'server.status();' again on the backend.");
    this.newLine();
    this.type("Pay Attention.");
  } else if (line_H == "#username") {
    this.newLine();
    this.type("This is probably going to take some googling.");
    this.newLine();
    this.type("You're going to need to open your developer's console.");
    this.newLine();
    this.type("In the developer's console, run the command 'getUsername();', that should do the trick.");
  }else if (line_H == "#open") {
    this.close();
    newBackE.open();
  }
  this.prompt();
}


var newBackE = new Terminal({
  handler: handlerNewE,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>\n",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "#7FFF00"
});


var userTerm = new Terminal({
  handler: userHandler,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "#7FFF00"
});

function userHandler(){
  var line_I = this.lineBuffer;
  evaluate(line_I, "user");
}

var passTerm = new Terminal({
  handler: handlerNewE,
  greeting: "",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "#7FFF00"
});

function passHandler(){
  var line = this.lineBuffer;
  evaluate(line, "pass");
}

function handlerNewE(){
  var line_I = this.lineBuffer;
  var codeInjI = this.codeInjI || "";
  if (line_I == "reset") {
    this.reset();
    codeInjI = "";
  }else if (line_I == "#submit") {
    evaluate(codeInjI, "newE");
    this.codeInjI = "";
  } else {
    this.codeInjI = codeInjI + line_I;
  }
  this.prompt();
}

var passTermA = new Terminal({
  handler: passHandlerA,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "#7FFF00"
});

function passHandlerA(){
  var line_I = this.lineBuffer;
  evaluate(line_I, "pass");
}

function aaHandler0(){
  var line_H = this.lineBuffer;
  if (line_H == "reset") {
    this.reset();
  }else if (line_H == "#continue") {
    this.close();
    aaTerm1.open();
  }
  this.prompt();
}


var aaTerm0 = new Terminal({
  handler: aaHandler0,
  greeting: "##FrontEnd##\n>\nNice Job!\nIt looks great, don't you think?\n#continue",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "white"
});

var aaTerm1 = new Terminal({
  handler: aaHandler1,
  greeting: "##FrontEnd##\n>\n>\n\When I say TERMINAL, You say...?\nRun 'this.addGameTitle();'\nBe quick about it.",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "white"
});

function aaHandler1(){
  window.titleUp = false;
  var line_H = this.lineBuffer;
  if (line_H == "reset") {
    this.reset();
  }else if (line_H == "#open") {
    this.close();
    aaTerm1_B.open();
    window.setTimeout(function(){
      if (!window.titleUp){
        aaTerm1_B.close();
        aaTerm1.open();
      } else {
        aaTerm1_B.close();
        aaTerm2.open();
      }
    }, 6700);
  }
  this.prompt();
}




var aaTerm1_B = new Terminal({
  handler: aaTerm1_BHandler,
  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "#7FFF00"
});


function aaTerm1_BHandler(){
  var line_I = this.lineBuffer;
  var codeInjI = this.codeInjI || "";
  window.setTimeout(function(){codeInjI = "";}, 6700);
  if (line_I == "reset") {
    this.reset();
    codeInjI = "";
  }else if (line_I == "#submit") {
    evaluate(codeInjI, "newTitle");
    this.codeInjI = "";
  } else {
    this.codeInjI = codeInjI + line_I;
  }
  this.prompt();
}

var aaTerm2 = new Terminal({
  handler: aaHandler2,
  greeting: "##FrontEnd##\n>\n>\nAyy, well done! Fastest hands on the net over here.",
  termDiv:'second',
  crsrBlockMode: false,
  cols:100,
  rows:20,
  textColor: "white"
});

function aaHandler2(){
  var line_H = this.lineBuffer;
  if (line_H == "reset") {
    this.reset();
  }else if (line_H == "#open") {
    this.type("the game doesnt have any more levels.. yet. On line 611 at time of writing");
  }
  this.prompt();
}




zeroTerm_A.open();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


function showStatus(){
  window.setTimeout(function(){zeroTerm_F.type("."); zeroTerm_F.newLine();}, 2000);
  window.setTimeout(function(){zeroTerm_F.type("> .."); zeroTerm_F.newLine();}, 2100);
  window.setTimeout(function(){zeroTerm_F.type("> ..."); zeroTerm_F.newLine();}, 2200);
  window.setTimeout(function(){zeroTerm_F.type("> Initializing");}, 2200);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 2500);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 2800);
  window.setTimeout(function(){zeroTerm_F.type("."); zeroTerm_F.newLine();}, 3300);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4000);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4100);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4200);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4300);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4400);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4500);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4600);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4800);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4400);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4500);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 4600);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 4800);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 5000);
  window.setTimeout(function(){zeroTerm_F.type("."); zeroTerm_F.newLine();}, 5350);
  window.setTimeout(function(){zeroTerm_F.type("ACCESS GRANTED");}, 5400);
  window.setTimeout(function(){zeroTerm_F.reset();}, 6000);
  window.setTimeout(function(){zeroTerm_F.type("::SERVER STATUS::"); zeroTerm_F.newLine();}, 6200);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 6200);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 6200);
  window.setTimeout(function(){zeroTerm_F.type("HASH: "); zeroTerm_F.type("3c1fbb300b506803d4bb"); zeroTerm_F.newLine();}, 6500);
  window.setTimeout(function(){zeroTerm_F.type("PORT: "); zeroTerm_F.type("3000"); zeroTerm_F.newLine();}, 6800);
  window.setTimeout(function(){zeroTerm_F.type("RACK: "); zeroTerm_F.type("(4.2.5.1)"); zeroTerm_F.newLine();}, 6900);
  window.setTimeout(function(){zeroTerm_F.type("PROCESS: "); zeroTerm_F.type("MONGOS_DB"); zeroTerm_F.newLine();}, 7000);
  window.setTimeout(function(){zeroTerm_F.type("PID: "); zeroTerm_F.type("4823"); zeroTerm_F.newLine();}, 7500);
  window.setTimeout(function(){zeroTerm_F.type("VERSION: "); zeroTerm_F.type("1.1.0.1"); zeroTerm_F.newLine();}, 7500);
  window.setTimeout(function(){zeroTerm_F.type("AdvisoryHostFQDN: "); zeroTerm_F.type("[3,54,24,197]"); zeroTerm_F.newLine();}, 8200);
  window.setTimeout(function(){zeroTerm_F.type("PASSWORD: "); zeroTerm_F.type("STRAWB3RRY"); zeroTerm_F.newLine();}, 8200);
  window.setTimeout(function(){zeroTerm_F.type("UPTIME_CHANNEL: "); zeroTerm_F.type("{}"); zeroTerm_F.newLine();}, 8500);
  window.setTimeout(function(){zeroTerm_F.type(">"); zeroTerm_F.newLine();}, 8500);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 8510);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 8800);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 9200);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 9200);
  window.setTimeout(function(){zeroTerm_F.type(".");}, 9200);
  window.setTimeout(function(){zeroTerm_F.close();}, 12000);
}


function showStatusAgain(){
  window.setTimeout(function(){newBackE.type("."); newBackE.newLine();}, 2000);
  window.setTimeout(function(){newBackE.type("> .."); newBackE.newLine();}, 2100);
  window.setTimeout(function(){newBackE.type("> ..."); newBackE.newLine();}, 2200);
  window.setTimeout(function(){newBackE.type("> Initializing");}, 2200);
  window.setTimeout(function(){newBackE.type(".");}, 2500);
  window.setTimeout(function(){newBackE.type(".");}, 2800);
  window.setTimeout(function(){newBackE.type("."); newBackE.newLine();}, 3300);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4000);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4100);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4200);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4300);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4400);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4500);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4600);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4800);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4400);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4500);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 4600);
  window.setTimeout(function(){newBackE.type(".");}, 4800);
  window.setTimeout(function(){newBackE.type(".");}, 5000);
  window.setTimeout(function(){newBackE.type("."); newBackE.newLine();}, 5350);
  window.setTimeout(function(){newBackE.type("ACCESS GRANTED");}, 5400);
  window.setTimeout(function(){newBackE.reset();}, 6000);
  window.setTimeout(function(){newBackE.type("::SERVER STATUS::"); newBackE.newLine();}, 6200);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 6200);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 6200);
  window.setTimeout(function(){newBackE.type("HASH: "); newBackE.type("3c1fbb300b506803d4bb"); newBackE.newLine();}, 6500);
  window.setTimeout(function(){newBackE.type("PORT: "); newBackE.type("3000"); newBackE.newLine();}, 6800);
  window.setTimeout(function(){newBackE.type("RACK: "); newBackE.type("(4.2.5.1)"); newBackE.newLine();}, 6900);
  window.setTimeout(function(){newBackE.type("PROCESS: "); newBackE.type("MONGOS_DB"); newBackE.newLine();}, 7000);
  window.setTimeout(function(){newBackE.type("PID: "); newBackE.type("4823"); newBackE.newLine();}, 7500);
  window.setTimeout(function(){newBackE.type("VERSION: "); newBackE.type("1.1.0.1"); newBackE.newLine();}, 7500);
  window.setTimeout(function(){newBackE.type("AdvisoryHostFQDN: "); newBackE.type("[3,54,24,197]"); newBackE.newLine();}, 8200);
  window.setTimeout(function(){newBackE.type("PASSWORD: "); newBackE.type("STRAWB3RRY"); newBackE.newLine();}, 8200);
  window.setTimeout(function(){newBackE.type("UPTIME_CHANNEL: "); newBackE.type("{}"); newBackE.newLine();}, 8500);
  window.setTimeout(function(){newBackE.type(">"); newBackE.newLine();}, 8500);
  window.setTimeout(function(){newBackE.type(".");}, 8510);
  window.setTimeout(function(){newBackE.type(".");}, 8800);
  window.setTimeout(function(){newBackE.type(".");}, 9200);
  window.setTimeout(function(){newBackE.type(".");}, 9200);
  window.setTimeout(function(){newBackE.type(".");}, 9200);
  window.setTimeout(function(){newBackE.close();}, 12000);
}

function termResize(){
  back_I.close();
  $( "#main" ).remove();
  newTerm_A.open();
}

function termReposition(){
  newTerm_B.close();
  $( "#second" ).addClass( "second-level" );
  newTerm_C.open();
}

function sendCred(str, field){
  if (!window.credentials){
    window.credentials = {user: null, pass: null};
  }
  switch(field){
    case "user":
      window.credentials["user"] = str.slice(9);
      userTerm.close();
      passTermA.open();
      passTermA.type("password: ");
      break;
    case "pass":
      window.credentials["pass"] = str.slice(9);
      var creds = window.credentials;
      authCheck(creds);
      break;
  }
}

function authCheck(creds){
  var userHash = hash.sha(creds.user);
  var passHash = hash.sha(creds.pass);
  //nice try but I hashed my shiz. Happy guessing
  if (userHash === "c36dd7f39139ccbe019ac527f0d8900f90d0e5de" && passHash === "b13b8e49cfd4d2c0fff7686d3de8f776db41926c"){
    console.log("swimmingly");
    authAnimationApproved();
  } else {
    authAnimationDenied();
  }
}

function authAnimationApproved(){
  passTermA.newLine();
  passTermA.type(">");
  window.setTimeout(function(){passTermA.newLine(); passTermA.type("Checking Authorization");}, 400);
  window.setTimeout(function(){passTermA.type(".");}, 500);
  window.setTimeout(function(){passTermA.type(".");}, 700);
  window.setTimeout(function(){passTermA.type(".");}, 900);
  window.setTimeout(function(){passTermA.type("."); passTermA.newLine();}, 1200);
  window.setTimeout(function(){passTermA.type(".");}, 1300);
  window.setTimeout(function(){passTermA.type(".");}, 1400);
  window.setTimeout(function(){passTermA.type(".");}, 1500);
  window.setTimeout(function(){passTermA.close();}, 2200);
  window.setTimeout(function(){aaTerm0.open();}, 2200);
  window.setTimeout(function(){addBG();}, 1200);
}


function authAnimationDenied(){
  passTermA.newLine();
  passTermA.type(">");
  window.setTimeout(function(){passTermA.newLine(); passTermA.type("Checking Authorization");}, 400);
  window.setTimeout(function(){passTermA.type(".");}, 500);
  window.setTimeout(function(){passTermA.type(".");}, 700);
  window.setTimeout(function(){passTermA.type(".");}, 900);
  window.setTimeout(function(){passTermA.type("."); passTermA.newLine();}, 1000);
  window.setTimeout(function(){passTermA.type("ACCESS DENIED - use '#help' for help");}, 1000);
  window.setTimeout(function(){passTermA.close();}, 2500);
  window.setTimeout(function(){newTerm_D.open();}, 2500);
}

function addBG(){
  $( "#whole-page" ).addClass("background");
}

function addTitle(){
  $("#title").removeClass("hidden");
  window.titleUp = true;
}

function evaluate(block, level){
  console.log("MELTDOWN", meltDown);
  console.log("BLOCK", block);
  var codeStr = block.replace(/ +?/g, '');
  if (level === 0){
    if (codeStr != "server.status();"){
      zeroTerm_F.close();
      meltDown.open();
    } else {
      showStatus();
      window.setTimeout(function(){frontEnd_G.open();}, 12000);
    }
  }
  if (level === "newTitle"){
    if (codeStr === "this.addGameTitle();"){
      addTitle();
    } else {
      aaTerm1_B.close();
      smallMeltdown.open();
    }
  }
  if (level === "user"){
    console.log("were sending this to send cred", codeStr);
    sendCred(codeStr, "user");
    }
  if (level === "pass"){
    sendCred(codeStr, "pass");
  }
  if (level === "I"){
    if (codeStr != "this.resizeTerminal();"){
      console.log("made it in here");
      front_H.close();
      meltDown.open();
    } else {
      window.setTimeout(function(){back_I.type("> Initializing");}, 700);
      window.setTimeout(function(){back_I.type(".");}, 1300);
      window.setTimeout(function(){back_I.type(".");}, 1800);
      window.setTimeout(function(){back_I.type(".");}, 2000);
      window.setTimeout(function(){termResize();}, 3000);
    }
  }
  if (level === "newB"){
    if (codeStr != "this.repositionTerminal();"){
      console.log("made it in here");
      newTerm_B.close();
      smallMeltdown.open();
    } else {
      window.setTimeout(function(){newTerm_B.type("> Initializing");}, 700);
      window.setTimeout(function(){newTerm_B.type(".");}, 1300);
      window.setTimeout(function(){newTerm_B.type(".");}, 1800);
      window.setTimeout(function(){newTerm_B.type(".");}, 2100);
      window.setTimeout(function(){newTerm_B.type(".");}, 2300);
      window.setTimeout(function(){termReposition();}, 3000);
    }
  }
  if (level === "newE"){
    if (codeStr === "server.status();"){
      showStatusAgain();
      window.setTimeout(function(){newTerm_D.open();}, 12000);
    } else if (codeStr === "this.addGameBackground();") {
      window.setTimeout(function(){newBackE.type("> Initializing");}, 700);
      window.setTimeout(function(){newBackE.type(".");}, 1300);
      window.setTimeout(function(){newBackE.type(".");}, 1800);
      window.setTimeout(function(){newBackE.type(".");}, 2100);
      window.setTimeout(function(){newBackE.type("."); newBackE.newLine();}, 2300);
      window.setTimeout(function(){newBackE.close();}, 3000);
      window.setTimeout(function(){userTerm.open();}, 3000);
      window.setTimeout(function(){userTerm.type("username: ");}, 3000);
    } else {
      newBackE.close();
      smallMeltdown.open();
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
