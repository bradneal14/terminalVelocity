/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Terminal = __webpack_require__(1);
	var $ = __webpack_require__(2);
	var hash = __webpack_require__(3);
	var Structures = __webpack_require__(4);
	var someObject = __webpack_require__(5);
	var Obj = __webpack_require__(6);

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
	  rows:15,
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
	  } else if (line_0A === "title.jump();"){
	    this.close();
	    addBG();
	    addTitle();
	    termResize();
	    termReposition();
	    aaTerm2.open();
	  } else if(line_0A === "current"){
	    this.close();
	    addBG();
	    addTitle();
	    termResize();
	    termReposition();
	    addCanvas();
	    aaTerm6.open();
	  } else if(line_0A === "spit"){
	    console.log(window.Structures.ex);
	  }
	  else if (line_0A != "#begin"){
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
	  rows:15,
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
	  rows:15,
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
	  rows:15,
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
	  rows:15,
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
	  rows:15,
	  textColor: "#7FFF00"
	});


	var userTerm = new Terminal({
	  handler: userHandler,
	  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
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
	  rows:15,
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
	  rows:15,
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
	  rows:15,
	  textColor: "white"
	});

	var aaTerm1 = new Terminal({
	  handler: aaHandler1,
	  greeting: "##FrontEnd##\n>\n>\n\When I say TERMINAL, You say...?\nRun 'this.addGameTitle();'\nBe quick about it.",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
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
	    }, 6350);
	  }
	  this.prompt();
	}




	var aaTerm1_B = new Terminal({
	  handler: aaTerm1_BHandler,
	  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "#7FFF00"
	});


	function aaTerm1_BHandler(){
	  var line_I = this.lineBuffer;
	  var codeInjI = this.codeInjI || "";
	  window.setTimeout(function(){codeInjI = "";}, 6350);
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
	  greeting: "##FrontEnd##\n>\n>\nAyy, well done! Fastest hands on the net over here.\nYou can use title.jump(); to get back here from now on.\nI think it's time to start on the game, don't you?\nthis.addGameCanvas();",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "white"
	});

	function aaHandler2(){
	  var line_H = this.lineBuffer;
	  if (line_H == "reset") {
	    this.reset();
	  }else if (line_H == "#open") {
	    aaTerm2.close();
	    aaTerm2_B.open();
	  }
	  this.prompt();
	}


	var aaTerm2_B = new Terminal({
	  handler: aaTerm2_BHandler,
	  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "#7FFF00"
	});


	function aaTerm2_BHandler(){
	  var line_I = this.lineBuffer;
	  var codeInjI = this.codeInjI || "";
	  if (line_I == "reset") {
	    this.reset();
	    codeInjI = "";
	  }else if (line_I == "#submit") {
	    evaluate(codeInjI, "newCanvas");
	    this.codeInjI = "";
	  } else {
	    this.codeInjI = codeInjI + line_I;
	  }
	  this.prompt();
	}


	var aaTerm3 = new Terminal({
	  handler: aaHandler3,
	  greeting: "##FrontEnd##\n>\n>\n>Cool, looks great.\nNow lets add a player.\nthis.addPlayer();",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "white"
	});

	function aaHandler3(){
	  var line_H = this.lineBuffer;
	  if (line_H == "reset") {
	    this.reset();
	  }else if (line_H == "#open") {
	    aaTerm3.close();
	    aaTerm3_B.open();
	  }
	  this.prompt();
	}


	var aaTerm3_B = new Terminal({
	  handler: aaTerm3_BHandler,
	  greeting: "/$ Terminal-Velocity-Server (v1.0.1.1) \n>\n>\n>",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "#7FFF00"
	});


	function aaTerm3_BHandler(){
	  var line_I = this.lineBuffer;
	  var codeInjI = this.codeInjI || "";
	  if (line_I == "reset") {
	    this.reset();
	    codeInjI = "";
	  }else if (line_I == "#submit") {
	    evaluate(codeInjI, "newPlayer");
	    this.codeInjI = "";
	  } else {
	    this.codeInjI = codeInjI + line_I;
	  }
	  this.prompt();
	}

	var aaTerm4 = new Terminal({
	  handler: aaHandler4,
	  greeting: "##FrontEnd##\n>\n>\nNice job, lets give move around a bit\nthis.addPlayerMoves();",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "white"
	});

	function aaHandler4(){
	  var line_H = this.lineBuffer;
	  if (line_H == "reset") {
	    this.reset();
	  }else if (line_H == "#open") {
	    aaTerm4.close();
	    aaTerm4_B.open();
	  }
	  this.prompt();
	}

	var aaTerm4_B = new Terminal({
	  handler: aaTerm4_BHandler,
	  greeting: "/$ Terminal-Velocity-Server 4(v1.0.1.1) \n>\n>\n>",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "#7FFF00"
	});


	function aaTerm4_BHandler(){
	  var line_I = this.lineBuffer;
	  var codeInjI = this.codeInjI || "";
	  if (line_I === "reset") {
	    this.reset();
	    codeInjI = "";
	  }else if (line_I == "#submit") {
	    evaluate(codeInjI, "addMoves");
	    this.codeInjI = "";
	  } else {
	    this.codeInjI = codeInjI + line_I;
	  }
	  this.prompt();
	}

	// var toggleChar = function(){
	//   this.charMode? this.charMode = false : this.charMode = true;
	// };

	var aaTerm5 = new Terminal({
	  handler: aaHandler5,
	  greeting: "##FrontEnd##\n>\n>\nCool, that should give us some wiggle room.\nUse \"#play\" followed by enter to turn on arrow key movement.\nNow try moving left and right with the arrow keys.\nTry and get to the blue area.",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "white",
	  // initHandler: charModeOn
	});

	function aaHandler5(){
	  console.log("here in 5");
	  this.charMode=true;
	  var line_H = this.lineBuffer;
	  if (this.inputChar === this.termKey.LEFT) {
	    left();
	  }else if (this.inputChar === this.termKey.RIGHT) {
	    right();
	  } else if (this.inputChar === this.termKey.DOWN){
	    down();
	  } else if (this.inputChar === this.termKey.UP){
	    up();
	  } else if (this.inputChar === this.termKey.POUND){
	    console.log("pound");
	    this.close();
	  }
	  this.prompt();
	}



	var myCanvas = document.getElementById("testing");
	var context = myCanvas.getContext("2d");
	var curX = 0;
	var curY = 100;



	var aaTerm6 = new Terminal({
	  handler: aaHandler6,
	  greeting: "##FrontEnd##\n>\n>\nGreat. Now that you have a feel for the movement, lets add a border to make it interesting\nthis.addBorder();",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "white"
	});

	function aaHandler6(){
	  var line_H = this.lineBuffer;
	  if (line_H == "reset") {
	    this.reset();
	  }else if (line_H == "#open") {
	    aaTerm6.close();
	    aaTerm6_B.open();
	  }
	  this.prompt();
	}

	var aaTerm6_B = new Terminal({
	  handler: aaTerm6_BHandler,
	  greeting: "/$ Terminal-Velocity-Server 4(v1.0.1.1) \n>\n>\n>",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "#7FFF00"
	});


	function aaTerm6_BHandler(){
	  var line_I = this.lineBuffer;
	  var codeInjI = this.codeInjI || "";
	  if (line_I === "reset") {
	    this.reset();
	    codeInjI = "";
	  }else if (line_I == "#submit") {
	    evaluate(codeInjI, "addBorder");
	    this.codeInjI = "";
	  } else {
	    this.codeInjI = codeInjI + line_I;
	  }
	  this.prompt();
	}

	var aaTerm7 = new Terminal({
	  handler: aaHandler7,
	  greeting: "##FrontEnd##\n>\n>\nWelcome to 7\nUse \'#play\' to enable arrow key movement",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "white"
	});

	function aaHandler7(){
	  console.log("here in 7");
	  var line_H = this.lineBuffer;
	  if (line_H === "#play"){
	    this.charMode=true;
	    this.line_H = "#play";
	    this.prompt();
	  } else if (this.inputChar !== this.termKey.UP &&
	    this.inputChar !== this.termKey.DOWN &&
	    this.inputChar !== this.termKey.LEFT &&
	    this.inputChar !== this.termKey.RIGHT &&
	    this.inputChar !== 0){
	      this.newLine();
	      this.type("command not recognized");
	      this.prompt();
	    }
	  if (this.inputChar === this.termKey.LEFT) {
	    left2();
	  }else if (this.inputChar === this.termKey.RIGHT) {
	    right2();
	  } else if (this.inputChar === this.termKey.DOWN){
	    down2();
	  } else if (this.inputChar === this.termKey.UP){
	    up2();
	  }
	  // this.prompt();
	}

	var reset = function(){
	  this.reset();
	};

	var aaTerm8 = new Terminal({
	  handler: aaHandler8,
	  greeting: "##FrontEnd##\n>\n>\nCongratulations you beat the game!!!\n>\n>",
	  termDiv:'second',
	  crsrBlockMode: false,
	  cols:100,
	  rows:15,
	  textColor: "white",
	  initHandler: reset
	});

	function aaHandler8(){
	  console.log("here in 8");
	  // this.charMode=true;
	  var line_H = this.lineBuffer;
	  if (line_H === "#bringit"){
	    // someObject.Something();
	    // var options = {"pos": 2, "vel": 3, "height": 17, "width": 21};
	    // var mine = new someObject.MovingObject(options);
	    // console.log("NO FUCKING WAY", mine.pos);
	    bringIt();
	    this.charMode = true;
	    //begin movement
	  } if (this.inputChar === this.termKey.DOWN){
	    down3();
	  } else if (this.inputChar === this.termKey.UP){
	    up3();
	  } else if (this.inputChar === this.termKey.POUND){
	    bringIt();
	  }
	  this.prompt();
	}




	zeroTerm_A.open();
	//terms14*term14*t14

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// var firstTerm_A = new Terminal({
	//   handler: firstTermHandler_A,
	//   greeting: "Welcome to level 1. \nEnter 'help' to see your toolbelt for this level.\nWhen ready, enter '#open' to attempt a submission.",
	//   textColor: "white",
	//   crsrBlockMode: false,
	// });
	//
	// var firstTerm_B = new Terminal({
	//   handler: firstTermHandler_B,
	//   greeting: "Level 1. Type '#submit' to run. \nInsert code here:",
	//   initHandler: reloadTitle
	// });
	//
	// var reloadTitle = function(){
	//   this.reset();
	// };
	//
	// $( "#begin" ).click(function() {
	//   firstTerm_A.open();
	// });
	//
	// function firstTermHandler_B(){
	//   var line_B = this.lineBuffer;
	//   console.log("LINE", line_B);
	//   var codeInj = this.codeInj || "";
	//   console.log("BEFORE ANYTHING CODEINJ = ", codeInj);
	//   if (line_B == "reset") {
	//     this.reset();
	//     codeInj = "";
	//   } else if (line_B == "#submit") {
	//     console.log("AFTER SUBMIT CODEINJ =", codeInj);
	//     evaluate(codeInj, 1);
	//     this.codeInj = "";
	//   } else {
	//     this.codeInj = codeInj + line_B;
	//   }
	//   this.prompt();
	// }
	//
	// function firstTermHandler_A() {
	//  var line_A = this.lineBuffer;
	//  if (line_A == "#open"){
	//    firstTerm_A.reset();
	//    firstTerm_A.ps = "/$";
	//    firstTerm_A.textColor = "#7FFF00";
	//    firstTerm_A.close();
	//    firstTerm_B.open();
	//  } else {
	//    this.newLine();
	//  }
	//  if (line_A == "help") {
	//    this.write(helpPage1);
	//  }
	//  else if (line_A=="reset"){
	//    this.reset();
	//  }
	//  else if (line_A=="left"){
	//    left();
	//  }
	//  else if (line_A=="up"){
	//    up();
	//  }
	//  else if (line_A=="down"){
	//    down();
	//  }
	//  else if (line_A=="big"){
	//    start();
	//  }
	//  else if(line_A =="circle"){
	//    placeCircle();
	//  }
	//  else if(line_A == "right"){
	//    right();
	//  }
	//  else if(line_A =="erase"){
	//    eraseCircle();
	//  }
	//  else if (line_A != "") {
	//    this.write("You typed: "+line_A);
	//  }
	//  this.prompt();
	// }
	//
	//
	// var helpPage1 = [
	//   "~>Wise decision..",
	//   "~>This toolbelt will be one of your most \n~>valuable resources in this journey.",
	//   "~>",
	//   "~>Variables available:",
	//   "~>   x = 14;",
	//   "~>",
	//   "~>Remember: Enter 'reset' at any time to reset terminal.",
	//   "~>Have fun!"
	// ];
	//
	//
	// var myCanvas = document.getElementById("canvas");
	// var context = myCanvas.getContext("2d");
	//
	// var curX = 300;
	// var curY = 50;
	//
	// var placeCircle = function(){
	//   context.beginPath();
	//   context.strokeStyle="#ff0000";
	//   context.arc(75,105,70,0,2*Math.PI);
	//   context.stroke();
	// };
	//
	// var eraseCircle = function(){
	//   context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	// };
	//
	// var nextLevel = function(){
	//   console.log("next level");
	//   myCanvas.width = myCanvas.width;
	//   myCanvas.height = myCanvas.height;
	//   context.fillStyle = "#FF0000";
	//   context.fillRect(475, 0, 107, 50);
	//   context.fillRect(curX, curY, 25, 25);
	// };
	//
	//
	// var left = function(){
	//   if (curX>0){
	//     curX -= 25;
	//   }
	//   myCanvas.width = myCanvas.width;
	//   myCanvas.height = myCanvas.height;
	//   context.fillRect(475, 0, 107, 50);
	//   context.fillRect(curX, curY, 25, 25);
	//   if (curX > 450 && curY < 50){
	//     nextLevel();
	//   }
	// };
	//
	// var right = function(){
	//   if (curX<(582-30)){
	//     curX += 25;
	//   }
	//   myCanvas.width = myCanvas.width;
	//   myCanvas.height = myCanvas.height;
	//   context.fillRect(475, 0, 107, 50);
	//   context.fillRect(curX, curY, 25, 25);
	//   if (curX > 450 && curY < 50){
	//     nextLevel();
	//   }
	// };
	//
	// var up = function(){
	//   if (curY>(0)){
	//     curY -= 25;
	//   }
	//   myCanvas.width = myCanvas.width;
	//   myCanvas.height = myCanvas.height;
	//   context.fillRect(475, 0, 107, 50);
	//   context.fillRect(curX, curY, 25, 25);
	//   if (curX > 450 && curY < 50){
	//     nextLevel();
	//   }
	// };
	//
	// var down = function(){
	//   if (curX<(375)){
	//     curY += 25;
	//   }
	//   myCanvas.width = myCanvas.width;
	//   myCanvas.height = myCanvas.height;
	//   context.fillRect(475, 0, 107, 50);
	//   context.fillRect(curX, curY, 25, 25);
	//   if (curX > 450 && curY < 50){
	//     nextLevel();
	//   }
	// };
	//
	//
	// var placeGoal = function(){
	//   context.fillRect(475, 0, 107, 50);
	// };
	//
	// var placeStart = function(){
	//   context.fillRect(curX, curY, 25, 25);
	// };
	//
	// placeStart();
	// placeGoal();

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

	function addCanvas(){
	  $("#canvas").removeClass("hidden");
	}

	console.log(context);

	function addPlayer2(){
	  context.fillStyle = "#FF0000";
	  context.fillRect(0, 100, 50, 50);
	  context.fillStyle = "#0000FF";
	  context.fillRect(500, 0, 100, 50);
	}

	function addPlayer3(){
	  curY = 100;
	  curX = 0;
	  context.fillStyle = "#FF0000";
	  context.fillRect(0, 100, 50, 50);
	  context.fillStyle = "#0000FF";
	  context.fillRect(500, 10, 100, 50);
	}


	function addBorder(){
	  context.fillStyle = "#ff5a00";
	  context.fillRect(0, 0, 600, 10);
	  context.fillStyle = "#ff5a00";
	  context.fillRect(0, 240, 600, 10);
	  context.fillRect(150, 100, 50, 180);
	  context.fillRect(400, 10, 50, 180);
	}

	function addBorder2(){
	  context.fillStyle = "#ff5a00";
	  context.fillRect(0, 0, 600, 10);
	  context.fillStyle = "#ff5a00";
	  context.fillRect(0, 240, 600, 10);
	  context.fillRect(150, 10, 50, 180);
	  context.fillRect(400, 70, 50, 180);
	}

	var setupCanvas = function(){
	  curY = 100;
	  curX = 0;
	  Structures.set.apply(context);
	  // context.fillStyle = "#FF0000";
	  // context.fillRect(0, 100, 50, 50);
	  // context.fillStyle = "#0000FF";
	  // context.fillRect(550, 10, 50, 230);
	  // context.fillStyle = "#ff5a00";
	  // context.fillRect(0, 0, 600, 10);
	  // context.fillStyle = "#ff5a00";
	  // context.fillRect(0, 240, 600, 10);
	  // context.fillRect(150, 10, 50, 180);
	  // context.fillRect(400, 70, 50, 180);
	};

	var bringIt = function(){
	  Structures.moveForward.apply(context);
	};


	  // console.log("WIDTH", myCanvas.width);
	  // console.log("HEIGHT", myCanvas.height);
	  //

	  //
	  // var placeCircle2 = function(){
	  //   context.beginPath();
	  //   context.strokeStyle="#fff#o";
	  //   context.arc(75,105,70,0,2*Math.PI);
	  //   context.stroke();
	  // };
	  //
	  // placeCircle2();
	// }


	// eval14*

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
	  if (level === "addBorder"){
	    if (codeStr === "this.addBorder();"){
	      aaTerm6_B.close();
	      addPlayer3();
	      addBorder();
	      aaTerm7.open();
	      console.log("green light");
	    } else {
	      aaTerm6_B.close();
	      smallMeltdown.open();
	      console.log("red light");
	    }
	  }
	  if (level === "addMoves"){
	    if (codeStr === "this.addPlayerMoves();"){
	      aaTerm4_B.close();
	      addPlayer2();
	      aaTerm5.open();
	      console.log("green light");
	    } else {
	      aaTerm4_B.close();
	      smallMeltdown.open();
	      console.log("red light");
	    }
	  }
	  if (level === "newPlayer"){
	    if (codeStr === "this.addPlayer();"){
	      aaTerm3_B.close();
	      addPlayer2();
	      aaTerm4.open();
	      console.log("green light");
	    } else {
	      aaTerm3_B.close();
	      smallMeltdown.open();
	      console.log("red light");
	    }
	  }
	  if (level === "newCanvas"){
	    if (codeStr === "this.addGameCanvas();"){
	      aaTerm2_B.close();
	      addCanvas();
	      aaTerm3.open();
	      console.log("green light");
	    } else {
	      aaTerm2_B.close();
	      smallMeltdown.open();
	      console.log("red light");
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

	var left = function(){
	  if (curX>=50){
	    curX -= 50;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	  context.fillStyle = "#0000FF";
	  context.fillRect(500, 0, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel();
	  }
	};


	var right = function(){
	  if (curX<(550)){
	    curX += 50;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	    context.fillStyle = "#0000FF";
	  context.fillRect(500, 0, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel();
	  }
	};

	var up = function(){
	  if (curY>(0)){
	    curY -= 50;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	    context.fillStyle = "#0000FF";
	  context.fillRect(500, 0, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel();
	  }
	};

	var down = function(){
	  if (curY<(200)){
	    curY += 50;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	  context.fillStyle = "#0000FF";
	  context.fillRect(500, 0, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel();
	    return;
	  }
	};

	var left2 = function(){
	  if (curX>=50){
	    curX -= 50;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	  context.fillStyle = "#0000FF";
	  context.fillRect(500, 10, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel2();
	    return;
	  }
	  console.log(curX, "x");
	  console.log(curY, "y");
	  addBorder();
	  checkGame();
	};


	var right2 = function(){
	  if (curX<(550)){
	    curX += 50;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	  context.fillStyle = "#0000FF";
	  context.fillRect(500, 10, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel2();
	    return;
	  }
	  console.log(curX, "x");
	  console.log(curY, "y");
	  addBorder();
	  checkGame();
	};

	var up2 = function(){
	  if (curY >= (60)){
	    curY -= 50;
	  } else {
	    curY = 10;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	    context.fillStyle = "#0000FF";
	  context.fillRect(500, 10, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel2();
	    return;
	  }
	  console.log(curX, "x");
	  console.log(curY, "y");
	  addBorder();
	  checkGame();
	};

	var down2 = function(){
	  if (curY<(150)){
	    curY += 50;
	  } else {
	    curY = 190;
	  }
	  myCanvas.width = myCanvas.width;
	  myCanvas.height = myCanvas.height;
	  context.fillStyle = "#0000FF";
	  context.fillRect(500, 10, 100, 50);
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  if (curX >= 500 && curY < 50){
	    nextLevel2();
	    return;
	  }
	  console.log(curX, "x");
	  console.log(curY, "y");
	  addBorder();
	  checkGame();
	};


	var up3 = function(){
	  context.clearRect(curX, curY, 50, 50);
	  if (curY >= (60)){
	    curY -= 50;
	  } else {
	    curY = 10;
	  }
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  console.log(curX, "x");
	  console.log(curY, "y");
	};

	var down3 = function(){
	  context.clearRect(curX, curY, 50, 50);
	  if (curY<(150)){
	    curY += 50;
	  } else {
	    curY = 190;
	  }
	  context.fillStyle = "#FF0000";
	  context.fillRect(curX, curY, 50, 50);
	  console.log(curX, "x");
	  console.log(curY, "y");
	  checkGame();
	};


	var nextLevel = function(){
	  console.log("next level");
	  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	  aaTerm5.reset();
	  aaTerm5.close();
	  aaTerm6.open();
	};

	var nextLevel2 = function(){
	  aaTerm7.reset();
	  aaTerm7.charMode= false;
	  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	  context.fillStyle="#0000ff";
	  context.fillRect(0, 0, myCanvas.width, myCanvas.height);
	  console.log("2 got hit");
	  aaTerm7.reset();
	  aaTerm7.close();
	  aaTerm8.open();
	  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	  setupCanvas();
	};

	var checkGame = function(){
	  if ((curX >= 150 && curX < 200 && curY > 50) || (curX > 350 && curX < 450 && curY < 190)) {
	    gameOver2();
	  }
	};

	var gameOver2 = function(){
	  console.log("game over got hit");
	  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	  addPlayer3();
	  addBorder();
	};

	//moves14*


	window.Terminal = Terminal;
	window.jQuery = $;
	window.$ = $;


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
	  termlib.js - JS-WebTerminal Object v1.66

	  (c) Norbert Landsteiner 2003-2015
	  mass:werk - media environments
	  <http://www.masswerk.at/termlib/>

	  Creates [multiple] Terminal instances.

	  Synopsis:

	  myTerminal = new Terminal(<config object>);
	  myTerminal.open();

	  <config object> overrides any values of object `TerminalDefaults'.
	  individual values of `id' must be supplied for multiple terminals.
	  `handler' specifies a function to be called for input handling.
	  (see `Terminal.prototype.defaultHandler()' and documentation.)

	  globals defined in this library:
	  	Terminal           (Terminal object)
	    TerminalDefaults   (default configuration)
	    termDefaultHandler (default command line handler)
	    TermGlobals        (common vars and code for all instances)
	    termKey            (named mappings for special keys)
	    termDomKeyRef      (special key mapping for DOM constants)

	  (please see the v. 1.4 history entry on these elements)

	  required CSS classes for font definitions: ".term", ".termReverse".

	  Compatibilty:
	  Standard web browsers with a JavaScript implementation compliant to
	  ECMA-262 2nd edition and support for the anonymous array and object
	  constructs and the anonymous function construct in the form of
	  "myfunc=function(x) {}" (c.f. ECMA-262 3rd edion for details).
	  This comprises almost all current browsers but Konquerer (khtml) and
	  versions of Apple Safari for Mac OS 10.0-10.28 (Safari 1.0) which
	  lack support for keyboard events.
	  v1.5: Dropped support of Netscape 4 (layers)

	  License:
	  This JavaScript-library is free.
	  Include a visible backlink to <http://www.masswerk.at/termlib/> in the
	  embedding web page or application.
	  The library should always be accompanied by the 'readme.txt' and the
	  sample HTML-documents.

	  Any changes should be commented and must be reflected in `Terminal.version'
	  in the format: "Version.Subversion (compatibility)".

	  Donations:
	  Donations are welcome: You may support and/or honor the development of
	  "termlib.js" via PayPal at: <http://www.masswerk.at/termlib/donate/>

	  Disclaimer:
	  This software is distributed AS IS and in the hope that it will be useful,
	  but WITHOUT ANY WARRANTY; without even the implied warranty of
	  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. The entire risk as to
	  the quality and performance of the product is borne by the user. No use of
	  the product is authorized hereunder except under this disclaimer.

	  ### The sections above must not be removed. ###

	  version 1.01: added Terminal.prototype.resizeTo(x,y)
	                added Terminal.conf.fontClass (=> configureable class name)
	                Terminal.prototype.open() now checks for element conf.termDiv
	                in advance and returns success.

	  version 1.02: added support for <TAB> and Euro sign
	                (Terminal.conf.printTab, Terminal.conf.printEuro)
	                and a method to evaluate printable chars:
	                Terminal.prototype.isPrintable(keycode)

	  version 1.03: added global keyboard locking (TermGlobals.keylock)
	                modified Terminal.prototype.redraw for speed (use of locals)

	  version 1.04: modified the key handler to fix a bug with MSIE5/Mac
	                fixed a bug in TermGlobals.setVisible with older MSIE-alike
	                browsers without DOM support.

	  version 1.05: added config flag historyUnique.

	  version 1.06: fixed CTRl+ALT (Windows alt gr) isn't CTRL any more
	                fixed double backspace bug for Safari;
	                added TermGlobals.setDisplay for setting style.display props
	                termlib.js now outputs lower case html (xhtml compatibility)

	  version 1.07: added method rebuild() to rebuild with new color settings.

	  version 1.1:  fixed a bug in 'more' output mode (cursor could be hidden after
	                quit)
	                added socket-extension for server-client talk in a separate file
	                -> "temlib_socket.js" (to be loaded after termlib.js)
	                (this is a separate file because we break our compatibility
	                guide lines with this IO/AJAX library.)

	  version 1.2   added color support ("%[+-]c(<color>)" markup)
	                moved paste support from sample file to lib
	                * TermGlobals.insertText( <text>)
	                * TermGlobals.importEachLine( <text> )
	                * TermGlobals.importMultiLine( <text> )

	  version 1.3   added word wrapping to write()
	                * activate with myTerm.wrapOn()
	                * deactivate with myTerm.wrapOff()
	                use conf.wrapping (boolean) for a global setting

	  version 1.4   Terminal is now an entirely self-contained object
	                Global references to inner objects for backward compatipility:
	                * TerminalDefaults   => Terminal.prototype.Defaults
	                * termDefaultHandler => Terminal.prototype.defaultHandler
	                * termKey            => Terminal.prototype.globals.termKey
	                                        see also: Terminal.prototype.termKey
	                * TermGlobals        => Terminal.prototype.globals
	                * termDomKeyRef      => Terminal.prototype.globals.termDomKeyRef

	                So in effect to outside scripts everything remains the same;
	                no need to rewrite any existing scripts.
	                You may now use "this.globals" inside any handlers
	                to refer to the static global object (TermGlobals).
	                You may also refer to key definitions as "this.termKey.*".
	                (Please mind that "this.termKey" is a reference to the static object
	                and not specific to the instance. A change to "this.termKey" will be
	                by any other instances of Terminal too.)

	                Added method TermGlobals.assignStyle() for custom styles & mark up.

	                Unified the color mark up: You may now use color codes (decimal or hex)
	                inside brackets. e.g.: %c(10)DARKRED%c() or %c(a)DARKRED%c()

	                Added key repeat for remapped keys (cursor movements etc).

	  version 1.41  fixed a bug in the word wrapping regarding write() output, when
	                the cursor was set with cursorSet() before.

	  version 1.42  fixed a bug which caused Opera to delete 2 chars at once.
	                introduced property Terminal.isOpera (Boolean)

	  version 1.43  enhanced the control handler so it also catches ESC if flag closeOnESC
	                is set to false. fixed a bug with Safari which fired repeated events
	                for the control handler for TAB if flag printTab was set to false.

	  version 1.5   Changed the license.
	                Dropped support for Netscape 4 (layers).
	                HTML-elements are now created by document.createElement, if applicable.
	                Included the formerly separate socket extension in the main library.
	                Added methods 'backupScreen()' and 'restoreScreen()' to save a screen
	                and restore it's content from backup. (see the globbing sample).

	  version 1.51  Added basic support of ANSI-SGR-sequences.

	  version 1.52  Added method swapBackup(), reorganized some of the accompanying files.

	  version 1.54  Fixed BACK_SPACE for Chrome, DELETE for Safari/WebKit.

	  version 1.55  Fixed dead keys issue for Mac OS (Leapard & later), vowels only.
	  version 1.56  Fixed new ESC issue for Safari.
	  version 1.57  Fixed dead keys fix: now only for Safari/Mac, German (de-de).
	  version 1.59  Dropped dead keys fix, fixed backspace for Safari.
	  version 1.6   Saved some bytes by discarding traces of ancient condition syntax
	                Added input mode "fieldMode"
	  version 1.61  Changes to defaults implementation of the constructor.
	  version 1.62  Fixed a bug related to AltGr-sequences with IE8+.
	  version 1.65  Added options for textColor and textBlur.
	  version 1.66  textBlur accepts also an array of values for multiple text-shadows.

	*/

	var Terminal = function(conf) {
		if (typeof conf != 'object') conf=new Object();
		for (var i in this.Defaults) {
			if (typeof conf[i] == 'undefined') conf[i]=this.Defaults[i];
		}
		if (typeof conf.handler != 'function') conf.handler=Terminal.prototype.defaultHandler;
		this.conf=conf;
		this.setInitValues();
	};


	Terminal.prototype = {
	// prototype definitions (save some 2k on indentation)

	version: '1.66 (original)',

	Defaults: {
		// dimensions
		cols:80,
		rows:12,
		// appearance
		x:100,
		y:100,
		termDiv:'termDiv',
		bgColor:'#181818',
		frameColor:'#555555',
		frameWidth:1,
		rowHeight:15,
		blinkDelay:550,
		// css class
		fontClass:'term',
		// initial cursor mode
		crsrBlinkMode:true,
		crsrBlockMode:true,
		// key mapping
		DELisBS:false,
		printTab:true,
		printEuro:true,
		catchCtrlH:true,
		closeOnESC:false,
		// prevent consecutive history doublets
		historyUnique:false,
		// optional id
		id:0,
		// strings
		ps:'>',
		greeting:"Terminal ready.",
		// handlers
		handler:null,
		ctrlHandler:null,
		initHandler:null,
		exitHandler: null,
		wrapping:false,
		mapANSI:false,
		ANSItrueBlack:false,
		textBlur: 0,
		textColor: ''
	},

	setInitValues: function() {
		this.isSafari= (navigator.userAgent.indexOf('Safari')>=0 || navigator.userAgent.indexOf('WebKit')>=0)? true:false;
		this.isOpera= (window.opera && navigator.userAgent.indexOf('Opera')>=0)? true:false;
		this.isChrome= (navigator.userAgent.indexOf('Chrome/')>=0 && navigator.userAgent.indexOf('WebKit')>=0)? true:false;
		this.domAPI= (document && document.createElement)? true:false;
		this.isMac= (navigator.userAgent.indexOf('Mac')>=0)? true:false;
		this.id=this.conf.id;
		this.maxLines=this.conf.rows;
		this.maxCols=this.conf.cols;
		this.termDiv=this.conf.termDiv;
		this.crsrBlinkMode=this.conf.crsrBlinkMode;
		this.crsrBlockMode=this.conf.crsrBlockMode;
		this.blinkDelay=this.conf.blinkDelay;
		this.DELisBS=this.conf.DELisBS;
		this.printTab=this.conf.printTab;
		this.printEuro=this.conf.printEuro;
		this.catchCtrlH=this.conf.catchCtrlH;
		this.closeOnESC=this.conf.closeOnESC;
		this.historyUnique=this.conf.historyUnique;
		this.ps=this.conf.ps;
		this.closed=false;
		this.r;
		this.c;
		this.charBuf=new Array();
		this.styleBuf=new Array();
		this.scrollBuf=null;
		this.blinkBuffer=0;
		this.blinkTimer;
		this.cursoractive=false;
		this.lock=true;
		this.insert=false;
		this.charMode=false;
		this.rawMode=false;
		this.lineBuffer='';
		this.inputChar=0;
		this.lastLine='';
		this.guiCounter=0;
		this.history=new Array();
		this.histPtr=0;
		this.env=new Object();
		this.buckupBuffer=null;
		this.handler=this.conf.handler;
		this.wrapping=this.conf.wrapping;
		this.mapANSI=this.conf.mapANSI;
		this.ANSItrueBlack=this.conf.ANSItrueBlack;
		this.ctrlHandler=this.conf.ctrlHandler;
		this.initHandler=this.conf.initHandler;
		this.exitHandler=this.conf.exitHandler;
		this.fieldMode=false;
		this.fieldStart=this.fieldEnd=this.fieldC=0;
		if (typeof this.conf.textBlur === 'object' && this.conf.textBlur.length) {
			var a=[];
			for (var i=0; i<this.conf.textBlur.length; i++) {
				var b=Number(this.conf.textBlur[i]);
				if (!isNaN(b) && b>0) a.push(b);
			}
			this.textBlur=(a.length)? a:0;
		}
		else {
			this.textBlur=Number(this.conf.textBlur);
			if (isNaN(this.textBlur) || this.textBlur<0 || this.textBlur>40) this.textBlur=0;
		}
		this.textColor=this.conf.textColor || '';
	},

	defaultHandler: function() {
		this.newLine();
		if (this.lineBuffer != '') {
			this.type('You typed: '+this.lineBuffer);
			this.newLine();
		}
		this.prompt();
	},

	open: function() {
		if (this.termDivReady()) {
			if (!this.closed) this._makeTerm();
			this.init();
			return true;
		}
		else {
			return false;
		}
	},

	close: function() {
		this.lock=true;
		this.cursorOff();
		if (this.exitHandler) this.exitHandler();
		this.globals.setVisible(this.termDiv,0);
		this.closed=true;
	},

	init: function() {
		// wait for gui
		if (this.guiReady()) {
			this.guiCounter=0;
			// clean up at re-entry
			if (this.closed) {
				this.setInitValues();
			}
			this.clear();
			this.globals.setVisible(this.termDiv,1);
			this.globals.enableKeyboard(this);
			if (this.initHandler) {
				this.initHandler();
			}
			else {
				this.write(this.conf.greeting);
				this.newLine();
				this.prompt();
			}
		}
		else {
			this.guiCounter++;
			if (this.guiCounter>18000) {
				if (confirm('Terminal:\nYour browser hasn\'t responded for more than 2 minutes.\nRetry?')) {
					this.guiCounter=0;
				}
				else {
					return;
				}
			};
			this.globals.termToInitialze=this;
			window.setTimeout('Terminal.prototype.globals.termToInitialze.init()',200);
		}
	},

	getRowArray: function(l,v) {
		// returns a fresh array of l length initialized with value v
		var a=new Array();
		for (var i=0; i<l; i++) a[i]=v;
		return a;
	},

	wrapOn: function() {
		// activate word wrap, wrapping workes with write() only!
		this.wrapping=true;
	},

	wrapOff: function() {
		this.wrapping=false;
	},

	setTextBlur: function(v) {
		var rerender=false;
		if (typeof v === 'object' && v.length) {
			var a=[];
			for (var i=0; i<v.length; i++) {
				var b=Number(v[i]);
				if (!isNaN(b) && b>0) a.push(b);
			}
			this.textBlur=(a.length)? a:0;
			rerender=true;
		}
		else {
			v=Number(v);
			if (isNaN(v) || v<0 || v>40) v=0;
			if (v!=this.textBlur) {
				this.textBlur=v;
				rerender=true;
			}
		}
		if (rerender) {
			for (var r=0, l=this.conf.rows; r<l; r++) this.redraw(r);
		}
	},

	setTextColor: function(v) {
		if (!v) v='';
		if (v!=this.textColor) {
			this.textColor=v;
			for (var r=0, l=this.conf.rows; r<l; r++) {
				this.redraw(r);
			}
		}
	},

	// main output methods

	type: function(text,style) {
		for (var i=0; i<text.length; i++) {
			var ch=text.charCodeAt(i);
			if (!this.isPrintable(ch)) ch=94;
			this.charBuf[this.r][this.c]=ch;
			this.styleBuf[this.r][this.c]=(style)? style:0;
			var last_r=this.r;
			this._incCol();
			if (this.r!=last_r) this.redraw(last_r);
		}
		this.redraw(this.r);
	},

	write: function(text,usemore) {
		// write to scroll buffer with markup
		// new line = '%n' prepare any strings or arrys first
		if (typeof text != 'object') {
			if (typeof text!='string') text=''+text;
			if (text.indexOf('\n')>=0) {
				var ta=text.split('\n');
				text=ta.join('%n');
			}
		}
		else {
			if (text.join) {
				text=text.join('%n');
			}
			else {
				text=''+text;
			}
			if (text.indexOf('\n')>=0) {
				var ta=text.split('\n');
				text=ta.join('%n');
			}
		}
		if (this.mapANSI) text=this.globals.ANSI_map(text, this.ANSItrueBlack);
		this._sbInit(usemore);
		var chunks=text.split('%');
		var esc=(text.charAt(0)!='%');
		var style=0;
		var styleMarkUp=this.globals.termStyleMarkup;
		for (var i=0; i<chunks.length; i++) {
			if (esc) {
				if (chunks[i].length>0) {
					this._sbType(chunks[i],style);
				}
				else if (i>0) {
					this._sbType('%', style);
				}
				esc=false;
			}
			else {
				var func=chunks[i].charAt(0);
				if (chunks[i].length==0 && i>0) {
					this._sbType("%",style);
					esc=true;
				}
				else if (func=='n') {
					this._sbNewLine(true);
					if (chunks[i].length>1) this._sbType(chunks[i].substring(1),style);
				}
				else if (func=='+') {
					var opt=chunks[i].charAt(1);
					opt=opt.toLowerCase();
					if (opt=='p') {
						style=0;
					}
					else if (styleMarkUp[opt]) {
						style|=styleMarkUp[opt];
					}
					if (chunks[i].length>2) this._sbType(chunks[i].substring(2),style);
				}
				else if (func=='-') {
					var opt=chunks[i].charAt(1);
					opt=opt.toLowerCase();
					if (opt=='p') {
						style=0;
					}
					else if (styleMarkUp[opt]) {
						style&=~styleMarkUp[opt];
					}
					if (chunks[i].length>2) this._sbType(chunks[i].substring(2),style);
				}
				else if (chunks[i].length>1 && func=='c') {
					var cinfo=this._parseColor(chunks[i].substring(1));
					style=(style&(~0xfffff0))|cinfo.style;
					if (cinfo.rest) this._sbType(cinfo.rest,style);
				}
				else if (chunks[i].length>1 && chunks[i].charAt(0)=='C' && chunks[i].charAt(1)=='S') {
					this.clear();
					this._sbInit();
					if (chunks[i].length>2) this._sbType(chunks[i].substring(2),style);
				}
				else {
					if (chunks[i].length>0) this._sbType(chunks[i],style);
				}
			}
		}
		this._sbOut();
	},




	// parse a color markup
	_parseColor: function(chunk) {
		var rest='';
		var style=0;
		if (chunk.length) {
			if (chunk.charAt(0)=='(') {
				var clabel='';
				for (var i=1; i<chunk.length; i++) {
					var c=chunk.charAt(i);
					if (c==')') {
						if (chunk.length>i) rest=chunk.substring(i+1);
						break;
					}
					clabel+=c;
				}
				if (clabel) {
					if (clabel.charAt(0) == '@') {
						var sc=this.globals.nsColors[clabel.substring(1).toLowerCase()];
						if (sc) style=(16+sc)*0x100;
					}
					else if (clabel.charAt(0) == '#') {
						var cl=clabel.substring(1).toLowerCase();
						var sc=this.globals.webColors[cl];
						if (sc) {
							style=sc*0x10000;
						}
						else {
							cl=this.globals.webifyColor(cl);
							if (cl) style=this.globals.webColors[cl]*0x10000;
						}
					}
					else if (clabel.length && clabel.length<=2) {
						var isHex=false;
						for (var i=0; i<clabel.length; i++) {
							if (this.globals.isHexOnlyChar(clabel.charAt(i))) {
								isHex=true;
								break;
							}
						}
						var cl=(isHex)? parseInt(clabel, 16):parseInt(clabel,10);
						if (!isNaN(cl) || cl<=15) {
							style=cl*0x100;
						}
					}
					else {
						style=this.globals.getColorCode(clabel)*0x100;
					}
				}
			}
			else {
				var c=chunk.charAt(0);
				if (this.globals.isHexChar(c)) {
					style=this.globals.hexToNum[c]*0x100;
					rest=chunk.substring(1);
				}
				else {
					rest=chunk;
				}
			}
		}
		return { rest: rest, style: style };
	},

	// internal scroll buffer output methods

	_sbInit: function(usemore) {
		var sb=this.scrollBuf=new Object();
		var sbl=sb.lines=new Array();
		var sbs=sb.styles=new Array();
		sb.more=usemore;
		sb.line=0;
		sb.status=0;
		sb.r=0;
		sb.c=this.c;
		sbl[0]=this.getRowArray(this.conf.cols,0);
		sbs[0]=this.getRowArray(this.conf.cols,0);
		for (var i=0; i<this.c; i++) {
			sbl[0][i]=this.charBuf[this.r][i];
			sbs[0][i]=this.styleBuf[this.r][i];
		}
	},


	_sbType: function(text,style) {
		// type to scroll buffer
		var sb=this.scrollBuf;
		for (var i=0; i<text.length; i++) {
			var ch=text.charCodeAt(i);
			if (!this.isPrintable(ch)) ch=94;
			sb.lines[sb.r][sb.c]=ch;
			sb.styles[sb.r][sb.c++]=(style)? style:0;
			if (sb.c>=this.maxCols) this._sbNewLine();
		}
	},

	_sbNewLine: function(forced) {
		var sb=this.scrollBuf;
		if (this.wrapping && forced) {
			sb.lines[sb.r][sb.c]=10;
			sb.lines[sb.r].length=sb.c+1;
		}
		sb.r++;
		sb.c=0;
		sb.lines[sb.r]=this.getRowArray(this.conf.cols,0);
		sb.styles[sb.r]=this.getRowArray(this.conf.cols,0);
	},

	_sbWrap: function() {
		// create a temp wrap buffer wb and scan for words/wrap-chars
		// then re-asign lines & styles to scrollBuf
		var wb=new Object();
		wb.lines=new Array();
		wb.styles=new Array();
		wb.lines[0]=this.getRowArray(this.conf.cols,0);
		wb.styles[0]=this.getRowArray(this.conf.cols,0);
		wb.r=0;
		wb.c=0;
		var sb=this.scrollBuf;
		var sbl=sb.lines;
		var sbs=sb.styles;
		var ch, st, wrap, lc, ls;
		var l=this.c;
		var lastR=0;
		var lastC=0;
		wb.cBreak=false;
		for (var r=0; r<sbl.length; r++) {
			lc=sbl[r];
			ls=sbs[r];
			for (var c=0; c<lc.length; c++) {
				ch=lc[c];
				st=ls[c];
				if (ch) {
					var wrap=this.globals.wrapChars[ch];
					if (ch==10) wrap=1;
					if (wrap) {
						if (wrap==2) {
							l++;
						}
						else if (wrap==4) {
							l++;
							lc[c]=45;
						}
						this._wbOut(wb, lastR, lastC, l);
						if (ch==10) {
							this._wbIncLine(wb);
						}
						else if (wrap==1 && wb.c<this.maxCols) {
							wb.lines[wb.r][wb.c]=ch;
							wb.styles[wb.r][wb.c++]=st;
							if (wb.c>=this.maxCols) this._wbIncLine(wb);
						}
						if (wrap==3) {
							lastR=r;
							lastC=c;
							l=1;
						}
						else {
							l=0;
							lastR=r;
							lastC=c+1;
							if (lastC==lc.length) {
								lastR++;
								lastC=0;
							}
							if (wrap==4) wb.cBreak=true;
						}
					}
					else {
						l++;
					}
				}
				else {
					continue;
				}
			}
		}
		if (l) {
			if (wb.cBreak && wb.c!=0) wb.c--;
			this._wbOut(wb, lastR, lastC, l);
		}
		sb.lines=wb.lines;
		sb.styles=wb.styles;
		sb.r=wb.r;
		sb.c=wb.c;
	},

	_wbOut: function(wb, br, bc, l) {
		// copy a word (of l length from br/bc) to wrap buffer wb
		var sb=this.scrollBuf;
		var sbl=sb.lines;
		var sbs=sb.styles;
		var ofs=0;
		var lc, ls;
		if (l+wb.c>this.maxCols) {
			if (l<this.maxCols) {
				this._wbIncLine(wb);
			}
			else {
				var i0=0;
				ofs=this.maxCols-wb.c;
				lc=sbl[br];
				ls=sbs[br];
				while (true) {
					for (var i=i0; i<ofs; i++) {
						wb.lines[wb.r][wb.c]=lc[bc];
						wb.styles[wb.r][wb.c++]=ls[bc++];
						if (bc==sbl[br].length) {
							bc=0;
							br++;
							lc=sbl[br];
							ls=sbs[br];
						}
					}
					this._wbIncLine(wb);
					if (l-ofs<this.maxCols) break;
					i0=ofs;
					ofs+=this.maxCols;
				}
			}
		}
		else if (wb.cBreak) {
			wb.c--;
		}
		lc=sbl[br];
		ls=sbs[br];
		for (var i=ofs; i<l; i++) {
			wb.lines[wb.r][wb.c]=lc[bc];
			wb.styles[wb.r][wb.c++]=ls[bc++];
			if (bc==sbl[br].length) {
				bc=0;
				br++;
				lc=sbl[br];
				ls=sbs[br];
			}
		}
		wb.cBreak=false;
	},

	_wbIncLine: function(wb) {
		// create a new line in temp buffer
		wb.r++;
		wb.c=0;
		wb.lines[wb.r]=this.getRowArray(this.conf.cols,0);
		wb.styles[wb.r]=this.getRowArray(this.conf.cols,0);
	},

	_sbOut: function() {
		var sb=this.scrollBuf;
		if (this.wrapping && !sb.status) this._sbWrap();
		var sbl=sb.lines;
		var sbs=sb.styles;
		var tcb=this.charBuf;
		var tsb=this.styleBuf;
		var ml=this.maxLines;
		var buflen=sbl.length;
		if (sb.more) {
			if (sb.status) {
				if (this.inputChar==this.globals.lcMoreKeyAbort) {
					this.r=ml-1;
					this.c=0;
					tcb[this.r]=this.getRowArray(this.conf.cols,0);
					tsb[this.r]=this.getRowArray(this.conf.cols,0);
					this.redraw(this.r);
					this.handler=sb.handler;
					this.charMode=false;
					this.inputChar=0;
					this.scrollBuf=null;
					this.prompt();
					return;
				}
				else if (this.inputChar==this.globals.lcMoreKeyContinue) {
					this.clear();
				}
				else {
					return;
				}
			}
			else {
				if (this.r>=ml-1) this.clear();
			}
		}
		if (this.r+buflen-sb.line<=ml) {
			for (var i=sb.line; i<buflen; i++) {
				var r=this.r+i-sb.line;
				tcb[r]=sbl[i];
				tsb[r]=sbs[i];
				this.redraw(r);
			}
			this.r+=sb.r-sb.line;
			this.c=sb.c;
			if (sb.more) {
				if (sb.status) this.handler=sb.handler;
				this.charMode=false;
				this.inputChar=0;
				this.scrollBuf=null;
				this.prompt();
				return;
			}
		}
		else if (sb.more) {
			ml--;
			if (sb.status==0) {
				sb.handler=this.handler;
				this.handler=this._sbOut;
				this.charMode=true;
				sb.status=1;
			}
			if (this.r) {
				var ofs=ml-this.r;
				for (var i=sb.line; i<ofs; i++) {
					var r=this.r+i-sb.line;
					tcb[r]=sbl[i];
					tsb[r]=sbs[i];
					this.redraw(r);
				}
			}
			else {
				var ofs=sb.line+ml;
				for (var i=sb.line; i<ofs; i++) {
					var r=this.r+i-sb.line;
					tcb[r]=sbl[i];
					tsb[r]=sbs[i];
					this.redraw(r);
				}
			}
			sb.line=ofs;
			this.r=ml;
			this.c=0;
			this.type(this.globals.lcMorePrompt1, this.globals.lcMorePromtp1Style);
			this.type(this.globals.lcMorePrompt2, this.globals.lcMorePrompt2Style);
			this.lock=false;
			return;
		}
		else if (buflen>=ml) {
			var ofs=buflen-ml;
			for (var i=0; i<ml; i++) {
				var r=ofs+i;
				tcb[i]=sbl[r];
				tsb[i]=sbs[r];
				this.redraw(i);
			}
			this.r=ml-1;
			this.c=sb.c;
		}
		else {
			var dr=ml-buflen;
			var ofs=this.r-dr;
			for (var i=0; i<dr; i++) {
				var r=ofs+i;
				for (var c=0; c<this.maxCols; c++) {
					tcb[i][c]=tcb[r][c];
					tsb[i][c]=tsb[r][c];
				}
				this.redraw(i);
			}
			for (var i=0; i<buflen; i++) {
				var r=dr+i;
				tcb[r]=sbl[i];
				tsb[r]=sbs[i];
				this.redraw(r);
			}
			this.r=ml-1;
			this.c=sb.c;
		}
		this.scrollBuf=null;
	},

	// basic console output

	typeAt: function(r,c,text,style) {
		var tr1=this.r;
		var tc1=this.c;
		this.cursorSet(r,c);
		for (var i=0; i<text.length; i++) {
			var ch=text.charCodeAt(i);
			if (!this.isPrintable(ch)) ch=94;
			this.charBuf[this.r][this.c]=ch;
			this.styleBuf[this.r][this.c]=(style)? style:0;
			var last_r=this.r;
			this._incCol();
			if (this.r!=last_r) this.redraw(last_r);
		}
		this.redraw(this.r);
		this.r=tr1;
		this.c=tc1;
	},

	statusLine: function(text,style,offset) {
		var ch,r;
		style=(style && !isNaN(style))? parseInt(style)&15:0;
		if (offset && offset>0) {
			r=this.conf.rows-offset;
		}
		else {
			r=this.conf.rows-1;
		}
		for (var i=0; i<this.conf.cols; i++) {
			if (i<text.length) {
				ch=text.charCodeAt(i);
				if (!this.isPrintable(ch)) ch = 94;
			}
			else {
				ch=0;
			}
			this.charBuf[r][i]=ch;
			this.styleBuf[r][i]=style;
		}
		this.redraw(r);
	},

	printRowFromString: function(r,text,style) {
		var ch;
		style=(style && !isNaN(style))? parseInt(style)&15:0;
		if (r>=0 && r<this.maxLines) {
			if (typeof text != 'string') text=''+text;
			for (var i=0; i<this.conf.cols; i++) {
				if (i<text.length) {
					ch=text.charCodeAt(i);
					if (!this.isPrintable(ch)) ch = 94;
				}
				else {
					ch=0;
				}
				this.charBuf[r][i]=ch;
				this.styleBuf[r][i]=style;
			}
			this.redraw(r);
		}
	},

	setChar: function(ch,r,c,style) {
		this.charBuf[r][c]=ch;
		this.styleBuf[r][c]=(style)? style:0;
		this.redraw(r);
	},

	newLine: function() {
		this.c=0;
		this._incRow();
	},

	// internal methods for output

	_charOut: function(ch, style) {
		this.charBuf[this.r][this.c]=ch;
		this.styleBuf[this.r][this.c]=(style)? style:0;
		this.redraw(this.r);
		this._incCol();
	},

	_incCol: function() {
		this.c++;
		if (this.c>=this.maxCols) {
			this.c=0;
			this._incRow();
		}
	},

	_incRow: function() {
		this.r++;
		if (this.r>=this.maxLines) {
			this._scrollLines(0,this.maxLines);
			this.r=this.maxLines-1;
		}
	},

	thing: function(){

	},

	_scrollLines: function(start, end) {
		window.status='Scrolling lines ...';
		start++;
		for (var ri=start; ri<end; ri++) {
			var rt=ri-1;
			this.charBuf[rt]=this.charBuf[ri];
			this.styleBuf[rt]=this.styleBuf[ri];
		}
		// clear last line
		var rt=end-1;
		this.charBuf[rt]=this.getRowArray(this.conf.cols,0);
		this.styleBuf[rt]=this.getRowArray(this.conf.cols,0);
		this.redraw(rt);
		for (var r=end-1; r>=start; r--) this.redraw(r-1);
		window.status='';
	},

	// control methods

	clear: function() {
		window.status='Clearing display ...';
		this.cursorOff();
		this.insert=false;
		for (var ri=0; ri<this.maxLines; ri++) {
			this.charBuf[ri]=this.getRowArray(this.conf.cols,0);
			this.styleBuf[ri]=this.getRowArray(this.conf.cols,0);
			this.redraw(ri);
		}
		this.r=0;
		this.c=0;
		window.status='';
	},

	reset: function() {
		// if (this.lock) return;
		this.lock=true;
		this.rawMode=false;
		this.charMode=false;
		this.maxLines=this.conf.rows;
		this.maxCols=this.conf.cols;
		this.lastLine='';
		this.lineBuffer='';
		this.inputChar=0;
		this.clear();
		this.write(this.conf.greeting);
	},

	prompt: function() {
		this.lock=true;
		if (this.c>0) this.newLine();
		this.type(this.ps);
		this._charOut(1);
		this.lock=false;
		this.cursorOn();
	},

	isPrintable: function(ch, unicodePage1only) {
		if (this.wrapping && this.globals.wrapChars[ch]==4) return true;
		if (unicodePage1only && ch>255) {
			return (ch==this.termKey.EURO && this.printEuro)? true:false;
		}
		return (
			(ch>=32 && ch!=this.termKey.DEL) ||
			(this.printTab && ch==this.termKey.TAB)
		);
	},

	// cursor methods

	cursorSet: function(r,c) {
		var crsron=this.cursoractive;
		if (crsron) this.cursorOff();
		this.r=r%this.maxLines;
		this.c=c%this.maxCols;
		this._cursorReset(crsron);
	},

	cursorOn: function() {
		if (this.blinkTimer) clearTimeout(this.blinkTimer);
		this.blinkBuffer=this.styleBuf[this.r][this.c];
		this._cursorBlink();
		this.cursoractive=true;
	},

	cursorOff: function() {
		if (this.blinkTimer) clearTimeout(this.blinkTimer);
		if (this.cursoractive) {
			this.styleBuf[this.r][this.c]=this.blinkBuffer;
			this.redraw(this.r);
			this.cursoractive=false;
		}
	},

	cursorLeft: function() {
		var crsron=this.cursoractive;
		if (crsron) this.cursorOff();
		var r=this.r;
		var c=this.c;
		if (c>0) {
			c--;
		}
		else if (r>0) {
			c=this.maxCols-1;
			r--;
		}
		if (this.isPrintable(this.charBuf[r][c])) {
			this.r=r;
			this.c=c;
		}
		this.insert=true;
		this._cursorReset(crsron);
	},

	cursorRight: function() {
		var crsron=this.cursoractive;
		if (crsron) this.cursorOff();
		var r=this.r;
		var c=this.c;
		if (c<this.maxCols-1) {
			c++;
		}
		else if (r<this.maxLines-1) {
			c=0;
			r++;
		}
		if (!this.isPrintable(this.charBuf[r][c])) {
			this.insert=false;
		}
		if (this.isPrintable(this.charBuf[this.r][this.c])) {
			this.r=r;
			this.c=c;
		}
		this._cursorReset(crsron);
	},

	backspace: function() {
		var crsron=this.cursoractive;
		if (crsron) this.cursorOff();
		var r=this.r;
		var c=this.c;
		if (c>0) c--
		else if (r>0) {
			c=this.maxCols-1;
			r--;
		};
		if (this.isPrintable(this.charBuf[r][c])) {
			this._scrollLeft(r, c);
			this.r=r;
			this.c=c;
		};
		this._cursorReset(crsron);
	},

	fwdDelete: function() {
		var crsron=this.cursoractive;
		if (crsron) this.cursorOff();
		if (this.isPrintable(this.charBuf[this.r][this.c])) {
			this._scrollLeft(this.r,this.c);
			if (!this.isPrintable(this.charBuf[this.r][this.c])) this.insert=false;
		}
		this._cursorReset(crsron);
	},

	_cursorReset: function(crsron) {
		if (crsron) {
			this.cursorOn();
		}
		else {
			this.blinkBuffer=this.styleBuf[this.r][this.c];
		}
	},

	_cursorBlink: function() {
		if (this.blinkTimer) clearTimeout(this.blinkTimer);
		if (this == this.globals.activeTerm) {
			if (this.crsrBlockMode) {
				this.styleBuf[this.r][this.c]=(this.styleBuf[this.r][this.c]&1)?
					this.styleBuf[this.r][this.c]&0xfffffe:this.styleBuf[this.r][this.c]|1;
			}
			else {
				this.styleBuf[this.r][this.c]=(this.styleBuf[this.r][this.c]&2)?
					this.styleBuf[this.r][this.c]&0xffffd:this.styleBuf[this.r][this.c]|2;
			}
			this.redraw(this.r);
		}
		var that = this;
		if (this.crsrBlinkMode) this.blinkTimer=setTimeout(function(){Terminal.prototype.globals.activeTerm._cursorBlink();}, that.blinkDelay);
	},

	_scrollLeft: function(r,c) {
		var rows=new Array();
		rows[0]=r;
		while (this.isPrintable(this.charBuf[r][c])) {
			var ri=r;
			var ci=c+1;
			if (ci==this.maxCols) {
				if (ri<this.maxLines-1) {
					ci=0;
					ri++;
					rows[rows.length]=ri;
				}
				else {
					break;
				}
			}
			this.charBuf[r][c]=this.charBuf[ri][ci];
			this.styleBuf[r][c]=this.styleBuf[ri][ci];
			c=ci;
			r=ri;
		}
		if (this.charBuf[r][c]!=0) this.charBuf[r][c]=0;
		for (var i=0; i<rows.length; i++) this.redraw(rows[i]);
	},

	_scrollRight: function(r,c) {
		var rows=new Array();
		var end=this._getLineEnd(r,c);
		var ri=end[0];
		var ci=end[1];
		if (ci==this.maxCols-1 && ri==this.maxLines-1) {
			if (r==0) return;
			this._scrollLines(0,this.maxLines);
			this.r--;
			r--;
			ri--;
		}
		rows[r]=1;
		while (this.isPrintable(this.charBuf[ri][ci])) {
			var rt=ri;
			var ct=ci+1;
			if (ct==this.maxCols) {
				ct=0;
				rt++;
				rows[rt]=1;
			}
			this.charBuf[rt][ct]=this.charBuf[ri][ci];
			this.styleBuf[rt][ct]=this.styleBuf[ri][ci];
			if (ri==r && ci==c) break;
			ci--;
			if (ci<0) {
				ci=this.maxCols-1;
				ri--;
				rows[ri]=1;
			}
		}
		for (var i=r; i<this.maxLines; i++) {
			if (rows[i]) this.redraw(i);
		}
	},

	_getLineEnd: function(r,c) {
		if (!this.isPrintable(this.charBuf[r][c])) {
			c--;
			if (c<0) {
				if (r>0) {
					r--;
					c=this.maxCols-1;
				}
				else {
					c=0;
				}
			}
		}
		if (this.isPrintable(this.charBuf[r][c])) {
			while (true) {
				var ri=r;
				var ci=c+1;
				if (ci==this.maxCols) {
					if (ri<this.maxLines-1) {
						ri++;
						ci=0;
					}
					else {
						break;
					}
				}
				if (!this.isPrintable(this.charBuf[ri][ci])) break;
				c=ci;
				r=ri;
			}
		}
		return [r,c];
	},

	_getLineStart: function(r,c) {
		// not used by now, just in case anyone needs this ...
		var ci, ri;
		if (!this.isPrintable(this.charBuf[r][c])) {
			ci=c-1;
			ri=r;
			if (ci<0) {
				if (ri==0) return [0,0];
				ci=this.maxCols-1;
				ri--;
			}
			if (!this.isPrintable(this.charBuf[ri][ci])) {
				return [r,c];
			}
			else {
				r=ri;
				c=ci;
			}
		}
		while (true) {
			var ri=r;
			var ci=c-1;
			if (ci<0) {
				if (ri==0) break;
				ci=this.maxCols-1;
				ri--;
			}
			if (!this.isPrintable(this.charBuf[ri][ci])) break;;
			r=ri;
			c=ci;
		}
		return [r,c];
	},

	_getLine: function(adjustCrsrPos) {
		var end=this._getLineEnd(this.r,this.c);
		var r=end[0];
		var c=end[1];
		if (adjustCrsrPos && (this.r!=r || this.c!=c+1)) {
			this.r=r;
			this.c=c+1;
			if (this.c>=this.maxCols) this.c=this.maxCols-1;
		}
		var line=new Array();
		while (this.isPrintable(this.charBuf[r][c])) {
			line[line.length]=String.fromCharCode(this.charBuf[r][c]);
			if (c>0) {
				c--;
			}
			else if (r>0) {
				c=this.maxCols-1;
				r--;
			}
			else {
				break;
			}
		}
		line.reverse();
		return line.join('');
	},

	_clearLine: function() {
		var end=this._getLineEnd(this.r,this.c);
		var r=end[0];
		var c=end[1];
		var line='';
		while (this.isPrintable(this.charBuf[r][c])) {
			this.charBuf[r][c]=0;
			if (c>0) {
				c--;
			}
			else if (r>0) {
				this.redraw(r);
				c=this.maxCols-1;
				r--;
			}
			else {
				break;
			}
		}
		if (r!=end[0]) this.redraw(r);
		c++;
		this.cursorSet(r,c);
		this.insert=false;
	},

	// backup/restore screen & state

	backupScreen: function() {
		var backup=this.backupBuffer=new Object();
		var rl=this.conf.rows;
		var cl=this.conf.cols;
		backup.cbuf=new Array(rl);
		backup.sbuf=new Array(rl);
		backup.maxCols=this.maxCols;
		backup.maxLines=this.maxLines;
		backup.r=this.r;
		backup.c=this.c;
		backup.charMode=this.charMode;
		backup.rawMode=this.rawMode;
		backup.handler=this.handler;
		backup.ctrlHandler=this.ctrlHandler;
		backup.cursoractive=this.cursoractive;

		backup.crsrBlinkMode=this.crsrBlinkMode;
		backup.crsrBlockMode=this.crsrBlockMode;
		backup.blinkDelay=this.blinkDelay;
		backup.DELisBS=this.DELisBS;
		backup.printTab=this.printTab;
		backup.printEuro=this.printEuro;
		backup.catchCtrlH=this.catchCtrlH;
		backup.closeOnESC=this.closeOnESC;
		backup.historyUnique=this.historyUnique;
		backup.ps=this.ps;
		backup.lineBuffer=this.lineBuffer;
		backup.inputChar=this.inputChar;
		backup.lastLine=this.lastLine;
		backup.historyLength=this.history.length;
		backup.histPtr=this.histPtr;
		backup.wrapping=this.wrapping;
		backup.mapANSI=this.mapANSI;
		backup.ANSItrueBlack=this.ANSItrueBlack;
		if (this.cursoractive) this.cursorOff();
		for (var r=0; r<rl; r++) {
			var cbr=this.charBuf[r];
			var sbr=this.styleBuf[r];
			var tcbr=backup.cbuf[r]=new Array(cl);
			var tsbr=backup.sbuf[r]=new Array(cl);
			for (var c=0; c<cl; c++) {
				tcbr[c]=cbr[c];
				tsbr[c]=sbr[c];
			}
		}
	},

	restoreScreen: function() {
		var backup=this.backupBuffer;
		if (!backup) return;
		var rl=this.conf.rows;
		for (var r=0; r<rl; r++) {
			this.charBuf[r]=backup.cbuf[r];
			this.styleBuf[r]=backup.sbuf[r];
			this.redraw(r);
		}
		this.maxCols=backup.maxCols;
		this.maxLines=backup.maxLines;
		this.r=backup.r;
		this.c=backup.c;
		this.charMode=backup.charMode;
		this.rawMode=backup.rawMode;
		this.handler=backup.handler;
		this.ctrlHandler=backup.ctrlHandler;
		this.cursoractive=backup.cursoractive;
		this.crsrBlinkMode=backup.crsrBlinkMode;
		this.crsrBlockMode=backup.crsrBlockMode;
		this.blinkDelay=backup.blinkDelay;
		this.DELisBS=backup.DELisBS;
		this.printTab=backup.printTab;
		this.printEuro=backup.printEuro;
		this.catchCtrlH=backup.catchCtrlH;
		this.closeOnESC=backup.closeOnESC;
		this.historyUnique=backup.historyUnique;
		this.ps=backup.ps;
		this.lineBuffer=backup.lineBuffer;
		this.inputChar=backup.inputChar;
		this.lastLine=backup.lastLine;
		if (this.history.length>backup.historyLength) {
			this.history.length=backup.historyLength;
			this.histPtr=backup.histPtr;
		}
		this.wrapping=backup.wrapping;
		this.mapANSI=backup.mapANSI;
		this.ANSItrueBlack=backup.ANSItrueBlack;
		if (this.cursoractive) this.cursorOn();
		this.backupBuffer=null;
	},

	swapBackup: function() {
		// swap current state and backup buffer (e.g.: toggle do/undo)
		var backup=this.backupBuffer;
		this.backupScreen;
		if (backup) {
			var backup2=this.backupBuffer;
			this.backupBuffer=backup;
			this.restoreScreen();
			this.backupBuffer=backup2;
		}
	},

	// simple markup escaping

	escapeMarkup: function(t) {
		return t.replace(/%/g, '%%');
	},

	// field mode

	enterFieldMode: function(start, end, style) {
		this.cursorOff();
		if (start===undefined || start<0) start=this.c;
		if (end=== undefined || end<start || end>this.maxCols) end=this.maxCols;
		if (!style) style=0;
		this.fieldStart=start;
		this.fieldEnd=end;
		this.fieldStyle=style;
		this.fieldC=0;
		this.lastLine='';
		this.fieldMode=true;
		this.rawMode=this.charMode=false;
		if (style&1) {
			this._crsrWasBlockMode=this.crsrBlockMode;
			this._crsrWasBlinkMode=this.crsrBlinkMode;
			this.crsrBlockMode=false;
			this.crsrBlinkMode=true;
		}
		this.drawField();
		this.lock=false;
	},

	exitFieldMode: function() {
		this.drawField(true);
		this.fieldMode=false;
		this.c=this.fieldEnd;
		if (this.c==this.maxLine) this.newLine();
		this.lock=true;
	},

	drawField: function(isfinal) {
		this.cursorOff();
		if (isfinal) this.fieldC=0;
		var fl=this.fieldEnd-this.fieldStart;
		if (this.fieldC==this.lastLine.length) fl--;
		var ofs=this.fieldC-fl;
		if (ofs<0) ofs=0;
		var line = (ofs)?  this.lastLine.substring(ofs):this.lastLine;
		var sb=this.styleBuf[this.r];
		var cb=this.charBuf[this.r];
		var max=line.length;
		for (var i=this.fieldStart, k=0; i<this.fieldEnd; i++, k++) {
			sb[i]=this.fieldStyle;
			cb[i]=(k<max)? line.charCodeAt(k):0;
		}
		this.redraw(this.r);
		if (isfinal) {
			if (this.fieldStyle&1) {
				this.crsrBlockMode=this._crsrWasBlockMode;
				this.crsrBlinkMode=this._crsrWasBlinkMode;
				delete this._crsrWasBlockMode;
				delete this._crsrWasBlinkMode;
			}
		}
		else {
			this.c=this.fieldStart+this.fieldC-ofs;
			this.cursorOn();
		}
	},

	// keyboard focus

	focus: function() {
		this.globals.setFocus(this);
	},

	// a inner reference (just for comfort) to be mapped to Terminal.prototype.globals.termKey
	termKey: null,


	// GUI related methods

	_makeTerm: function(rebuild) {
		window.status='Building terminal ...';
		var divPrefix=this.termDiv+'_r';
		if (this.domAPI) {
			// if applicable we're using createElement
			this.globals.hasSubDivs=false;
			var td, row, table, tbody, table2, tbody2, tr, td, node;
			table=document.createElement('table');
			table.setAttribute('border', 0);
			table.setAttribute('cellSpacing', 0);
			table.setAttribute('cellPadding', this.conf.frameWidth);
			tbody=document.createElement('tbody');
			table.appendChild(tbody);
			row=document.createElement('tr');
			tbody.appendChild(row);
			ptd=document.createElement('td');
			ptd.style.backgroundColor=this.conf.frameColor;
			row.appendChild(ptd);
			table2=document.createElement('table');
			table2.setAttribute('border', 0);
			table2.setAttribute('cellSpacing', 0);
			table2.setAttribute('cellPadding', 2);
			tbody2=document.createElement('tbody');
			table2.appendChild(tbody2);
			tr=document.createElement('tr');
			tbody2.appendChild(tr);
			td=document.createElement('td');
			td.style.backgroundColor=this.conf.bgColor;
			tr.appendChild(td);
			ptd.appendChild(table2);
			ptd=td;
			table2=document.createElement('table');
			table2.setAttribute('border', 0);
			table2.setAttribute('cellSpacing', 0);
			table2.setAttribute('cellPadding', 0);
			tbody2=document.createElement('tbody');
			table2.appendChild(tbody2);
			var rstr='';
			for (var c=0; c<this.conf.cols; c++) rstr+='&nbsp;';
			for (var r=0; r<this.conf.rows; r++) {
				tr=document.createElement('tr');
				td=document.createElement('td');
				td.id=divPrefix+r;
				td.style.height=td.style.minHeight=td.style.maxHeight=this.conf.rowHeight;
				td.style.whiteSpace='nowrap';
				td.className=this.conf.fontClass;
				td.innerHTML=rstr;
				tr.appendChild(td);
				tbody2.appendChild(tr);
			}
			ptd.appendChild(table2);
			node=document.getElementById(this.termDiv);
			while (node.hasChildNodes()) node.removeChild(node.firstChild);
			node.appendChild(table);
		}
		else {
			// legacy code
			this.globals.hasSubDivs=(navigator.userAgent.indexOf('Gecko')<0);
			var s='',
				bgColorAttribute = (this.conf.bgColor && (this.conf.bgColor!=='none' || this.conf.bgColor!='transparent'))? ' bgcolor="'+this.conf.bgColor+'"':'',
				frameColorAttribute = (this.conf.frameColor && (this.conf.frameColor!=='none' || this.conf.frameColor!='transparent'))? ' bgcolor="'+this.conf.frameColor+'"':'';
			s+='<table border="0" cellspacing="0" cellpadding="'+this.conf.frameWidth+'">\n';
			s+='<tr><td'+frameColorAttribute+'><table border="0" cellspacing="0" cellpadding="2"><tr><td'+bgColorAttribute+'><table border="0" cellspacing="0" cellpadding="0">\n';
			var rstr='';
			for (var c=0; c<this.conf.cols; c++) rstr+='&nbsp;';
			for (var r=0; r<this.conf.rows; r++) {
				var termid=(this.globals.hasSubDivs)? '' : ' id="'+divPrefix+r+'"';
				s+='<tr><td nowrap height="'+this.conf.rowHeight+'"'+termid+' class="'+this.conf.fontClass+'">'+rstr+'<\/td><\/tr>\n';
			}
			s+='<\/table><\/td><\/tr>\n';
			s+='<\/table><\/td><\/tr>\n';
			s+='<\/table>\n';
			var termOffset=2+this.conf.frameWidth;
			if (this.globals.hasSubDivs) {
				for (var r=0; r<this.conf.rows; r++) {
					s+='<div id="'+divPrefix+r+'" style="position:absolute; top:'+(termOffset+r*this.conf.rowHeight)+'px; left: '+termOffset+'px;" class="'+this.conf.fontClass+'"><\/div>\n';
				}
				this.globals.termStringStart='<table border="0" cellspacing="0" cellpadding="0"><tr><td nowrap height="'+this.conf.rowHeight+'" class="'+this.conf.fontClass+'">';
				this.globals.termStringEnd='<\/td><\/tr><\/table>';
			}
			this.globals.writeElement(this.termDiv,s);
		}
		if (!rebuild) {
			this.globals.setElementXY(this.termDiv,this.conf.x,this.conf.y);
			this.globals.setVisible(this.termDiv,1);
		}
		window.status='';
	},

	rebuild: function() {
		// check for bounds and array lengths
		var rl=this.conf.rows;
		var cl=this.conf.cols;
		for (var r=0; r<rl; r++) {
			var cbr=this.charBuf[r];
			if (!cbr) {
				this.charBuf[r]=this.getRowArray(cl,0);
				this.styleBuf[r]=this.getRowArray(cl,0);
			}
			else if (cbr.length<cl) {
				for (var c=cbr.length; c<cl; c++) {
					this.charBuf[r][c]=0;
					this.styleBuf[r][c]=0;
				}
			}
		}
		var resetcrsr=false;
		if (this.r>=rl) {
			r=rl-1;
			resetcrsr=true;
		}
		if (this.c>=cl) {
			c=cl-1;
			resetcrsr=true;
		}
		if (resetcrsr && this.cursoractive) this.cursorOn();
		// and actually rebuild
		this._makeTerm(true);
		for (var r=0; r<rl; r++) {
			this.redraw(r);
		}
		// clear backup buffer to prevent errors
		this.backupBuffer=null;
	},

	moveTo: function(x,y) {
		this.globals.setElementXY(this.termDiv,x,y);
	},

	resizeTo: function(x,y) {
		if (this.termDivReady()) {
			x=parseInt(x,10);
			y=parseInt(y,10);
			if (isNaN(x) || isNaN(y) || x<4 || y<2) return false;
			this.maxCols=this.conf.cols=x;
			this.maxLines=this.conf.rows=y;
			this._makeTerm();
			this.clear();
			return true;
		}
		else {
			return false;
		}
	},

	redraw: function(r) {
		var s=this.globals.termStringStart;
		var curStyle=0;
		var tstls=this.globals.termStyles;
		var tscls=this.globals.termStyleClose;
		var tsopn=this.globals.termStyleOpen;
		var tspcl=this.globals.termSpecials;
		var tclrs=this.globals.colorCodes;
		var tnclrs=this.globals.nsColorCodes;
		var twclrs=this.globals.webColorCodes;
		var t_cb=this.charBuf;
		var t_sb=this.styleBuf;
		var blur=this.textBlur;
		var clr='';
		var textColor=this.textColor || '';
		for (var i=0; i<this.conf.cols; i++) {
			var c=t_cb[r][i];
			var cs=t_sb[r][i];
			if (cs!=curStyle || (i==0 && textColor)) {
				if (curStyle) {
					if (curStyle & 0xffff00) s+='</span>';
					for (var k=tstls.length-1; k>=0; k--) {
						var st=tstls[k];
						if (curStyle & st) s+=tscls[st];
					}
				}
				curStyle=cs;
				for (var k=0; k<tstls.length; k++) {
					var st=tstls[k];
					if (curStyle&st) s+=tsopn[st];
				}
				clr=textColor;
				if (curStyle & 0xff00) {
					var cc=(curStyle & 0xff00)>>>8;
					clr= (cc<16)? tclrs[cc] : '#'+tnclrs[cc-16];
				}
				else if (curStyle & 0xff0000) {
					clr='#'+twclrs[(curStyle & 0xff0000)>>>16];
				}
				if (clr) {
					if (curStyle&1) {
						s+='<span style="background-color:'+clr+' !important;">';
					}
					else if (typeof blur === 'object') {
						s+='<span style="color:'+clr+' !important; text-shadow: 0 0 '+blur.join('px '+clr+', 0 0 ')+'px '+clr+';">';
					}
					else if (blur) {
						 s+='<span style="color:'+clr+' !important; text-shadow: 0 0 '+blur+'px '+clr+';">';
					}
					else {
						s+='<span style="color:'+clr+' !important;">';
					}
				}
			}
			s+= (tspcl[c])? tspcl[c] : String.fromCharCode(c);
		}
		if (curStyle>0) {
			if (curStyle & 0xffff00) s+='</span>';
			for (var k=tstls.length-1; k>=0; k--) {
				var st=tstls[k];
				if (curStyle&st) s+=tscls[st];
			}
		}
		s+=this.globals.termStringEnd;
		this.globals.writeElement(this.termDiv+'_r'+r,s);
	},

	guiReady: function() {
		var ready=true;
		if (this.globals.guiElementsReady(this.termDiv)) {
			for (var r=0; r<this.conf.rows; r++) {
				if (this.globals.guiElementsReady(this.termDiv+'_r'+r)==false) {
					ready=false;
					break;
				}
			}
		}
		else {
			ready=false;
		}
		return ready;
	},

	termDivReady: function() {
		if (document.getElementById) {
			return (document.getElementById(this.termDiv))? true:false;
		}
		else if (document.all) {
			return (document.all[this.termDiv])? true:false;
		}
		else {
			return false;
		}
	},

	getDimensions: function() {
		var w=0;
		var h=0;
		var d=this.termDiv;
		if (document.getElementById) {
			var obj=document.getElementById(d);
			if (obj && obj.firstChild) {
				w=parseInt(obj.firstChild.offsetWidth,10);
				h=parseInt(obj.firstChild.offsetHeight,10);
			}
			else if (obj && obj.children && obj.children[0]) {
				w=parseInt(obj.children[0].offsetWidth,10);
				h=parseInt(obj.children[0].offsetHeight,10);
			}
		}
		else if (document.all) {
			var obj=document.all[d];
			if (obj && obj.children && obj.children[0]) {
				w=parseInt(obj.children[0].offsetWidth,10);
				h=parseInt(obj.children[0].offsetHeight,10);
			}
		}
		return { width: w, height: h };
	},


	// global store for static data and methods (former "TermGlobals")

	globals: {

		termToInitialze:null,
		activeTerm:null,
		kbdEnabled:false,
		keylock:false,
		keyRepeatDelay1: 450, // initial delay
		keyRepeatDelay2: 100, // consecutive delays
		keyRepeatTimer: null,
		lcMorePrompt1: ' -- MORE -- ',
		lcMorePromtp1Style: 1,
		lcMorePrompt2: ' (Type: space to continue, \'q\' to quit)',
		lcMorePrompt2Style: 0,
		lcMoreKeyAbort: 113,
		lcMoreKeyContinue: 32,

		// initialize global data structs

		_initGlobals: function() {
			var tg=Terminal.prototype.globals;
			tg._extendMissingStringMethods();
			tg._initWebColors();
			tg._initDomKeyRef();
			Terminal.prototype.termKey=tg.termKey;
		},

		// hex support (don't rely on generic support like Number.toString(16))

		getHexChar: function(c) {
			var tg=Terminal.prototype.globals;
			if (tg.isHexChar(c)) return tg.hexToNum[c];
			return -1;
		},

		isHexChar: function(c) {
			return ((c>='0' && c<='9') || (c>='a' && c<='f') || (c>='A' && c<='F'))? true:false;
		},

		isHexOnlyChar: function(c) {
			return ((c>='a' && c<='f') || (c>='A' && c<='F'))? true:false;
		},

		hexToNum: {
			'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
			'8': 8, '9': 9, 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15,
			'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
		},

		// data for color support

		webColors: [],
		webColorCodes: [''],

		colors: {
			// ANSI bright (bold) color set
			black: 1,
			red: 2,
			green: 3,
			yellow: 4,
			blue: 5,
			magenta: 6,
			cyan: 7,
			white: 8,
			// dark color set
			grey: 9,
			red2: 10,
			green2: 11,
			yellow2: 12,
			blue2: 13,
			magenta2: 14,
			cyan2: 15,
			// synonyms
			red1: 2,
			green1: 3,
			yellow1: 4,
			blue1: 5,
			magenta1: 6,
			cyan1: 7,
			gray:  9,
			darkred: 10,
			darkgreen: 11,
			darkyellow: 12,
			darkblue: 13,
			darkmagenta: 14,
			darkcyan: 15,
			// default color
			'default': 0,
			clear: 0
		},

		colorCodes: [
			'', '#000000', '#ff0000', '#00ff00', '#ffff00', '#0066ff', '#ff00ff', '#00ffff', '#ffffff',
			'#808080', '#990000', '#009900', '#999900', '#003399', '#990099', '#009999'
		],

		nsColors: {
			'aliceblue': 1, 'antiquewhite': 2, 'aqua': 3, 'aquamarine': 4,
			'azure': 5, 'beige': 6, 'black': 7, 'blue': 8,
			'blueviolet': 9, 'brown': 10, 'burlywood': 11, 'cadetblue': 12,
			'chartreuse': 13, 'chocolate': 14, 'coral': 15, 'cornflowerblue': 16,
			'cornsilk': 17, 'crimson': 18, 'darkblue': 19, 'darkcyan': 20,
			'darkgoldenrod': 21, 'darkgray': 22, 'darkgreen': 23, 'darkkhaki': 24,
			'darkmagenta': 25, 'darkolivegreen': 26, 'darkorange': 27, 'darkorchid': 28,
			'darkred': 29, 'darksalmon': 30, 'darkseagreen': 31, 'darkslateblue': 32,
			'darkslategray': 33, 'darkturquoise': 34, 'darkviolet': 35, 'deeppink': 36,
			'deepskyblue': 37, 'dimgray': 38, 'dodgerblue': 39, 'firebrick': 40,
			'floralwhite': 41, 'forestgreen': 42, 'fuchsia': 43, 'gainsboro': 44,
			'ghostwhite': 45, 'gold': 46, 'goldenrod': 47, 'gray': 48,
			'green': 49, 'greenyellow': 50, 'honeydew': 51, 'hotpink': 52,
			'indianred': 53, 'indigo': 54, 'ivory': 55, 'khaki': 56,
			'lavender': 57, 'lavenderblush': 58, 'lawngreen': 59, 'lemonchiffon': 60,
			'lightblue': 61, 'lightcoral': 62, 'lightcyan': 63, 'lightgoldenrodyellow': 64,
			'lightgreen': 65, 'lightgrey': 66, 'lightpink': 67, 'lightsalmon': 68,
			'lightseagreen': 69, 'lightskyblue': 70, 'lightslategray': 71, 'lightsteelblue': 72,
			'lightyellow': 73, 'lime': 74, 'limegreen': 75, 'linen': 76,
			'maroon': 77, 'mediumaquamarine': 78, 'mediumblue': 79, 'mediumorchid': 80,
			'mediumpurple': 81, 'mediumseagreen': 82, 'mediumslateblue': 83, 'mediumspringgreen': 84,
			'mediumturquoise': 85, 'mediumvioletred': 86, 'midnightblue': 87, 'mintcream': 88,
			'mistyrose': 89, 'moccasin': 90, 'navajowhite': 91, 'navy': 92,
			'oldlace': 93, 'olive': 94, 'olivedrab': 95, 'orange': 96,
			'orangered': 97, 'orchid': 98, 'palegoldenrod': 99, 'palegreen': 100,
			'paleturquoise': 101, 'palevioletred': 102, 'papayawhip': 103, 'peachpuff': 104,
			'peru': 105, 'pink': 106, 'plum': 107, 'powderblue': 108,
			'purple': 109, 'red': 110, 'rosybrown': 111, 'royalblue': 112,
			'saddlebrown': 113, 'salmon': 114, 'sandybrown': 115, 'seagreen': 116,
			'seashell': 117, 'sienna': 118, 'silver': 119, 'skyblue': 120,
			'slateblue': 121, 'slategray': 122, 'snow': 123, 'springgreen': 124,
			'steelblue': 125, 'tan': 126, 'teal': 127, 'thistle': 128,
			'tomato': 129, 'turquoise': 130, 'violet': 131, 'wheat': 132,
			'white': 133, 'whitesmoke': 134, 'yellow': 135, 'yellowgreen': 136
		},

		nsColorCodes: [
			'',
			'f0f8ff', 'faebd7', '00ffff', '7fffd4',
			'f0ffff', 'f5f5dc', '000000', '0000ff',
			'8a2be2', 'a52a2a', 'deb887', '5f9ea0',
			'7fff00', 'd2691e', 'ff7f50', '6495ed',
			'fff8dc', 'dc143c', '00008b', '008b8b',
			'b8860b', 'a9a9a9', '006400', 'bdb76b',
			'8b008b', '556b2f', 'ff8c00', '9932cc',
			'8b0000', 'e9967a', '8fbc8f', '483d8b',
			'2f4f4f', '00ced1', '9400d3', 'ff1493',
			'00bfff', '696969', '1e90ff', 'b22222',
			'fffaf0', '228b22', 'ff00ff', 'dcdcdc',
			'f8f8ff', 'ffd700', 'daa520', '808080',
			'008000', 'adff2f', 'f0fff0', 'ff69b4',
			'cd5c5c', '4b0082', 'fffff0', 'f0e68c',
			'e6e6fa', 'fff0f5', '7cfc00', 'fffacd',
			'add8e6', 'f08080', 'e0ffff', 'fafad2',
			'90ee90', 'd3d3d3', 'ffb6c1', 'ffa07a',
			'20b2aa', '87cefa', '778899', 'b0c4de',
			'ffffe0', '00ff00', '32cd32', 'faf0e6',
			'800000', '66cdaa', '0000cd', 'ba55d3',
			'9370db', '3cb371', '7b68ee', '00fa9a',
			'48d1cc', 'c71585', '191970', 'f5fffa',
			'ffe4e1', 'ffe4b5', 'ffdead', '000080',
			'fdf5e6', '808000', '6b8e23', 'ffa500',
			'ff4500', 'da70d6', 'eee8aa', '98fb98',
			'afeeee', 'db7093', 'ffefd5', 'ffdab9',
			'cd853f', 'ffc0cb', 'dda0dd', 'b0e0e6',
			'800080', 'ff0000', 'bc8f8f', '4169e1',
			'8b4513', 'fa8072', 'f4a460', '2e8b57',
			'fff5ee', 'a0522d', 'c0c0c0', '87ceeb',
			'6a5acd', '708090', 'fffafa', '00ff7f',
			'4682b4', 'd2b48c', '008080', 'd8bfd8',
			'ff6347', '40e0d0', 'ee82ee', 'f5deb3',
			'ffffff', 'f5f5f5', 'ffff00', '9acd32'
		],
		_webSwatchChars: ['0','3','6','9','c','f'],
		_initWebColors: function() {
			// generate long and short web color ref
			var tg=Terminal.prototype.globals;
			var ws=tg._webColorSwatch;
			var wn=tg.webColors;
			var cc=tg.webColorCodes;
			var n=1;
			var a, b, c, al, bl, bs, cl;
			for (var i=0; i<6; i++) {
				a=tg._webSwatchChars[i];
				al=a+a;
				for (var j=0; j<6; j++) {
					b=tg._webSwatchChars[j];
					bl=al+b+b;
					bs=a+b;
					for (var k=0; k<6; k++) {
						c=tg._webSwatchChars[k];
						cl=bl+c+c;
						wn[bs+c]=wn[cl]=n;
						cc[n]=cl;
						n++;
					}
				}
			}
		},

		webifyColor: function(s) {
			// return nearest web color in 3 digit format
			// (do without RegExp for compatibility)
			var tg=Terminal.prototype.globals;
			if (s.length==6) {
				var c='';
				for (var i=0; i<6; i+=2) {
					var a=s.charAt(i);
					var b=s.charAt(i+1);
					if (tg.isHexChar(a) && tg.isHexChar(b)) {
						c+=tg._webSwatchChars[Math.round(parseInt(a+b,16)/255*5)];
					}
					else {
						return '';
					}
				}
				return c;
			}
			else if (s.length==3) {
				var c='';
				for (var i=0; i<3; i++) {
					var a=s.charAt(i);
					if (tg.isHexChar(a)) {
						c+=tg._webSwatchChars[Math.round(parseInt(a,16)/15*5)];
					}
					else {
						return '';
					}
				}
				return c;
			}
			else {
				return '';
			}
		},

		// public methods for color support

		setColor: function(label, value) {
			var tg=Terminal.prototype.globals;
			if (typeof label == 'number' && label>=1 && label<=15) {
				tg.colorCodes[label]=value;
			}
			else if (typeof label == 'string') {
				label=label.toLowerCase();
				if (label.length==1 && tg.isHexChar(label)) {
					var n=tg.hexToNum[label];
					if (n) tg.colorCodes[n]=value;
				}
				else if (typeof tg.colors[label] != 'undefined') {
					var n=tg.colors[label];
					if (n) tg.colorCodes[n]=value;
				}
			}
		},

		getColorString: function(label) {
			var tg=Terminal.prototype.globals;
			if (typeof label == 'number' && label>=0 && label<=15) {
				return tg.colorCodes[label];
			}
			else if (typeof label == 'string') {
				label=label.toLowerCase();
				if (label.length==1 && tg.isHexChar(label)) {
					return tg.colorCodes[tg.hexToNum[label]];
				}
				else if (typeof tg.colors[label] != 'undefined') {
					return tg.colorCodes[tg.colors[label]];
				}
			}
			return '';
		},

		getColorCode: function(label) {
			var tg=Terminal.prototype.globals;
			if (typeof label == 'number' && label>=0 && label<=15) {
				return label;
			}
			else if (typeof label == 'string') {
				label=label.toLowerCase();
				if (label.length==1 && tg.isHexChar(label)) {
					return parseInt(label,16);
				}
				else if (typeof tg.colors[label] != 'undefined') {
					return tg.colors[label];
				}
			}
			return 0;
		},

		// import/paste methods (methods return success)

		insertText: function(text) {
			// auto-types a given string to the active terminal
			// returns success (false indicates a lock or no active terminal)
			var tg=Terminal.prototype.globals;
			var termRef = tg.activeTerm;
			if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false;
			// terminal open and unlocked, so type the text
			for (var i=0; i<text.length; i++) {
				tg.keyHandler({which: text.charCodeAt(i), _remapped:true});
			}
			return true;
		},

		importEachLine: function(text) {
			// import multiple lines of text per line each and execs
			// returns success (false indicates a lock or no active terminal)
			var tg=Terminal.prototype.globals;
			var termRef = tg.activeTerm;
			if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false;
			// clear the current command line
			termRef.cursorOff();
			termRef._clearLine();
			// normalize line breaks
			text=text.replace(/\r\n?/g, '\n');
			// split lines and auto-type the text
			var t=text.split('\n');
			for (var i=0; i<t.length; i++) {
				for (var k=0; k<t[i].length; k++) {
					tg.keyHandler({which: t[i].charCodeAt(k), _remapped:true});
				}
				tg.keyHandler({which: term.termKey.CR, _remapped:true});
			}
			return true;
		},

		importMultiLine: function(text) {
			// importing multi-line text as single input with "\n" in lineBuffer
			var tg=Terminal.prototype.globals;
			var termRef = tg.activeTerm;
			if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false;
			// lock and clear the line
			termRef.lock = true;
			termRef.cursorOff();
			termRef._clearLine();
			// normalize linebreaks and echo the text linewise
			text = text.replace(/\r\n?/g, '\n');
			var lines = text.split('\n');
			for (var i=0; i<lines.length; i++) {
				termRef.type(lines[i]);
				if (i<lines.length-1) termRef.newLine();
			}
			// fake <ENTER>;
			// (no history entry for this)
			termRef.lineBuffer = text;
			termRef.lastLine = '';
			termRef.inputChar = 0;
			termRef.handler();
			return true;
		},

		// text related service functions

		normalize: function(n,m) {
			var s=''+n;
			while (s.length<m) s='0'+s;
			return s;
		},

		fillLeft: function(t,n) {
			if (typeof t != 'string') t=''+t;
			while (t.length<n) t=' '+t;
			return t;
		},

		center: function(t,l) {
			var s='';
			for (var i=t.length; i<l; i+=2) s+=' ';
			return s+t;
		},

		// simple substitute for String.replace()
		stringReplace: function(s1,s2,t) {
			var l1=s1.length;
			var l2=s2.length;
			var ofs=t.indexOf(s1);
			while (ofs>=0) {
				t=t.substring(0,ofs)+s2+t.substring(ofs+l1);
				ofs=t.indexOf(s1,ofs+l2);
			}
			return t;
		},


		// config data for text wrap

		wrapChars: {
			// keys: charCode
			// values: 1 = white space, 2 = wrap after, 3 = wrap before, 4 = conditional word break
			9:   1, // tab
			10:  1, // new line - don't change this (used internally)!!!
			12:  4, // form feed (use this for conditional word breaks)
			13:  1, // cr
			32:  1, // blank
			40:  3, // (
			45:  2, // dash/hyphen
			61:  2, // =
			91:  3, // [
			94:  3, // caret (non-printing chars)
			123: 3  // {
		},


		// keyboard methods & controls

		setFocus: function(termref) {
			Terminal.prototype.globals.activeTerm=termref;
			Terminal.prototype.globals.clearRepeatTimer();
		},

		termKey: {
			// codes of special keys
			'NUL': 0x00,
			'SOH': 0x01,
			'STX': 0x02,
			'ETX': 0x03,
			'EOT': 0x04,
			'ENQ': 0x05,
			'ACK': 0x06,
			'BEL': 0x07,
			'BS': 0x08,
			'BACKSPACE': 0x08,
			'HT': 0x09,
			'TAB': 0x09,
			'LF': 0x0A,
			'VT': 0x0B,
			'FF': 0x0C,
			'CR': 0x0D,
			'SO': 0x0E,
			'SI': 0x0F,
			'DLE': 0x10,
			'DC1': 0x11,
			'DC2': 0x12,
			'DC3': 0x13,
			'DC4': 0x14,
			'NAK': 0x15,
			'SYN': 0x16,
			'ETB': 0x17,
			'CAN': 0x18,
			'EM': 0x19,
			'SUB': 0x1A,
			'ESC': 0x1B,
			'IS4': 0x1C,
			'IS3': 0x1D,
			'IS2': 0x1E,
			'IS1': 0x1F,
			'DEL': 0x7F,
			'POUND': 0x23,
			// other specials
			'EURO': 0x20AC,
			// cursor mapping
			'LEFT': 0x1C,
			'RIGHT': 0x1D,
			'UP': 0x1E,
			'DOWN': 0x1F
		},

		// map some DOM_VK_* properties to values defined in termKey
		termDomKeyRef: {},
		_domKeyMappingData: {
			'LEFT': 'LEFT',
			'RIGHT': 'RIGHT',
			'UP': 'UP',
			'DOWN': 'DOWN',
			'BACK_SPACE': 'BS',
			'RETURN': 'CR',
			'ENTER': 'CR',
			'ESCAPE': 'ESC',
			'DELETE': 'DEL',
			'TAB': 'TAB'
		},
		_initDomKeyRef: function() {
			var tg=Terminal.prototype.globals;
			var m=tg._domKeyMappingData;
			var r=tg.termDomKeyRef;
			var k=tg.termKey;
			for (var i in m) r['DOM_VK_'+i]=k[m[i]];
		},

		registerEvent: function(obj, eventType, handler, capture) {
			if (obj.addEventListener) {
				obj.addEventListener(eventType.toLowerCase(), handler, capture);
			}
			/*
			else if (obj.attachEvent) {
				obj.attachEvent('on'+eventType.toLowerCase(), handler);
			}
			*/
			else {
				var et=eventType.toUpperCase();
				if (window.Event && window.Event[et] && obj.captureEvents) obj.captureEvents(Event[et]);
				obj['on'+eventType.toLowerCase()]=handler;
			}
		},
		releaseEvent: function(obj, eventType, handler, capture) {
			if (obj.removeEventListener) {
				obj.removeEventListener(eventType.toLowerCase(), handler, capture);
			}
			/*
			else if (obj.detachEvent) {
				obj.detachEvent('on'+eventType.toLowerCase(), handler);
			}
			*/
			else {
				var et=eventType.toUpperCase();
				if (window.Event && window.Event[et] && obj.releaseEvents) obj.releaseEvents(Event[et]);
				et='on'+eventType.toLowerCase();
				if (obj[et] && obj[et]==handler) obj.et=null;
			}
		},

		enableKeyboard: function(term) {
			var tg=Terminal.prototype.globals;
			if (!tg.kbdEnabled) {
				tg.registerEvent(document, 'keypress', tg.keyHandler, true);
				tg.registerEvent(document, 'keydown', tg.keyFix, true);
				tg.registerEvent(document, 'keyup', tg.clearRepeatTimer, true);
				tg.kbdEnabled=true;
			}
			tg.activeTerm=term;
		},

		disableKeyboard: function(term) {
			var tg=Terminal.prototype.globals;
			if (tg.kbdEnabled) {
				tg.releaseEvent(document, 'keypress', tg.keyHandler, true);
				tg.releaseEvent(document, 'keydown', tg.keyFix, true);
				tg.releaseEvent(document, 'keyup', tg.clearRepeatTimer, true);
				tg.kbdEnabled=false;
			}
			tg.activeTerm=null;
		},

		// remap some special key mappings on keydown

		keyFix: function(e) {
			var tg=Terminal.prototype.globals;
			var term=tg.activeTerm;
			var ch;
			if (tg.keylock || term.lock) return true;
			if (window.event) {
				if  (!e) e=window.event;
				ch=e.keyCode;
				if (e.DOM_VK_UP) {
					for (var i in tg.termDomKeyRef) {
						if (e[i] && ch == e[i]) {
							tg.keyHandler({which:tg.termDomKeyRef[i],_remapped:true,_repeat:(ch==0x1B)? true:false});
							if (e.preventDefault) e.preventDefault();
							if (e.stopPropagation) e.stopPropagation();
							e.cancelBubble=true;
							return false;
						}
					}
					e.cancelBubble=false;
					return true;
				}
				else {
					// no DOM support
					var termKey=term.termKey;
					var keyHandler=tg.keyHandler;
					if (ch==8 && !term.isOpera) { keyHandler({which:termKey.BS,_remapped:true,_repeat:true}); }
					else if (ch==9) { keyHandler({which:termKey.TAB,_remapped:true,_repeat: (term.printTab)? false:true}); }
					else if (ch==27) { keyHandler({which:termKey.ESC,_remapped:true,_repeat: (term.printTab)? false:true}); }
					else if (ch==37) { keyHandler({which:termKey.LEFT,_remapped:true,_repeat:true}); }
					else if (ch==39) { keyHandler({which:termKey.RIGHT,_remapped:true,_repeat:true}); }
					else if (ch==38) { keyHandler({which:termKey.UP,_remapped:true,_repeat:true}); }
					else if (ch==40) { keyHandler({which:termKey.DOWN,_remapped:true,_repeat:true}); }
					else if (ch==127 || ch==46) { keyHandler({which:termKey.DEL,_remapped:true,_repeat:true}); }
					else if (ch>=57373 && ch<=57376) {
						if (ch==57373) { keyHandler({which:termKey.UP,_remapped:true,_repeat:true}); }
						else if (ch==57374) { keyHandler({which:termKey.DOWN,_remapped:true,_repeat:true}); }
						else if (ch==57375) { keyHandler({which:termKey.LEFT,_remapped:true,_repeat:true}); }
						else if (ch==57376) { keyHandler({which:termKey.RIGHT,_remapped:true,_repeat:true}); }
					}
					else {
						e.cancelBubble=false;
						return true;
					}
					if (e.preventDefault) e.preventDefault();
					if (e.stopPropagation) e.stopPropagation();
					e.cancelBubble=true;
					return false;
				}
			}
		},

		clearRepeatTimer: function(e) {
			var tg=Terminal.prototype.globals;
			if (tg.keyRepeatTimer) {
				clearTimeout(tg.keyRepeatTimer);
				tg.keyRepeatTimer=null;
			}
		},

		doKeyRepeat: function(ch) {
			Terminal.prototype.globals.keyHandler({which:ch,_remapped:true,_repeated:true})
		},

		keyHandler: function(e) {
			var tg=Terminal.prototype.globals;
			var term=tg.activeTerm;
			if (tg.keylock || term.lock || term.isMac && e && e.metaKey) return true;
			if (window.event) {
				if (window.event.preventDefault) window.event.preventDefault();
				if (window.event.stopPropagation) window.event.stopPropagation();
			}
			else if (e) {
				if (e.preventDefault) e.preventDefault();
				if (e.stopPropagation) e.stopPropagation();
			}
			var ch;
			var ctrl=false;
			var shft=false;
			var remapped=false;
			var termKey=term.termKey;
			var keyRepeat=0;
			if (e) {
				ch=e.which;
				ctrl=((e.ctrlKey && !e.altKey) || e.modifiers==2);
				shft=(e.shiftKey || e.modifiers==4);
				if (e._remapped) {
					remapped=true;
					if (window.event) {
						//ctrl=(ctrl || window.event.ctrlKey);
						ctrl=(ctrl || (window.event.ctrlKey && !window.event.altKey));
						shft=(shft || window.event.shiftKey);
					}
				}
				if (e._repeated) {
					keyRepeat=2;
				}
				else if (e._repeat) {
					keyRepeat=1;
				}
			}
			else if (window.event) {
				ch=window.event.keyCode;
				//ctrl=(window.event.ctrlKey);
				ctrl=(window.event.ctrlKey && !window.event.altKey); // allow alt gr == ctrl alt
				shft=(window.event.shiftKey);
				if (window.event._repeated) {
					keyRepeat=2;
				}
				else if (window.event._repeat) {
					keyRepeat=1;
				}
			}
			else {
				return true;
			}
			if (ch=='' && remapped==false) {
				// map specials
				if (e==null) e=window.event;
				if (e.charCode==0 && e.keyCode) {
					if (e.DOM_VK_UP) {
						var dkr=tg.termDomKeyRef;
						for (var i in dkr) {
							if (e[i] && e.keyCode == e[i]) {
								ch=dkr[i];
								break;
							}
						}
					}
					else {
						// NS4
						if (e.keyCode==28) { ch=termKey.LEFT; }
						else if (e.keyCode==29) { ch=termKey.RIGHT; }
						else if (e.keyCode==30) { ch=termKey.UP; }
						else if (e.keyCode==31) { ch=termKey.DOWN; }
						// Mozilla alike but no DOM support
						else if (e.keyCode==37) { ch=termKey.LEFT; }
						else if (e.keyCode==39) { ch=termKey.RIGHT; }
						else if (e.keyCode==38) { ch=termKey.UP; }
						else if (e.keyCode==40) { ch=termKey.DOWN; }
						// just to have the TAB mapping here too
						else if (e.keyCode==9) { ch=termKey.TAB; }
					}
				}
			}
			// leave on unicode private use area (might be function key etc)
			if ((ch>=0xE000) && (ch<= 0xF8FF)) return;
			if (keyRepeat) {
				tg.clearRepeatTimer();
				tg.keyRepeatTimer = window.setTimeout(
					'Terminal.prototype.globals.doKeyRepeat('+ch+')',
					(keyRepeat==1)? tg.keyRepeatDelay1:tg.keyRepeatDelay2
				);
			}
			// key actions
			if (term.charMode) {
				term.insert=false;
				term.inputChar=ch;
				term.lineBuffer='';
				term.handler();
				if (ch<=32 && window.event) window.event.cancelBubble=true;
				return false;
			}
			if (!ctrl) {
				// special keys
				if (ch==termKey.CR) {
					term.lock=true;
					term.cursorOff();
					term.insert=false;
					if (term.rawMode) {
						term.lineBuffer=term.lastLine;
					}
					else if (term.fieldMode) {
						term.lineBuffer=term.lastLine;
						term.exitFieldMode();
					}
					else {
						term.lineBuffer=term._getLine(true);
						if (
							term.lineBuffer!='' &&
							(!term.historyUnique || term.history.length==0 ||
							term.lineBuffer!=term.history[term.history.length-1])
						   ) {
							term.history[term.history.length]=term.lineBuffer;
						}
						term.histPtr=term.history.length;
					}
					term.lastLine='';
					term.inputChar=0;
					term.handler();
					if (window.event) window.event.cancelBubble=true;
					return false;
				}
				else if (term.fieldMode) {
					if (ch==termKey.ESC) {
						term.lineBuffer=term.lastLine='';
						term.exitFieldMode();
						term.lastLine='';
						term.inputChar=0;
						term.handler();
						if (window.event) window.event.cancelBubble=true;
						return false;
					}
					else if (ch==termKey.LEFT) {
						if (term.fieldC>0) term.fieldC--;
					}
					else if (ch==termKey.RIGHT) {
						if (term.fieldC<term.lastLine.length) term.fieldC++;
					}
					else if (ch==termKey.BS) {
						if (term.fieldC>0) {
							term.lastLine=term.lastLine.substring(0,term.fieldC-1)+term.lastLine.substring(term.fieldC);
							term.fieldC--;
						}
					}
					else if (ch==termKey.DEL) {
						if (term.fieldC<term.lastLine.length) {
							term.lastLine=term.lastLine.substring(0,term.fieldC)+term.lastLine.substring(term.fieldC+1);
						}
					}
					else if (ch>=32) {
						term.lastLine=term.lastLine.substring(0,term.fieldC)+String.fromCharCode(ch)+term.lastLine.substring(term.fieldC);
						term.fieldC++;
					}
					term.drawField();
					return false;
				}
				else if (ch==termKey.ESC && term.conf.closeOnESC) {
					term.close();
					if (window.event) window.event.cancelBubble=true;
					return false;
				}
				if (ch<32 && term.rawMode) {
					if (window.event) window.event.cancelBubble=true;
					return false;
				}
				else {
					if (ch==termKey.LEFT) {
						term.cursorLeft();
						if (window.event) window.event.cancelBubble=true;
						return false;
					}
					else if (ch==termKey.RIGHT) {
						term.cursorRight();
						if (window.event) window.event.cancelBubble=true;
						return false;
					}
					else if (ch==termKey.UP) {
						term.cursorOff();
						if (term.histPtr==term.history.length) term.lastLine=term._getLine();
						term._clearLine();
						if (term.history.length && term.histPtr>=0) {
							if (term.histPtr>0) term.histPtr--;
							term.type(term.history[term.histPtr]);
						}
						else if (term.lastLine) {
							term.type(term.lastLine);
						}
						term.cursorOn();
						if (window.event) window.event.cancelBubble=true;
						return false;
					}
					else if (ch==termKey.DOWN) {
						term.cursorOff();
						if (term.histPtr==term.history.length) term.lastLine=term._getLine();
						term._clearLine();
						if (term.history.length && term.histPtr<=term.history.length) {
							if (term.histPtr<term.history.length) term.histPtr++;
							if (term.histPtr<term.history.length) {
								term.type(term.history[term.histPtr]);
							}
							else if (term.lastLine) {
								term.type(term.lastLine);
							}
						}
						else if (term.lastLine) {
							term.type(term.lastLine);
						}
						term.cursorOn();
						if (window.event) window.event.cancelBubble=true;
						return false;
					}
					else if (ch==termKey.BS) {
						term.backspace();
						if (window.event) window.event.cancelBubble=true;
						return false;
					}
					else if (ch==termKey.DEL) {
						if (term.DELisBS) {
							term.backspace();
						}
						else {
							term.fwdDelete();
						}
						if (window.event) window.event.cancelBubble=true;
						return false;
					}
				}
			}
			if (term.rawMode) {
				if (term.isPrintable(ch)) {
					term.lastLine+=String.fromCharCode(ch);
				}
				if (ch==32 && window.event) {
					window.event.cancelBubble=true;
				}
				else if (window.opera && window.event) {
					window.event.cancelBubble=true;
				}
				return false;
			}
			else {
				if (term.conf.catchCtrlH && (ch==termKey.BS || (ctrl && ch==72))) {
					// catch ^H
					term.backspace();
					if (window.event) window.event.cancelBubble=true;
					return false;
				}
				else if (term.ctrlHandler && (ch<32 || (ctrl && term.isPrintable(ch,true)))) {
					if ((ch>=65 && ch<=96) || ch==63) {
						// remap canonical
						if (ch==63) {
							ch=31;
						}
						else {
							ch-=64;
						}
					}
					term.inputChar=ch;
					term.ctrlHandler();
					if (window.event) window.event.cancelBubble=true;
					return false;
				}
				else if (ctrl || !term.isPrintable(ch,true)) {
					if (window.event) window.event.cancelBubble=true;
					return false;
				}
				else if (term.isPrintable(ch,true)) {
					if (term.blinkTimer) clearTimeout(term.blinkTimer);
					if (term.insert) {
						term.cursorOff();
						term._scrollRight(term.r,term.c);
					}
					term._charOut(ch);
					term.cursorOn();
					if (ch==32 && window.event) {
						window.event.cancelBubble=true;
					}
					else if (window.opera && window.event) {
						window.event.cancelBubble=true;
					}
					return false;
				}
			}
			return true;
		},


		// gui mappings

		hasSubDivs: false,
		termStringStart: '',
		termStringEnd: '',

		termSpecials: {
			// special HTML escapes
			0: '&nbsp;',
			1: '&nbsp;',
			9: '&nbsp;',
			32: '&nbsp;',
			34: '&quot;',
			38: '&amp;',
			60: '&lt;',
			62: '&gt;',
			127: '&loz;',
			0x20AC: '&euro;'
		},

		// extensive list of max 8 styles (2^n, n<16)
		termStyles: [1,2,4,8, 16],
		// style markup: one letter keys, reserved keys: "p" (plain), "c" (color)
		termStyleMarkup: {
			'r': 1,
			'u': 2,
			'i': 4,
			's': 8,
			'b': 16 // map "b" to 16 (italics) for ANSI mapping
		},
		// mappings for styles (heading HTML)
		termStyleOpen: {
			1: '<span class="termReverse">',
			2: '<u>',
			4: '<i>',
			8: '<strike>',
			16: '<i>'
		},
		// mapping for styles (trailing HTML)
		termStyleClose: {
			1: '<\/span>',
			2: '<\/u>',
			4: '<\/i>',
			8: '<\/strike>',
			16: '</i>'
		},

		// method to install custom styles
		assignStyle: function(styleCode, markup, htmlOpen, htmlClose) {
			var tg=Terminal.prototype.globals;
			// check params
			if (!styleCode || isNaN(styleCode)) {
				if (styleCode>=256) {
					alert('termlib.js:\nCould not assign style.\n'+s+' is not a valid power of 2 between 0 and 256.');
					return;
				}
			}
			var s=styleCode&0xff;
			var matched=false;
			for (var i=0; i<8; i++) {
				if ((s>>>i)&1) {
					if (matched) {
						alert('termlib.js:\nCould not assign style code.\n'+s+' is not a power of 2!');
						return;
					}
					matched=true;
				}
			}
			if (!matched) {
				alert('termlib.js:\nCould not assign style code.\n'+s+' is not a valid power of 2 between 0 and 256.');
				return;
			}
			markup=String(markup).toLowerCase();
			if (markup=='c' || markup=='p') {
				alert('termlib.js:\nCould not assign mark up.\n"'+markup+'" is a reserved code.');
				return;
			}
			if (markup.length>1) {
				alert('termlib.js:\nCould not assign mark up.\n"'+markup+'" is not a single letter code.');
				return;
			}
			var exists=false;
			for (var i=0; i<tg.termStyles.length; i++) {
				if (tg.termStyles[i]==s) {
					exists=true;
					break;
				}
			}
			if (exists) {
				var m=tg.termStyleMarkup[markup];
				if (m && m!=s) {
					alert('termlib.js:\nCould not assign mark up.\n"'+markup+'" is already in use.');
					return;
				}
			}
			else {
				if (tg.termStyleMarkup[markup]) {
					alert('termlib.js:\nCould not assign mark up.\n"'+markup+'" is already in use.');
					return;
				}
				tg.termStyles[tg.termStyles.length]=s;
			}
			// install properties
			tg.termStyleMarkup[markup]=s;
			tg.termStyleOpen[s]=htmlOpen;
			tg.termStyleClose[s]=htmlClose;
		},

		// ANSI output mapping (styles & fg colors only)

		ANSI_regexp: /(\x1b\[|x9b)([0-9;]+?)([a-zA-Z])/g, // CSI ( = 0x1b+"[" or 0x9b ) + params + letter
		ANIS_SGR_codes: {
			'0': '%+p',
			'1': '%+b',
			'3': '%+i',
			'4': '%+u',
			'7': '%+r',
			'9': '%+s',
			'21': '%+u',
			'22': '%-b',
			'23': '%-i',
			'24': '%-u',
			'27': '%-r',
			'29': '%-s',
			'30': '%c(0)', // using default fg color for black (black: "%c(1)")
			'31': '%c(a)',
			'32': '%c(b)',
			'33': '%c(c)',
			'34': '%c(d)',
			'35': '%c(e)',
			'36': '%c(f)',
			'37': '%c(#999)',
			'39': '%c(0)',
			'90': '%c(9)',
			'91': '%c(2)',
			'92': '%c(3)',
			'93': '%c(4)',
			'94': '%c(5)',
			'95': '%c(6)',
			'96': '%c(7)',
			'97': '%c(8)',
			'99': '%c(0)',
			'trueBlack': '%c(1)'
		},

		ANSI_map: function(t, trueBlack) {
			// transform simple ANSI SGR codes to internal markup
			var tg=Terminal.prototype.globals;
			tg.ANSI_regexp.lastIndex=0;
			return t.replace(
				tg.ANSI_regexp,
				function (str, p1, p2, p3, offset, s) {
					return tg.ANSI_replace(p2, p3, trueBlack);
				}
			);
		},

		ANSI_replace: function(p, cmd, trueBlack) {
			var tg=Terminal.prototype.globals;
			if (cmd=='m') {
				if (p=='') {
					return tg.ANIS_SGR_codes[0];
				}
				else if (trueBlack && p=='30') {
					return tg.ANIS_SGR_codes.trueBlack;
				}
				else if (tg.ANIS_SGR_codes[p]) {
					return tg.ANIS_SGR_codes[p];
				}
			}
			return '';
		},


		// basic DHTML dynamics and browser abstraction

		writeElement: function(e,t) {
			if (document.getElementById) {
				var obj=document.getElementById(e);
				obj.innerHTML=t;
			}
			else if (document.all) {
				document.all[e].innerHTML=t;
			}
		},

		setElementXY: function(d,x,y) {
			if (document.getElementById) {
				var obj=document.getElementById(d);
				obj.style.left=x+'px';
				obj.style.top=y+'px';
			}
			else if (document.all) {
				document.all[d].style.left=x+'px';
				document.all[d].style.top=y+'px';
			}
		},

		setVisible: function(d,v) {
			if (document.getElementById) {
				var obj=document.getElementById(d);
				obj.style.visibility= (v)? 'visible':'hidden';
			}
			else if (document.all) {
				document.all[d].style.visibility= (v)? 'visible':'hidden';
			}
		},

		setDisplay: function(d,v) {
			if (document.getElementById) {
				var obj=document.getElementById(d);
				obj.style.display=v;
			}
			else if (document.all) {
				document.all[d].style.display=v;
			}
		},

		guiElementsReady: function(e) {
			if (document.getElementById) {
				return (document.getElementById(e))? true:false;
			}
			else if (document.all) {
				return (document.all[e])? true:false;
			}
			else {
				return false;
			}
		},


		// constructor mods (MSIE fixes)

		_termString_makeKeyref: function() {
			var tg=Terminal.prototype.globals;
			var termString_keyref= tg.termString_keyref= new Array();
			var termString_keycoderef= tg.termString_keycoderef= new Array();
			var hex= new Array('A','B','C','D','E','F');
			for (var i=0; i<=15; i++) {
				var high=(i<10)? i:hex[i-10];
				for (var k=0; k<=15; k++) {
					var low=(k<10)? k:hex[k-10];
					var cc=i*16+k;
					if (cc>=32) {
						var cs=unescape("%"+high+low);
						termString_keyref[cc]=cs;
						termString_keycoderef[cs]=cc;
					}
				}
			}
		},

		_extendMissingStringMethods: function() {
			if (!String.fromCharCode || !String.prototype.charCodeAt) {
				Terminal.prototype.globals._termString_makeKeyref();
			}
			if (!String.fromCharCode) {
				String.fromCharCode=function(cc) {
					return (cc!=null)? Terminal.prototype.globals.termString_keyref[cc] : '';
				};
			}
			if (!String.prototype.charCodeAt) {
				String.prototype.charCodeAt=function(n) {
					cs=this.charAt(n);
					return (Terminal.prototype.globals.termString_keycoderef[cs])?
						Terminal.prototype.globals.termString_keycoderef[cs] : 0;
				};
			}
		}

		// end of Terminal.prototype.globals
	}

	// end of Terminal.prototype
	}

	// initialize global data
	Terminal.prototype.globals._initGlobals();

	// global entities for backward compatibility with termlib 1.x applications
	var TerminalDefaults = Terminal.prototype.Defaults;
	var termDefaultHandler = Terminal.prototype.defaultHandler;
	var TermGlobals = Terminal.prototype.globals;
	var termKey = Terminal.prototype.globals.termKey;
	var termDomKeyRef = Terminal.prototype.globals.termDomKeyRef;


	/*
	  === termlib.js Socket Extension v.1.02 ===

	  (c) Norbert Landsteiner 2003-2007
	  mass:werk - media environments
	  <http://www.masswerk.at>

	# Synopsis:
	  Integrates async XMLHttpRequests (AJAX/JSON) tightly into termlib.js

	# Example:

	  myTerm = new Terminal( { handler: myTermHandler } );
	  myTerm.open();

	  function myTermHandler() {
	    this.newLine();
	    if (this.lineBuffer == 'get file') {
	       myTerm.send(
	         {
	           url: 'myservice',
	           data: {
	               book: 'theBook',
	               chapter: 7,
	               page: 45
	             },
	           callback: myCallback
	          }
	       );
	       return;
	    }
	    else {
	       // ...
	    }
	    this.prompt();
	  }

	  function myCallback() {
	  	if (this.socket.success) {
	  		this.write(this.socket.responseText);
	  	}
	  	else {
	  		this.write('OOPS: ' + this.socket.status + ' ' + this.socket.statusText);
	  		if (this.socket.errno) {
	  			this.newLine();
	  			this.write('Error: ' + this.socket.errstring);
	  		}
	  	}
	  	this.prompt();
	  }


	# Documentation:

	  for usage and description see readme.txt chapter 13:
	  <http://www.masswerk.at/termlib/readme.txt>

	  or refer to the sample page:
	  <http://www.masswerk.at/termlib/sample_socket.html>

	*/

	Terminal.prototype._HttpSocket = function() {
		var req=null;
		if (window.XMLHttpRequest) {
			try {
				req=new XMLHttpRequest();
			}
			catch(e) {}
		}
		else if (window.ActiveXObject) {
			var prtcls=this._msXMLHttpObjects;
			for (var i=0; i<prtcls.length; i++) {
				try {
					req=new ActiveXObject(prtcls[i]);
					if (req) {
						// shorten proto list to working element
						if (prtcls.length>1) this.prototype._msXMLHttpObjects= [ prtcls[i] ];
						break;
					}
				}
				catch(e) {}
			}
		}
		this.request=req;
		this.url;
		this.data=null;
		this.query='';
		this.timeoutTimer=null;
		this.localMode=Boolean(window.location.href.search(/^file:/i)==0);
		this.error=0;
	}

	Terminal.prototype._HttpSocket.prototype = {
		version: '1.02',
		// config
		useXMLEncoding: false, // use ";" as separator if true, "&" else
		defaulTimeout: 10000,  // request timeout in ticks (milliseconds)
		defaultMethod: 'GET',
		forceNewline: true,    // translate line-breaks in responseText to newlines

		// static const
		errno: {
			OK: 0,
			NOTIMPLEMENTED: 1,
			FATALERROR: 2,
			TIMEOUT: 3,
			NETWORKERROR: 4,
			LOCALFILEERROR: 5
		},
		errstring: [
			'',
			'XMLHttpRequest not implemented.',
			'Could not open XMLHttpRequest.',
			'The connection timed out.',
			'Network error.',
			'The requested local document was not found.'
		],

		// private static data
		_msXMLHttpObjects: [
			'Msxml2.XMLHTTP',
			'Microsoft.XMLHTTP',
			'Msxml2.XMLHTTP.5.0',
			'Msxml2.XMLHTTP.4.0',
			'Msxml2.XMLHTTP.3.0'
		],

		// internal methods
		serializeData: function() {
			this.query=this.serialize(this.data);
		},
		serialize: function(data) {
			var v='';
			if( data != null ) {
				switch (typeof data) {
					case 'object':
						var d=[];
						if (data instanceof Array) {
							// array
							for (var i=0; i<data.length; i++) {
								d.push(this.serialize(data[i]));
							}
							v= d.join(',');
							break;
						}
						for (var i in data) {
							switch (typeof data[i]) {
								case 'object':
									d.push(encodeURIComponent(i)+'='+this.serialize(data[i]));
									break;
								default:
									d.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]));
									break;
							}
						}
						v= (this.useXMLEncoding)? d.join(';') : d.join('&');
						break;
					case 'number':
						v=String(data);
						break;
					case 'string':
						v=encodeURIComponent(data);
						break;
					case 'boolean':
						v=(data)? '1':'0';
						break;
				}
			}
			return v;
		},
		toCamelCase: function(s) {
			if (typeof s!='string') s=String(s);
			var a=s.toLowerCase().split('-');
			var cc=a[0];
			for (var i=1; i<a.length; i++) {
				p=a[i];
				if (p.length) cc+=p.charAt(0).toUpperCase()+p.substring(1);
			}
			return cc;
		},
		callbackHandler: function() {
			if (this.termRef.closed) return;
			var r=this.request;
			if (this.error==0 && r.readyState!=4) return;
			if (this.timeoutTimer) {
				clearTimeout (this.timeoutTimer);
				this.timeoutTimer = null;
			}
			var success=false;
			var failed=true;
			var response={
				headers: {},
				ErrorCodes: this.errno
			};
			if (this.localMode) {
				if (this.error && this.error<this.errno.NETWORKERROR) {
					response.status=0;
					response.statusText='Connection Error';
					response.responseText='';
					response.responseXML=null;
				}
				else if (this.error || r.responseText==null) {
					failed=false;
					response.status=404;
					response.statusText='Not Found';
					response.responseText='The document '+this.url+' was not found on this file system.';
					response.responseXML=null;
					this.error=this.errno.LOCALFILEERROR;
				}
				else {
					success=true;
					failed=false;
					response.status=200;
					response.statusText='OK';
					response.responseText=r.responseText;
					response.responseXML=r.responseXML;
				}
			}
			else {
				try {
					if (!this.error) {
						if (typeof r == 'object' && r.status != undefined)  {
							failed=false;
							if (r.status >= 200 && r.status < 300) {
								success=true;
							}
							else if (r.status >= 12000) {
								// MSIE network error
								failed=true;
								this.error=this.errno.NETWORKERROR;
							}
						}
					}
				}
				catch(e) {}
				if (!failed) {
					response.status=r.status;
					response.statusText= (r.status==404)? 'Not Found':r.statusText; // force correct header
					response.responseText=r.responseText;
					response.responseXML=r.responseXML;
					if (this.getHeaders) {
						if (this.getHeaders instanceof Array) {
							for (var i=0; i<this.getHeaders.length; i++) {
								var h=this.getHeaders[i];
								try {
									response.headers[this.toCamelCase(h)]=r.getResponseHeader(h);
								}
								catch(e) {}
							}
						}
						else {
							for (var h in this.getHeaders) {
								try {
									response.headers[this.toCamelCase(h)]=r.getResponseHeader(h);
								}
								catch(e) {}
							}
						}
					}
				}
				else {
					response.status=0;
					response.statusText='Connection Error';
					response.responseText='';
					response.responseXML=null;
				}
			}
			if (this.forceNewline) response.responseText=response.responseText.replace(/\r\n?/g, '\n');
			response.url=this.url;
			response.data=this.data;
			response.query=this.query;
			response.method=this.method;
			response.success=success;
			response.errno=this.error;
			response.errstring=this.errstring[this.error];
			var term=this.termRef;
			term.socket=response;
			if (this.callback) {
				if (typeof this.callback=='function') {
					this.callback.apply(term);
				}
				else if (window[this.callback] && typeof window[this.callback]=='function') {
					window[this.callback].apply(term);
				}
				else {
					term._defaultServerCallback();
				}
			}
			else {
				term._defaultServerCallback();
			}
			delete term.socket;
			this.request=null;
			this.callback=null;
		},
		timeoutHandler: function() {
			this.error = this.errno.TIMEOUT;
			try {
				this.request.abort();
			}
			catch(e) {}
			if (!this.localMode) this.callbackHandler();
		}
	}

	Terminal.prototype.send = function( opts ) {
		var soc = new this._HttpSocket();
		if (opts) {
			if (typeof opts.method == 'string') {
				switch (opts.method.toLowerCase()) {
					case 'post':
						soc.method='POST'; break;
					case 'get':
						soc.method='GET'; break;
					default:
						soc.method=soc.defaultMethod.toUpperCase();
				}
			}
			else {
				soc.method=soc.defaultMethod;
			}
			if (opts.postbody != undefined) {
				soc.method='POST';
				soc.query=opts.postbody;
				soc.data=opts.data;
			}
			else if (opts.data != undefined) {
				soc.data=opts.data;
				soc.serializeData();
			}
			if (opts.url) soc.url=opts.url;
			if (opts.getHeaders && typeof opts.getHeaders=='object') {
				soc.getHeaders=opts.getHeaders;
			}
		}
		else {
			opts = {}
			soc.method=soc.defaultMethod;
		}
		var uri=soc.url;
		if (soc.method=='GET') {
			if (soc.query) {
				uri+= (uri.indexOf('?')<0)?
					'?'+soc.query :
					(soc.useXMLEncoding)? ';'+soc.query : '&'+soc.query;
			}
			if (!soc.localMode) {
				// add a random value to the query string (force a request)
				var uniqueparam= '_termlib_reqid=' +new Date().getTime()+'_'+Math.floor(Math.random()*100000);
				uri+= (uri.indexOf('?')<0)?
					'?'+uniqueparam :
					(soc.useXMLEncoding)? ';'+uniqueparam : '&'+uniqueparam;
			}
		}
		soc.callback=opts.callback;
		soc.termRef=this;
		if (!soc.request) {
			soc.error = soc.errno.NOTIMPLEMENTED;
			soc.callbackHandler();
			return;
		}
		else {
			try {
				if (opts.userid!=undefined) {
					if (opts.password!=undefined) {
						soc.request.open(soc.method, uri, true, opts.userid, opts.password);
					}
					else {
						soc.request.open(soc.method, uri, true, opts.userid);
					}
				}
				else {
					soc.request.open(soc.method, uri, true);
				}
			}
			catch(e) {
				soc.error = soc.errno.FATALERROR;
				soc.callbackHandler();
				return;
			}
			var body=null;
			if (soc.method == 'POST') {
				try {
					soc.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				}
				catch(e) {}
				body=soc.query;
			}
			if (opts.headers && typeof opts.headers == 'objects') {
				for (var i in opts.headers) {
					try {
						soc.request.setRequestHeader(i, opts.headers[i]);
					}
					catch(e) {}
				}
			}
			if (opts.mimetype && soc.request.overrideMimeType) {
				try {
					soc.request.overrideMimeType(opts.mimetype);
					// force "Connection: close" (Bugzilla #246651)
					soc.request.setRequestHeader('Connection', 'close');
				}
				catch(e) {}
			}

			var timeoutDelay=(opts.timeout && typeof opts.timeout=='number')? opts.tiomeout : soc.defaulTimeout;

			soc.request.onreadystatechange=function() { soc.callbackHandler(); };
			try {
				soc.request.send(body);
			}
			catch(e) {
				if (soc.localMode) {
					soc.request.onreadystatechange=null;
					soc.request.abort();
					soc.error = soc.errno.LOCALFILEERROR;
				}
				else {
					soc.request.onreadystatechange=null;
					try {
						soc.request.abort();
					}
					catch(e2) {}
					soc.error = soc.errno.NETWORKERROR;
				}
				soc.callbackHandler();
				return true;
			}
			soc.timeoutTimer = setTimeout(function() { soc.timeoutHandler() }, timeoutDelay);
		}
	}
	Terminal.prototype._defaultServerCallback = function() {
		if (this.socket.success) {
			// output im more-mode
			this.write('Server Response:%n'+this.socket.responseText, true);
		}
		else {
			var s='Request failed: '+this.socket.status+' '+this.socket.statusText;
			if (this.socket.errno) s+='%n'+this.socket.errstring;
			this.write(s);
			this.prompt();
		}
	}


	// eof
	module.exports = Terminal;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-22T19:11Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					// Support: IE<11
					// option.value not trimmed (#14858)
					return jQuery.trim( elem.value );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
								jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8+
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		context = context || ( support.createHTMLDocument ?
			document.implementation.createHTMLDocument( "" ) :
			document );

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 3 */
/***/ function(module, exports) {

	var hashexp = {
	  sha: function(msg) {


	    function rotate_left(n,s) {


	      var t4 = ( n<<s ) | (n>>>(32-s));


	      return t4;


	    };




	    function lsb_hex(val) {


	      var str="";


	      var i;


	      var vh;


	      var vl;




	      for( i=0; i<=6; i+=2 ) {


	        vh = (val>>>(i*4+4))&0x0f;


	        vl = (val>>>(i*4))&0x0f;


	        str += vh.toString(16) + vl.toString(16);


	      }


	      return str;


	    };




	    function cvt_hex(val) {


	      var str="";


	      var i;


	      var v;




	      for( i=7; i>=0; i-- ) {


	        v = (val>>>(i*4))&0x0f;


	        str += v.toString(16);


	      }


	      return str;


	    };






	    function Utf8Encode(string) {


	      string = string.replace(/\r\n/g,"\n");


	      var utftext = "";




	      for (var n = 0; n < string.length; n++) {




	        var c = string.charCodeAt(n);




	        if (c < 128) {


	          utftext += String.fromCharCode(c);


	        }


	        else if((c > 127) && (c < 2048)) {


	          utftext += String.fromCharCode((c >> 6) | 192);


	          utftext += String.fromCharCode((c & 63) | 128);


	        }


	        else {


	          utftext += String.fromCharCode((c >> 12) | 224);


	          utftext += String.fromCharCode(((c >> 6) & 63) | 128);


	          utftext += String.fromCharCode((c & 63) | 128);


	        }




	      }




	      return utftext;


	    };




	    var blockstart;


	    var i, j;


	    var W = new Array(80);


	    var H0 = 0x67452301;


	    var H1 = 0xEFCDAB89;


	    var H2 = 0x98BADCFE;


	    var H3 = 0x10325476;


	    var H4 = 0xC3D2E1F0;


	    var A, B, C, D, E;


	    var temp;




	    msg = Utf8Encode(msg);




	    var msg_len = msg.length;




	    var word_array = new Array();


	    for( i=0; i<msg_len-3; i+=4 ) {


	      j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |


	      msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);


	      word_array.push( j );


	    }




	    switch( msg_len % 4 ) {


	      case 0:


	      i = 0x080000000;


	      break;


	      case 1:


	      i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;


	      break;




	      case 2:


	      i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;


	      break;




	      case 3:


	      i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;


	      break;


	    }




	    word_array.push( i );




	    while( (word_array.length % 16) != 14 ) word_array.push( 0 );




	    word_array.push( msg_len>>>29 );


	    word_array.push( (msg_len<<3)&0x0ffffffff );






	    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {




	      for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];


	      for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);




	      A = H0;


	      B = H1;


	      C = H2;


	      D = H3;


	      E = H4;




	      for( i= 0; i<=19; i++ ) {


	        temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;


	        E = D;


	        D = C;


	        C = rotate_left(B,30);
	        B = A;
	        A = temp;
	      }
	      for( i=20; i<=39; i++ ) {
	        temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
	        E = D;
	        D = C;
	        C = rotate_left(B,30);
	        B = A;
	        A = temp;
	      }
	      for( i=40; i<=59; i++ ) {
	        temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
	        E = D;
	        D = C;
	        C = rotate_left(B,30);
	        B = A;
	        A = temp;
	      }
	      for( i=60; i<=79; i++ ) {
	        temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
	        E = D;
	        D = C;
	        C = rotate_left(B,30);
	        B = A;
	        A = temp;
	      }
	      H0 = (H0 + A) & 0x0ffffffff;
	      H1 = (H1 + B) & 0x0ffffffff;
	      H2 = (H2 + C) & 0x0ffffffff;
	      H3 = (H3 + D) & 0x0ffffffff;
	      H4 = (H4 + E) & 0x0ffffffff;

	    }




	    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

	    return temp.toLowerCase();



	  }

	};


	var getUsername = function(){
	  console.log("Arthur.Digby.Sellers");
	};

	module.exports = hashexp;
	window.getUsername = getUsername;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var someObject = __webpack_require__(5);


	var Structures = {
	  spit: function(){
	    console.log("SPITTING");
	  },
	  createBlock: function(){
	    var h = Math.random() * (170 - 150) + 150;
	    var t = Math.random();
	    if (t < .499){
	      var y = 10;
	    } else {
	      var y = 250 - (h + 10);
	    }
	    var x = 550;
	    var w = 50;
	    console.log(x,y,h,w);
	    var options = {"xVal": x, "yVal": y, "vel": 3, "height": h, "width": w};
	    var block = new someObject.MovingObject(options);
	    block.draw(this);
	  },
	  set: function(){
	    var context = this;
	    context.fillStyle = "#FF0000";
	    context.fillRect(0, 100, 50, 50);
	    context.fillStyle = "#ff5a00";
	    context.fillRect(0, 0, 600, 10);
	    context.fillStyle = "#ff5a00";
	    context.fillRect(0, 240, 600, 10);
	  },
	  send: function(x, y, w, h){
	    // var context = this;
	    // for (var i = x; i > 0; i-=10){
	    //   window.setTimeout(function(){context.fillRect(i,y,w,h);}, 1000);
	    //   window.setTimeout(function(){context.clearRect(i,y,w,h);}, 1500);
	    // }
	  },
	  ex: function(){
	    for (var x = 0; x < 6; x++){
	      console.log(x);
	    }
	  },
	  shift: function(x, y, w, h){
	    var context = this;
	    context.fillStyle = "#ff5a00";
	    context.fillRect(x,y,w,h);
	  },
	  moveForward: function(){
	    var context = this;
	    Structures.createBlock.apply(context);
	  }
	};

	module.exports = Structures;


/***/ },
/* 5 */
/***/ function(module, exports) {

	  var someObject = {};

	  var MovingObject = someObject.MovingObject = function (options) {
	    this.xVal = options.xVal;
	    this.yVal = options.yVal;
	    this.vel = options.vel;
	    this.height = options.height;
	    this.width = options.width;
	  };

	  var Something = someObject.Something = function() {
	    console.log("something worked");
	  };

	  MovingObject.prototype.collideWith = function (otherObject) {
	     // default do nothing    /
	  };



	  MovingObject.prototype.isCollidedWith = function (otherObject) {
	    // var centerDist = someObject.Util.dist(this.pos, otherObject.pos);
	    // return centerDist < (this.radius + otherObject.radius);
	  };

	  MovingObject.prototype.isWrappable = true;

	  var NORMAL_FRAME_TIME_DELTA = 1000/60;

	  MovingObject.prototype.move = function (timeDelta, ctx) {
	    //timeDelta is number of milliseconds since last move
	    //if the computer is busy the time delta will be larger
	    //in this case the MovingObject should move farther in this frame
	    //velocity of object is how far it should move in 1/60th of a second
	    var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
	    ctx.clearRect(this.xVal, this.yVal, this.width, this.height);
	    this.xVal -= 60;
	    function draw(){
	      setTimeout //try this
	      requestAnimationFrame(draw);
	      ctx.fillRect(this.xVal, this.yVal, this.width, this.height)
	    }
	    // this.draw(ctx);
	    console.log("in move");
	  };
	  MovingObject.prototype.draw = function (ctx) {
	    ctx.fillStyle = "#0ff000";
	    console.log(this);
	    console.log(ctx);
	    ctx.fillRect(this.xVal, this.yVal, this.width, this.height);
	  };

	  MovingObject.prototype.remove = function () {
	    this.game.remove(this);
	  };

	  module.exports = someObject;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var myObj = new Thing(2, true);

	function Thing(v1, v2) {
	    // ...

	    // pub methods
	    this.init = function(){
	        this.number = v1;
	        this.bool = v2;
	    };

	    // ...

	    this.init(); // <------------ added this
	}

	module.exports = myObj;


/***/ }
/******/ ]);