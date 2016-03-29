var Structures = {
  spit: function(){
    console.log("SPITTING");
  },
  createBlock: function(){
    var h = Math.random() * (170 - 150) + 150;
    var t = Math.random();
    if (t < .4999){
      var y = 10;
    } else {
      var y = 250 - (h + 10);
    }
    var x = Math.random() * (550 - 10);
    var w = 50;
    console.log(x,y,h,w);
    Structures.shift.apply(this,[x, y, w, h]);
  },
  draw: function(){
    var context = this;
    context.fillStyle = "#FF0000";
    context.fillRect(0, 100, 50, 50);
    context.fillStyle = "#0000FF";
    context.fillRect(550, 10, 50, 230);
    context.fillStyle = "#ff5a00";
    context.fillRect(0, 0, 600, 10);
    context.fillStyle = "#ff5a00";
    context.fillRect(0, 240, 600, 10);
    context.fillRect(150, 10, 50, 180);
    context.fillRect(400, 70, 50, 180);
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
