function Bike() {
  this.broken = false;
}

Bike.prototype.smash = function() {
  this.broken = true;
  return this.broken;
};

Bike.prototype.fix = function() {
  this.broken = false;
  return this.broken;
};

module.exports = Bike;