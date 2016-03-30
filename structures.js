var someObject = require("./object.js");


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
