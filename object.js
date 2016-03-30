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
     // default do nothing
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.xVal, this.yVal, this.width, this.height);
    ctx.move(this.vel);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    // var centerDist = someObject.Util.dist(this.pos, otherObject.pos);
    // return centerDist < (this.radius + otherObject.radius);
  };

  MovingObject.prototype.isWrappable = true;

  var NORMAL_FRAME_TIME_DELTA = 1000/60;
  MovingObject.prototype.move = function (timeDelta) {
    //timeDelta is number of milliseconds since last move
    //if the computer is busy the time delta will be larger
    //in this case the MovingObject should move farther in this frame
    //velocity of object is how far it should move in 1/60th of a second
    var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
    this.xVal -= velocityScale;
  };

  MovingObject.prototype.remove = function () {
    this.game.remove(this);
  };

  module.exports = someObject;
