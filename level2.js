
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
  "~>You're really getting the hang of this.",
  "~>Variables available:",
  "~> None.. What?",
  "~>",
  "~> Have you been wondering about the map above you?",
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
    evaluate(codeInj2).bind(this);
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


function evaluate(block){
  var codeStrWithSpaces = "";
  codeStrWithSpaces = block.slice(9);
  var codeStr = codeStrWithSpaces.replace(/ +?/g, '');
  console.log(codeStr.length);
  if (curLevel === 1) {
    console.log("its level 1");
    if (codeStr == "x=14;" || codeStr == "14" || codeStr == "x=14"){ //right answer
      console.log("we made it");
      curLevel += 1;
      this.codeStr = "";
      secondTerm_B.close();
      secondTerm_A.close();
      thirdTerm_A.open();
      placeCircle();
    } else {
      console.log("were in the else"); //wrong answer
      this.codeStr = "";
      secondTerm_A.open();
      secondTerm_A.write("Sorry, incorrect. Try submitting x and it's value");
      secondTerm_A.newLine();
    }
  } else if (curLevel === 2){
    if (codeStr == "100" || codeStr == "q=100" || codeStr == "q=100;"){
      console.log("were ready for level 3");
      curLevel += 1;
      this.codeStr = "";

    } else {
      console.log('were in level 2s else');
    }
  }
}
