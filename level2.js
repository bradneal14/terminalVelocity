var zeroTerm_E = new Terminal({
  handler: zeroTermHandler_E,
  greeting: "Sweet.. We just might have a shot afterall \nOkay, now lets run through the whole thing and see what it will really be like. \nEnter '#open' to get back into the code-terminal \nOnce inside, type 'server.status' and then press enter. \nOn the next line, type '#submit' to run our status check on the server and exit the code-terminal. \nIt's risky to spend too much time in the code-terminal so try and be quick if you can.",
  termDiv:'main',
  crsrBlockMode: false,
  cols:220,
  rows:150,
  textColor: "white"
});

function zeroTermHandler_E(){
  var line_E = this.lineBuffer;
  var codeInj0 = this.codeInj0 || "";
  if (line_E == "reset") {
    this.reset();
  } else if (line_E == "#submit") {
    evaluate(codeInj0, 0);
    this.codeInj = "";
  } else {
    this.codeInj0 = codeInj0 + line_E;
  }
  this.prompt();
}
